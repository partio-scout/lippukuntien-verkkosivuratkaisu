<?php
  /* TODO

     Migrate to WP site health check?
     Yoast SEO author sitemap check?
     Yoast SEO attachment pages?
     Make admin change password on live server?
     Actually checking list items?

     plugin library:
     - ajax load more
     - wp all import
     - alternative to enhanced media library
     - quic cloud or ewww image optimizer

     into-digital plugin repository? https://github.com/YahnisElsts/plugin-update-checker
     - share buttons
     - checklist, with install bootstrap
   */

add_action('admin_menu', 'ID_checklist_admin_menu', 999);
function ID_checklist_admin_menu() {
    add_submenu_page('index.php', 'Tarkistuslista käyttöönottoon ja julkaisuun', 'Tarkista nämä!', 'activate_plugins', 'id-checklist', 'IDChecklist::html');
}

/* Global notices */
add_action('admin_notices', 'ID_admin_notices' );
function ID_admin_notices() {

    $current_user = wp_get_current_user();
    if (@$_GET['page'] != 'id-checklist' &&
        is_array($current_user->roles) &&
        in_array('administrator', $current_user->roles)) {

        $local = in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1'));

        if (!get_option('blog_public', null)) {
            $message = '<span class="dashicons dashicons-admin-settings"></span> ' . IDChecklist::$publish['blog_public'][2];
            echo IDChecklist::item_html($message, $local ? 'warning' : 'error');
        }

        $acfsync = IDChecklist::acfsync();
        if ($acfsync[1] == 'error') {
            echo IDChecklist::item_html($acfsync[0]);
        }

        if (!$local) {

            $published = IDChecklist::published();
            if ($published[1] == 'error') {
                echo IDChecklist::item_html($published[0]);
            }

            $analytics = IDChecklist::analytics();
            if ($analytics[1] == 'error') {
                echo IDChecklist::item_html($analytics[0]);
            }

            if (@WP_DEBUG) {
                $message = IDChecklist::$publish['WP_DEBUG'][2];
                echo IDChecklist::item_html($message);
            }
        }

    }

}

class IDChecklist {

    static $setup = array(
        'DISALLOW_FILE_EDIT'                 => array('def', 1, 'Lähdetiedostoja voi muokata hallinnasta, lisää wp-configiin define(\'DISALLOW_FILE_EDIT\', true);', 'error'),
        'self::revisions'                    => array('fun', 15, null, 'error'),
        'permalink_structure'                => array('opt', '/.+/', 'Ota nätit osoitteet käyttöön <a target=\"_blank\" href="options-permalink.php">Asetukset > Osoiterakenne</a>', 'error'),
        'users_can_register'                 => array('opt', 0, 'Kuka tahansa voi rekisteröityä sivustolle <a target=\"_blank\" href="options-general.php">Asetukset > Yleinen</a>', 'warning'),
        'default_comment_status'             => array('opt', '/^(|closed)$/', 'Kommentointi on sallittu <a target=\"_blank\" href="options-discussion.php">Asetukset > Keskustelu</a>', 'warning'),
        'wpseo_titles'                       => array('opt', array('noindex-author-wpseo' => true, 'disable-author' => true), 'Kirjoittaja-arkisto on käytössä, admin-käyttäjätunnus kalastettavissa <a target=\"_blank\" href="admin.php?page=wpseo_titles#top#archives">SEO > Haun ulkoasu > Arkistot</a>', 'warning'),
        'rg_gforms_disable_css'              => array('opt', 1, 'Gravity Formsin oma CSS on käytössä. Ota pois käytöstä, jos käytät Inton lomaketyylejä <a target=\"_blank\" href="admin.php?page=gf_settings">Lomakkeet > Asetukset</a>', 'warning'),
        'rg_gforms_enable_html5'             => array('opt', 1, 'Ota käyttöön HTML5 Gravity Formsissa, jotta lomakkeet ovat mahdollisimman käytettäviä <a target=\"_blank\" href="admin.php?page=gf_settings">Lomakkeet > Asetukset</a>', 'warning'),
        'wordpress-seo/wp-seo.php'           => array('plg', 1, 'Yoast SEO hakukoneoptimointiin ja some-jakoihin', 'error'),
        'acf-content-analysis-for-yoast-seo/yoast-acf-analysis.php' => array('plg', 1, 'ACF Content Analysis, jotta Yoast SEO huomioi ACF-sisällöt', 'warning'),
        'safe-svg/safe-svg.php'              => array('plg', 1, 'Safe SVG, jotta mediakirjastoon saa sanitoituja SVG-tiedostoja', 'warning'),
        'members/members.php'                => array('plg', 1, 'Members, käyttäjäoikeuksien hallintaan, sivuston ja REST APIn laittamiseksi kirjautumisen taakse', 'info'),
        'mce-table-buttons/mce-table-buttons.php' => array('plg', 1, 'Add table plugin to text editor, remember to uncomment button from admin-tweaks.php', 'info'),
        'self::acfpro'                       => array('fun', 1, null, 'warning'),
        'self::gravityforms'                 => array('fun', 1, null, 'warning'),
        'self::relevanssipremium'            => array('fun', 1, null, 'warning'),
        'self::restapi'                      => array('fun', 0, null, 'warning'),
        'self::acfsync'                      => array('fun', 0, null, 'info'),
        );

