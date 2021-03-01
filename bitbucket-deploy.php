<?php
/* Basic settings */

$projectName = "Project X"; // Just for email notifications
$email = "[...]@into-digital.fi";
$repoUri = "git@bitbucket.org:intodigital/[...].git";
$remoteBranch = "master"; // master, staging or production

$bbjson = @file_get_contents('bitbucket-config.json');
if ($bbjson) {
    $bbconf = @json_decode($bbjson);
    if ($bbconf) {

        $projectName = $bbconf->projectName;
        $email = $bbconf->projectEmail;
        $repoUri = $bbconf->projectUri;
        $remoteBranch = $bbconf->projectBranch;

    }
}



/* Advanced settings */

//ini_set("display_errors", 1);
$gitPath = "git"; // Git binary path if not global. "/usr/local/cpanel/3rdparty/bin/git" etc.
$localProjectPath = dirname(__FILE__);  // Change if project is not in same directory as this deploy script


// Don't fuck with it. Unless you really want to.
// -------------------------------------------------------------------

if ($repoUri == 'git@bitbucket.org:intodigital/[...].git' || $email == '[...]@into-digital.fi') {
    logput_stuff('Check settings before running');

    if ($repoUri == 'git@bitbucket.org:intodigital/[...].git') {
        logput_stuff('Get SSH/git@bitbucket.org $repoUri from bitbucket');
    }
    if ($email == '[...]@into-digital.fi') {
        logput_stuff('Set your email address to $email');
    }

    exit;
}

if (strpos($repoUri, 'git@') !== 0) {
    logput_stuff('Use SSL (git@bitbucket.org...) as $repoUri. HTTPS requires password and thus fails.');
    mail_stuff($email, $projectName . ': Use SSL URI for deploy', 'Use SSL (git@bitbucket.org.../) as $repoUri. HTTPS requires password and thus fails.');
    exit;
}

// Script start
output_stuff("Start!");
log_stuff("\n-----");

$runningFromWebhook  = false;
$payload = file_get_contents('php://input');
if (!empty($payload)) {
    $runningFromWebhook  = true;
    log_stuff("Running webhook");
} else {
    logput_stuff("Running deploy manually...");
}


// Make sure we're in the right directory.
shell_exec("cd " . $localProjectPath);


// Check if git is initialized at all and remote repository is set & clone if not.
if (!is_dir("./.git")) {
    // exec git init
    logput_stuff("Git not initialized, running git init");

    $output = shell_exec($gitPath . ' init');
    if (!empty($output)) {
        log_stuff($output);
    }

    if (!is_dir("./.git")) {
        logput_stuff("Couldn't initialize repository, stopping...");
        mail_stuff($email, $projectName . ': Couldn\'t initialize git repository', 'Does the server have git installed?');
        exit();
    } else {
        logput_stuff("Git initialized!");
    }

}


// Doesn't actually check if "origin" is set, but instead if there is any remote at all, so this may cause issues if there are multiple remotes.
$gitRemotes = trim(shell_exec($gitPath . " config remote.origin.url"));
if (!empty($gitRemotes) && $gitRemotes != $repoUri) {
    logput_stuff('$repoUri does not match .git/config:remote.origin.url. Local .git/ was probably uploaded to server, try deleting it.');
    mail_stuff($email, $projectName . ': Remote url mismatch', "bitbucket-config.json:\n'$repoUri'\n.git/config\n'$gitRemotes'\n\nLocal .git/ was probably uploaded to server, try deleting it.");
    exit();
        
} else if (empty($gitRemotes)) {

    // Set remote.
    logput_stuff("Remote origin not set, running git remote add origin " . $repoUri);

    $output = shell_exec($gitPath . " remote add origin " . $repoUri);
    if (!empty($output)) {
        log_stuff($output);
    }

    // Remote add origin doesn't give any message so check again if any remotes exist.
    $gitRemotes = trim(shell_exec($gitPath . " config remote.origin.url"));
    if (empty($gitRemotes)) {
        logput_stuff("Couldn't add remote, stopping...");
        mail_stuff($email, $projectName . ': Couldn\'t add remote', 'I have no idea, ask someone.');
        exit();
    } else {
        logput_stuff("Origin set!");
    }

    // Fetch commits
    $output = shell_exec($gitPath . " fetch origin {$remoteBranch}");

    // Destroy everything!
    $output = shell_exec($gitPath . " reset --hard FETCH_HEAD");

    // Link local master to track desired remote branch.
    $output = shell_exec($gitPath . " branch --set-upstream-to=origin/{$remoteBranch} master");

}



// presuming git is properly configured and can pull stuff
// -------------------------------------------------------------------



// First update remote info and check if remote branch is ahead
logput_stuff("Check if update is needed.");
$output = shell_exec($gitPath . " checkout master"); // ignores tags
$output = shell_exec($gitPath . " remote update");
$localHeadHash = shell_exec($gitPath . " rev-parse HEAD");
$remoteHeadHash = shell_exec($gitPath . " rev-parse remotes/origin/" . $remoteBranch);
if ($localHeadHash == $remoteHeadHash) {
    logput_stuff("Local is up to date with remote.");
    $localHeadHash = shell_exec($gitPath . " rev-parse --short HEAD");
    logput_stuff("Local HEAD is now at " . $localHeadHash);
}



