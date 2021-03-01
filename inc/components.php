<?php
// Return list of components installed from library
function ID_component_list () {

    $themedir = get_stylesheet_directory();
    $components = array_map('basename', glob($themedir . '/components/*', GLOB_ONLYDIR));

    return $components;
}

// Read info from component file
function ID_component_info ($component) {

    $info = array(
        'Component' => '',
        'Description' => '',
        'Keywords' => array(),
        );
        
    $themedir = get_stylesheet_directory();
    $componentfile = "{$themedir}/components/{$component}/{$component}.php";

    $source = file($componentfile);
    foreach ($source as $index => $line) {
        if (preg_match('/ \* (\w+): (.*)$/', $line, $matches)) {
            if ($matches[1] == 'Keywords') {
                //$info[$matches[1]] = array_map('trim', explode(',' $matches[2]));
            } else {
                $info[$matches[1]] = trim($matches[2]);
            }
            
        } else if (preg_match('/\*\//', $line)) {
            break;
        }
    }

    return $info;
}

// Render component
function ID_component_callback ($block, $content = '', $is_preview = false, $post_id = 0) {

    $themedir = get_stylesheet_directory();
    $themeurl = get_stylesheet_directory_uri() . '/..';
    $component = str_replace('acf/', '', $block['name']);
    $componentfile = "{$themedir}/components/{$component}/{$component}.php";
    
    if ($is_preview) {
        echo "<img src=\"{$themeurl}/components/{$component}/screenshot.png\">";
    } else {
        get_template_part("components/{$component}/{$component}");
    }
}
?>