    static $publish = array(
        'self::published'                 => array('fun', 1, null, 'error'),
        'self::analytics'                 => array('fun', 1, null, 'error'),
        'self::sitemap'                   => array('fun', 1, null, 'info'),
        'WP_DEBUG'                        => array('def', 0, 'Sivusto on debug-tilassa, vaihda wp-configiin define(\'WP_DEBUG\', false);', 'error'),
        'FORCE_SSL_ADMIN'                 => array('def', 1, 'Hallintaan voi kirjautua salaamattomana. Kun sivustolla on https, lisää wp-configiin define(\'FORCE_SSL_ADMIN\', true);', 'warning'),
        'blog_public'                     => array('opt', 1, 'Sivuston näkyminen hakukoneissa on kielletty <a target=\"_blank\" href="options-reading.php">Asetukset > Lukeminen</a>', 'error'),
        'wordfence/wordfence.php'         => array('plg', 1, 'Wordfence Security kirjautumisen ja hallinnan suojaamiseen', 'error'),
        'self::cacheplugin'               => array('fun', 1, null, 'warning'),
        'wp-migrate-db/wp-migrate-db.php' => array('plg', 1, 'WP Migrate DB tietokannan siirtämiseen osoitteesta toiseen, esim. demosta liveksi', 'info', 'tools.php?page=wp-migrate-db')
        );

    static $style = <<<STYLE
<style>
    .id-checklist h1 {
    }
    .id-checklist .notice {
        margin: 0 0 1px;
    }
    .id-checklist .notice-success {
        opacity: 0.5;
        text-decoration: line-through;
        display: none;
    }
    .id-checklist .notice-info {
        color: #aaa;
    }
    .id-checklist .notice-heading {
        border: none;
        box-shadow: none;
        background: none;
    }
    .id-checklist .checkmark {
        font-size: 32px;
    }
    .id-checklist .dashicons-yes {
        color: green;
    }
    .id-checklist .dashicons-no {
        color: red;
    }
</style>
STYLE;


    /* Custom callback functions */

    static function revisions ($max) {

        $revisions = wp_revisions_to_keep((object)array('post_type' => 'page'));
        if ($revisions == -1) {
            $message = "Rajattomasti revisioita per artikkeli, hallinta voi kaatua muistin loppumiseen. filtteri wp_revisions_to_keep teemapohjassa inc/admin-tweaks.php";
            $class = 'error';
        } else if ($revisions > 15) {
            $message = "$revisions revisiota per artikkeli. wp_revisions_to_keep teemapohjassa inc/admin-tweaks.php";
            $class = 'warning';
        } else {
            $message = "$revisions revisiota per artikkeli. wp_revisions_to_keep teemapohjassa inc/admin-tweaks.php";
            $class = 'success';
        }

        return array($message, $class);
    }