// tags and past commits can be used to revert back
if (!$runningFromWebhook && !empty($_GET['tag'])) {

    logput_stuff("Reverting to tag " . $_GET["tag"]);

    $output = shell_exec($gitPath . " checkout tags/" . $_GET['tag']);
    output_stuff($output);
    output_stuff("Done!");

    $localHeadHash = shell_exec($gitPath . " rev-parse --short HEAD");
    logput_stuff("Local HEAD is now at " . $localHeadHash);

    exit();

} else if (!$runningFromWebhook && !empty($_GET["commit"])) {

    logput_stuff("Reverting to commit " . $_GET["commit"]);

    // Check if commit is valid and is included in right branch, only local.
    $localBranchListContainingCommit = shell_exec($gitPath . " branch -a --contains " . $_GET["commit"]);

    if (strpos($localBranchListContainingCommit, "remotes/origin/" . $remoteBranch) !== false) {
        // If commit is ok, revert back to it.
        // Note that version fast forwards back to HEAD when remote is updated and webhook is called.
        $output= shell_exec($gitPath . " reset --hard " . $_GET["commit"]);
        output_stuff($output);
        logput_stuff("Done!");

        $localHeadHash = shell_exec($gitPath . " rev-parse --short HEAD");
        logput_stuff("Local HEAD is now at " . $localHeadHash);
    } else {
        logput_stuff("Commit " . $_GET["commit"] . " is not valid.");
    }

    exit();
}



// Discards any changes to _tracked_ files since our last deploy, if something is changed outside version control
// Works only if script is run manually with reset-hard GET-parameter. I.e. won't trigger with normal git push / merge.
if (!$runningFromWebhook && isset($_GET["reset-hard"])) {

    logput_stuff("NOTICE! Local changes discarded with git reset --hard HEAD! Resetting repository...");
    $output = shell_exec($gitPath . " reset --hard HEAD");
    output_stuff($output);

}


// Check and stop if there are any local changes that would be overwritten with pull
$diff = shell_exec($gitPath . " diff --name-only");
if (!empty($diff)) {
    logput_stuff("Pull canceled because there are local changes in  _TRACKED_ files.");
    logput_stuff("Changed files:");
    foreach(explode("\n", $diff) as $filename) {
        if ($filename != "") {
            logput_stuff("- " . $filename, false);
        }
    }

    // Since nothing has changed on server, try to inform last commiter via email
    $message = "Recently made changes on project \"" . $projectName . "\" branch \"" . $remoteBranch . "\" were not deployed on server \"" . $_SERVER[HTTP_HOST] . "\" because there are local changes in git tracked files. This is most likely due to some asshat updating files directly to server instead of using version control. \r\n\r\nThese git tracked files have changed outside version control: \r\n";
    foreach(explode("\n", $diff) as $filename) {
        if ($filename != "") {
            $message .= "- " . $filename . "\r\n";
        }
    }

    $message .= "\r\nYou should merge changes in listed files to version control and then run deploy script manually with get parameter \"reset-hard\". You can find the deployment script url in repository settings -> webhooks. \r\n\r\n";
    $message .= "NOTE! Reset-all deletes all changes done directly on server excluding files that are not tracked. So please take backup or make sure all those changes are moved to version control first because otherwise those changes are gone for good.";

    // get email address of last commiter and send email
    $authorName = shell_exec($gitPath . " --no-pager show -s --format='%an'"); // git --no-pager show -s --format='%an <%ae>'
    $authorEmail = shell_exec($gitPath . " --no-pager show -s --format='%ae'");
    if (!$authorEmail) {
        $authorEmail = $email;
    }

    if ($authorEmail) {
        mail_stuff($authorEmail, "Project " . $projectName . " not updated on server!", $message);
    } else {
        logput_stuff("Author " . $authorName . " does not have email set. Cannot send notifications.");
    }

    output_stuff("Stopping");

    $localHeadHash = shell_exec($gitPath . " rev-parse --short HEAD");
    logput_stuff("Local HEAD is now at " . $localHeadHash);
    exit();
}


// Do pull if everything else is ok.
logput_stuff("Starting pull...");
exec($gitPath . " pull origin " . $remoteBranch, $output, $return_var);

if ($return_var > 0) {
    logput_stuff('Pull failed! Test connection on server with "ssh -T git@bitbucket.org". Ask for help.');
    mail_stuff($email, $projectName . ': Pull failed!', ' Connect to server with SSH/Putty and test connection with "ssh -T git@bitbucket.org". You may need to accept connections to bitbucket, or may be missing ACCESS KEY in bitbucket. Check readme: https://bitbucket.org/intodigital/bitbucket-deploy-script');
    exit;
} else if (!empty($output)) {
    log_stuff($output);
}
$localHeadHash = shell_exec($gitPath . " rev-parse --short HEAD");
logput_stuff("Local HEAD is now at " . $localHeadHash);



// I guess here could be some post deploy scripts or stuff.
// For example if some database update is required.



//output_stuff("The end. Check bitbucket-deploy.log for details.");


// some functions for stuff

function log_stuff ($stuff, $logDate = true) {
    if (!file_exists("bitbucket-deploy.log")) {
        $fp = fopen(dirname(__FILE__)."/bitbucket-deploy.log", "a+");
        fclose($fp);
    }

    if ($logDate) {
        error_log(date("Y-m-d H:i:s") . ": " . $stuff . "\n", 3, dirname(__FILE__) . "/bitbucket-deploy.log");
    } else {
        error_log($stuff . "\n", 3, dirname(__FILE__) . "/bitbucket-deploy.log");
    }
}

function output_stuff ($stuff) {
    if (php_sapi_name() == "cli") {
        // In cli-mode
        echo $stuff."\n";
    } else {
        // Not in cli-mode
        echo $stuff."<br>";
    }
}

function logput_stuff ($stuff, $logDate = true) {
    log_stuff($stuff, $logDate);
    output_stuff($stuff);
}

function mail_stuff ($email, $subject, $stuff) {
    if (!mail($email, $subject, $stuff)) {
        logput_stuff("Couldn't send email to last committer (" . $email . ")");
    } else {
        logput_stuff("Email sent to last committer (" . $email . ")");
    }
}
?>