    static function cacheplugin ($rec) {
	if (!empty($_SERVER['HTTP_X_LSCACHE'])
            || (isset($_SERVER['LSWS_EDITION']) && strpos( $_SERVER['LSWS_EDITION'], 'Openlitespeed' ) === 0)
            || (isset($_SERVER['SERVER_SOFTWARE']) && $_SERVER['SERVER_SOFTWARE'] == 'LiteSpeed')) {
            $key = 'litespeed-cache/litespeed-cache.php';
            $message = '<span class="dashicons dashicons-admin-plugins"></span> LiteSpeed Cache (Cloudcity) nopeuttamaan sivustoa ja parantamaan hakukonesijoitusta';
        } else {
            $key = 'wp-super-cache/wp-cache.php';
            $message = '<span class="dashicons dashicons-admin-plugins"></span> WP Super Cache nopeuttamaan sivustoa ja parantamaan hakukonesijoitusta';
        }

        $value = is_plugin_active($key);

        $class = 'warning';
        if (!$value && is_file(WP_PLUGIN_DIR . '/' . $key)) {
            $message .= ' <a href="' . self::plugin_activate_href($key) . '">Aktivoi</a>';
        } else if (!$value) {
            $message .= ' <a target=\"_blank\" href="' . self::plugin_install_href($key) . '">Asenna</a>';
        } else {
            $class = 'success';
        }

        return array($message, $class);
    }

    static function acfpro ($rec) {

        $key = 'advanced-custom-fields-pro/acf.php';
        $value = is_plugin_active($key);
        $message = '<span class="dashicons dashicons-admin-plugins"></span> ACF pro, jossain vaiheessa tulee kuitenkin tarvetta';
        $dl = 'https://connect.advancedcustomfields.com/index.php?p=pro&a=download&k=b3JkZXJfaWQ9MzcxNDJ8dHlwZT1wZXJzb25hbHxkYXRlPTIwMTQtMDgtMTIgMTA6Mjg6NTU=';

        $class = 'warning';
        if (!$value && is_file(WP_PLUGIN_DIR . '/' . $key)) {
            $message .= ' <a href="' . self::plugin_activate_href($key) . '">Aktivoi</a>';
        } else if (!$value) {
            $message .= ' <a target=\"_blank\" href="' . $dl . '">Lataa uusin</a> ja <a target=\"_blank\" href="' . admin_url('plugin-install.php?tab=upload') . '">Asenna</a>';
        } else {
            $class = 'success';
        }

        return array($message, $class);
    }

    static function relevanssipremium ($rec) {

        $key = 'relevanssi-premium/relevanssi.php';
        $value = is_plugin_active($key);
        $message = '<span class="dashicons dashicons-admin-plugins"></span> Relevanssi Premium, parantamaan hakusivun tuloksia sekä ennakoivan haun toteutukseen';
        $dl = 'https://www.relevanssi.com/download/';

        $class = 'warning';
        if (!$value && is_file(WP_PLUGIN_DIR . '/' . $key)) {
            $message .= ' <a href="' . self::plugin_activate_href($key) . '">Aktivoi</a>';
        } else if (!$value) {
            $message .= ' <a target=\"_blank\" href="' . $dl . '">Lataa uusin</a> ja <a target=\"_blank\" href="' . admin_url('plugin-install.php?tab=upload') . '">Asenna</a>';
        } else {
            $class = 'success';
        }

        return array($message, $class);
    }

    static function gravityforms ($rec) {

        $key = 'gravityforms/gravityforms.php';
        $value = is_plugin_active($key);
        $message = '<span class="dashicons dashicons-admin-plugins"></span> Gravity Forms lomakkeiden hallintaan';
        $dl = 'https://www.gravityforms.com/my-account/downloads/';

        $class = 'warning';
        if (!$value && is_file(WP_PLUGIN_DIR . '/' . $key)) {
            $message .= ' <a href="' . self::plugin_activate_href($key) . '">Aktivoi</a>';
        } else if (!$value) {
            $message .= ' <a target=\"_blank\" href="' . $dl . '">Lataa uusin</a> ja <a target=\"_blank\" href="' . admin_url('plugin-install.php?tab=upload') . '">Asenna</a>';
        } else {
            $class = 'success';
        }

        return array($message, $class);
    }

    static function restapi ($rec) {

        $enabled = !has_filter('rest_authentication_errors', 'ID_rest_authentication_errors');
        if ($enabled) {
            $message = 'REST API on julkinen';
            $class = 'info';
        } else {
            $message = 'REST API on käytössä vain kirjautuneille';
            $class = 'info';
        }

        return array($message, $class);
    }

    static function published ($rec = null) {

        $dir = get_stylesheet_directory() . '/dist/stylesheets';
        $message = 'Muista ajaa gulp publish lähdekoodien julkaisemiseksi';
        if (!is_dir($dir)) {
            $class = 'error';
        } else {
            $class = 'info';
        }
        return array($message, $class);
    }

    static function analytics ($rec = null) {

        $analytics = get_option('id_analytics', '');

        $class = 'success';
        $message = '<span class="dashicons dashicons-admin-settings"></span> Asenna sivustolle analytics <a target="_blank" href="options-reading.php">Asetukset > Lukeminen</a>';
        if (!$analytics || $analytics == 'UA-2742875-35') {
            $class = 'error';
        }
        return array($message, $class);
    }

    static function sitemap ($rec = null) {

        $message = '<span class="dashicons dashicons-admin-settings"></span> Lähetä Yoast SEOn <a target="_blank" href="admin.php?page=wpseo_xml">sitemap</a> Googlelle <a target="_blank" href="https://www.google.com/webmasters/tools/home?hl=en">Search Consolesta</a>. Kohdasta Crawl > Sitemaps.';
        $class = 'info';

        return array($message, $class);
    }

    static function acfsync ($rec = null) {

        $message = '<span class="dashicons dashicons-admin-plugins"></span> Muista synkronoida versionhallinnasta vedetyt ACF-kenttäryhmät <a href="edit.php?post_status=sync&post_type=acf-field-group"> Custom Fields > Sync available</a>';
        $class = 'info';
        $synccount = 0;

        if (function_exists('acf_get_field_groups')) {
            $groups = acf_get_field_groups();

            // bail early if no field groups
            if (!empty($groups)) {

		// find JSON field groups which have not yet been imported
		foreach( $groups as $group ) {
                    $local = acf_maybe_get($group, 'local', false);
                    $modified = acf_maybe_get($group, 'modified', 0);
                    $private = acf_maybe_get($group, 'private', false);

                    // ignore DB / PHP / private field groups
                    if ($local !== 'json' || $private) {
                        // do nothing

                    } elseif (!$group['ID']) {
                        $synccount++;

                    } elseif ($modified && $modified > get_post_modified_time('U', true, $group['ID'], true)) {
                        $synccount++;

                    }
		}
            }
        }

        if ($synccount) {
            $class = 'error';
        }

        return array($message, $class);
    }

    /* Checklist general logic */

    static function prioritysort ($a, $b) {

        $aprio = isset($a[3]) ? $a[3] : 'info';
        $bprio = isset($b[3]) ? $b[3] : 'info';

        $order = array_flip(array('error', 'warning', 'info', 'success'));

        return $order[$aprio] - $order[$bprio];
    }

    static function html () {
        if (!empty($_POST['projectUri'])) {
            file_put_contents(get_stylesheet_directory() . '/bitbucket-config.json', json_encode($_POST));
        }

        if (!empty($_GET['activate'])) {
            activate_plugin($_GET['activate']);
        }

        echo self::$style;

        echo '<div class="wrap id-checklist">';
        echo '<h1>' . get_admin_page_title() . '</h1>';

        self::items_html();

        echo '</div>';
    }

    static function items_html () {

        uasort(self::$setup, 'IDChecklist::prioritysort');
        uasort(self::$publish, 'IDChecklist::prioritysort');

        echo self::item_html('<h2>Käyttöönotto</h2>', 'heading');
        foreach (self::$setup as $key => $argv) {
            // Check item
            list($message, $class) = self::item_logic($key, $argv);

            // Output item
            echo self::item_html($message, $class);
        }

        echo self::item_html('<h2>Julkaisu</h2>', 'heading');
        foreach (self::$publish as $key => $argv) {
            // Check item
            list($message, $class) = self::item_logic($key, $argv);

            // Output item
            echo self::item_html($message, $class);
        }

        echo '<br><hr>';

        echo self::deploy_html();

        echo '<br><hr>';

        echo self::optimize_html();


    }

    static function item_logic ($key, $argv) {

        // Callback function
        if ($argv[0] == 'fun') {

            return call_user_func($key, $argv[1]);

        } else {

            $message = $argv[2];
            $class = 'success';
            $value = null;

            // Get current value for different types
            if ($argv[0] == 'def' && defined($key)) {

                $value = constant($key);

            } else if ($argv[0] == 'opt') {

                $value = get_option($key, null);
                $message = '<span class="dashicons dashicons-admin-settings"></span> ' . $message;

            } else if ($argv[0] == 'plg') {

                $value = is_plugin_active($key);
                $message = '<span class="dashicons dashicons-admin-plugins"></span> ' . $message;

                // Append plugin message with link
                if (!$value && is_file(WP_PLUGIN_DIR . '/' . $key)) {
                    $message .= ' <a href="' . self::plugin_activate_href($key) . '">Aktivoi</a>';
                } else if (!$value) {
                    $message .= ' <a target=\"_blank\" href="' . self::plugin_install_href($key) . '">Asenna</a>';
                } else if (!empty($argv[4])) {
                    $message .= ' <a target=\"_blank\" href="' . $argv[4] . '">Asetukset</a>';
                }
            }

            // Change class, if value does not match recommendation
            if ($value === null
                || (is_int($argv[1]) && $argv[1] != $value)
                || (is_string($argv[1]) && !preg_match($argv[1], $value))
                || (is_array($argv[1]) && !array_intersect_assoc($value, $argv[1]))) {
                $class = $argv[3];
            }

            return array($message, $class);
        }

    }

    static function item_html ($content, $class = 'error', $dashicon = 'no') {
        return <<<ITEM
<div class="notice notice-$class">
  <!--<span class="checkmark dashicons dashicons-$dashicon"></span>-->
  <p>
    <strong>$content</strong>
  </p>
</div>
ITEM;
    }

    static function plugin_install_href ($plugin) {
        $slug = dirname($plugin);
        $action = 'install-plugin';
        return wp_nonce_url(
            add_query_arg(
                array(
                    'action' => $action,
                    'plugin' => $slug
                    ),
                admin_url( 'update.php' )
                ),
            $action.'_'.$slug
            );
    }

    static function plugin_activate_href ($plugin) {
        return 'index.php?page=id-checklist&activate=' . $plugin;
    }

    static function deploy_html () {

        /* Read bitbucket configuration */
        $bbconf = new stdClass();
        $bbconf->projectName = get_option('blogname');
        $bbconf->projectEmail = get_option('admin_email');
        $bbconf->projectUri = '';
        $bbconf->projectBranch = '';

        $bbjson = @file_get_contents(get_stylesheet_directory() . '/bitbucket-config.json');
        if ($bbjson && ($bbtemp = @json_decode($bbjson))) {
            $bbconf = $bbtemp;
        }

        $issetup = !empty($bbconf->projectUri);

?>
<h2>Teeman julkaisu versionhallinnasta</h2>

<h3>1. <small>Täytä julkaisuskriptin asetukset</small></h3>

<form action="index.php?page=id-checklist" method="POST">
  <table class="form-table">
    <tr>
      <th scope="row"><label for="projectName">Projektin nimi</label></th>
      <td><input type="text" class="regular-text" required id="projectName" name="projectName" value="<?php echo esc_attr($bbconf->projectName) ?>"></td>
    </tr>
    <tr>
      <th scope="row"><label for="projectEmail">Sähköposti ilmoituksille</label></th>
      <td><input type="email" class="regular-text" required id="projectEmail" name="projectEmail" value="<?php echo esc_attr($bbconf->projectEmail) ?>">
        <p class="description">Virheilmoitukset pyritään lähettämään julkaisijan sähköpostiin</p>
      </td>
    </tr>
    <tr>
      <th scope="row"><label for="projectUri">Repon SSH-osoite</label></th>
      <td><input type="text" class="regular-text code" required placeholder="git@bitbucket.org:intodigital/..." id="projectUri" name="projectUri" value="<?php echo esc_attr($bbconf->projectUri) ?>"></td>
    </tr>
    <tr>
      <th scope="row"><label for="projectBranch">Repon haara</label></th>
      <td><input type="text" required placeholder="master" id="projectBranch" name="projectBranch" value="<?php echo esc_attr($bbconf->projectBranch) ?>">
          <p class="description">
              <strong>master</strong> kehitysversiossa
              <br><strong>staging</strong> testiversiossa
              <br><strong>production</strong> live-versiossa
          </p>
      </td>
    </tr>
  </table>
  <p class="submit"><input type="submit" name="submit" id="submit" class="button button-primary" value="Tallenna muutokset"></p>
</form>

<h3>2. <small>Anna lukuoikeudet repoon tai vedä pääkehittäjää hihasta</small></h3>
<p>
  Bitbucketissa repon <strong>Access keys</strong> -asetuksiin pitää lisätä palvelinkäyttäjän public key. Yleensä se löytyy tiedostosta ~/.ssh/id_rsa.pub. Uusille palvelimille se pitää luoda etäyhteydellä. Samalla kannattaa myös varmistaa, että yhteys Bitbucketiin sallitaan. Yhteyden voi testata (ja sallia) komennolla ssh -T git@bitbucket.org
</p>
<p><a class="button<?php if (!$issetup) echo ' disabled' ?>" target="_blank" href="<?php echo esc_attr(str_replace(array('git@bitbucket.org:', '.git'), array('https://bitbucket.org/', '/admin/access-keys/'), $bbconf->projectUri)) ?>">Bitbucket-asetukset</a> <a class="button" target="_blank" href="https://bitbucket.org/intodigital/bitbucket-deploy-script">Ohjeet</a></p>

<h3>3. <small>Suorita julkaisuskripti</small></h3>

<p><strong>Huom!</strong> Ottaa versionhallinnan käyttöön ja ylikirjoittaa versionhallinnasta löytyvät teeman tiedostot versioiduilla.</p>

<p><a class="button<?php if (!$issetup) echo ' disabled' ?>" target="_blank" href="<?php echo esc_attr(get_stylesheet_directory_uri() . '/../bitbucket-deploy.php') ?>">Suorita selaimessa</a></p>
<p><a class="button<?php if (!$issetup) echo ' disabled' ?>" target="_blank" href="<?php echo esc_attr(get_stylesheet_directory_uri() . '/../bitbucket-deploy.php?reset-hard') ?>">Reset selaimessa, ylikirjoittaa versioimattomat muutokset</a></p>

<h3>4. <small>Kiinnitä julkaisuskripti Bitbucketiin tai vedä pääkehittäjää hihasta.</small></h3>

<p>Kopioi julkaisuskriptin osoite ja lisää se repon <strong>Webhooks</strong>-asetuksiin.</p>

<p><a class="button<?php if (!$issetup) echo ' disabled' ?>" target="_blank" href="<?php echo esc_attr(str_replace(array('git@bitbucket.org:', '.git'), array('https://bitbucket.org/', '/admin/addon/admin/bitbucket-webhooks/bb-webhooks-repo-admin'), $bbconf->projectUri)) ?>">Bitbucket-asetukset</a></p>

<?php
    }

    static function optimize_html () {
?>
<h2>Optimointi</h2>

<p>Laajempi optimointi tehdään työsuunnitelmassa sovitun mukaan, mutta seuraavat peruskorjaukset ovat suositeltavia aina. <br>Optimoinnin tarvetta voi arvioda <a href="https://developers.google.com/speed/pagespeed/insights/">PageSpeed Insightsilla</a>.</p>

<caption><strong>.htaccess</strong>: GZIP-pakkauksen käyttöönotto ja selaimen välimuistin hyödyntäminen:</caption>

<code style="display:block;white-space:pre-wrap;padding:0 1em;">
# Enable compression for text documents
&lt;IfModule mod_deflate.c&gt;
  AddOutputFilterByType DEFLATE "application/javascript" "application/json"
  AddOutputFilterByType DEFLATE "text/css" "text/html" "text/javascript" "text/plain"
  &lt;FilesMatch "\.(js|css|html)$"&gt;
    SetOutputFilter DEFLATE
  &lt;/FilesMatch&gt;
&lt;/IfModule&gt;

# Enable browser caching for images, fonts and pdf
&lt;IfModule mod_expires.c&gt;
  &lt;FilesMatch "\.(js|css|pdf|jpg|jpeg|png|gif|woff|woff2|ttf|svg|eot)(\.gz)?$"&gt;
    ExpiresActive On
    ExpiresDefault "access plus 26 week"
  &lt;/FilesMatch&gt;
&lt;/IfModule&gt;

</code>
<caption>Tässä pakkaus ja välimuisti on kohdistettu vain turvallisiin tiedostomuotoihin. Laajemmassa optimoinnissa näitä tarkennettaisiin, esimerkiksi etusivun ja kaikkien staattisten sivujen tulisi hyödyntää selaimen välimuistia.</caption>
<?php
    }
}
?>
