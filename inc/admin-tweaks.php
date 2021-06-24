<?php
/**
 * Do not uncomment this, unless requested by client
 * Makes administration harder by hiding front-end admin bar
 * Styles for fixed header in sass/partials/_header
 */
/*
if (!is_admin()) {
    add_filter('show_admin_bar', '__return_false');
}
*/

//Add General custom fields
if( function_exists('acf_add_options_page') ) {

    acf_add_options_page(array(
        'page_title'    => __('Teeman asetukset', 'ID_admin'),
        'menu_title'    => __('Teeman asetukset', 'ID_admin'),
        'menu_slug'     => 'theme-settings',
        'capability'    => 'delete_pages',
        'redirect'      => false,
        'position'    => 2
    ));

    acf_add_options_page(array(
        'page_title'    => __('Yleiset sisällöt', 'ID_admin'),
        'menu_title'	=> __('Yleiset sisällöt', 'ID_admin'),
        'menu_slug'     => 'sitewide-content',
        'capability'	=> 'delete_pages',
        'redirect'		=> false,
        'position'    => 3
    ));

    if(is_multisite()) {
        acf_add_options_page(array(
            'page_title'    => __('Evästeasetukset', 'ID_admin'),
            'menu_title'    => __('Evästeasetukset', 'ID_admin'),
            'menu_slug'     => 'global-cookie-settings',
            'capability'    => 'delete_sites',
            //'capability'    => 'delete_pages',
            'redirect'      => false,
            'position'    => 4
        ));

    } else {
        acf_add_options_page(array(
            'page_title'    => __('Evästeasetukset', 'ID_admin'),
            'menu_title'    => __('Evästeasetukset', 'ID_admin'),
            'menu_slug'     => 'global-cookie-settings',
            //'capability'    => 'delete_sites',
            'capability'    => 'delete_site',
            'redirect'      => false,
            'position'    => 4
        ));
    }

}



function ID_users_export_plugin() {
    /*
    add_options_page( 
        __('Vie käyttäjät', 'ID_admin'),
        __('Vie käyttäjät', 'ID_admin'),
        'delete_sites',
        'user-export',
        'user_export_plugin',
        7
    );
    */

    add_options_page( 
        'settings.php',
        __('Vie käyttäjät', 'ID_admin'),
        __('Vie käyttäjät', 'ID_admin'),
        'delete_sites',
        'user-export',
        'user_export_plugin',
        7
    );
}
add_action( 'network_admin_menu', 'ID_users_export_plugin');


function user_export_plugin() {
    ?>
    <div class="wrap">
    <h1>Vie käyttäjät</h1>

    <form method="post" action="<?php echo wp_nonce_url('options-general.php?page=user-export&id-export-users', 'id-user-export', 'id-user-export'); ?>">        
        <?php 
        settings_fields( 'ID_export_users' );
        submit_button('Vie käyttäjät');
        ?>
    </form>
    </div>
    <?php
}


add_action( 'admin_init', 'ID_export_users' );
function ID_export_users() {
    if(isset($_GET['id-export-users']) && isset($_GET['id-user-export']) && wp_verify_nonce($_GET['id-user-export'], 'id-user-export')) {

        if(current_user_can('delete_sites')) {
            $args = array( 'blog_id' => 0 );
            $users = get_users( $args );

            if(!empty($users)) {
                $fp = fopen('file.csv', 'w');

                foreach($users as $user) {
                    if(in_array($user->user_email, array('janne.hyyrylainen@into-digital.fi', 'janne.hyyrylainen@gmail.com', 'pekka.suopellonmaki@into-digital.fi', 'katri.jarvenpaa@partio.fi', 'terhi.takkinen@partio.fi', 'anni.rissanen@partio.fi', 'rita.javola@partio.fi', 'viestinta@partio.fi'))) {
                        continue;
                    }

                    fputcsv($fp, array($user->user_email));
                }

                fclose($fp);


                header('Content-Type: application/octet-stream');
                header('Content-Disposition: attachment; filename='.basename('file.csv'));
                header('Expires: 0');
                header('Cache-Control: must-revalidate');
                header('Pragma: public');
                header('Content-Length: ' . filesize('file.csv'));
                readfile('file.csv');
                exit;
            }

            echo 'users exported';
        } else {
            echo 'error';
        }
    }
}



/**
 * Add analytics to default settings
 * TODO GTM alternative
 */
function ID_register_analytics_option () {

    register_setting( 'reading', 'id_analytics', 'esc_attr' );
    add_settings_field(
        'id_analytics',
        '<label for="id_analytics">' . __( 'Google Analytics' , 'ID_admin' ) . '</label>',
        'ID_register_analytics_html',
        'reading'
    );

}

function ID_register_analytics_html () {

    $analytics = get_option('id_analytics', '');
    echo '<input type="text" id="id_analytics" name="id_analytics" placeholder="UA-2742875-35" value="' . esc_attr( $analytics ) . '" />';

}

add_filter('wp_revisions_to_keep', 'ID_revisions_to_keep', 10, 2);
function ID_revisions_to_keep ($num, $post) {
    return 15;
}

add_action( 'admin_init', 'ID_admin_init');
function ID_admin_init() {

    // Remove Yoast SEO social media contact methods
    global $wpseo_admin;
    if ($wpseo_admin) {
        remove_filter('user_contactmethods', array($wpseo_admin, 'update_contactmethods' ), 10);
    }

    ID_register_analytics_option();

    /*
     * This theme styles the visual editor to resemble the theme style,
     * specifically font, colors, icons, and column width.
     */
    add_editor_style(array(get_template_directory_uri() . '/stylesheets/editor-style.css'));


    /**
     * Customize user capabilities
     */

    $role = get_role( 'editor' );
    $role->add_cap( 'edit_theme_options' ); //for menu editing


    /**
     * Let editor manage forms and yoast advanced tab
     */
    // $role = get_role( 'administrator' );
    $role->add_cap( 'gravityforms_create_form' );
    $role->add_cap( 'gravityforms_delete_entries' );
    $role->add_cap( 'gravityforms_delete_forms' );
    $role->add_cap( 'gravityforms_edit_entries' );
    $role->add_cap( 'gravityforms_edit_entry_notes' );
    $role->add_cap( 'gravityforms_edit_forms' );
    $role->add_cap( 'gravityforms_edit_settings' );
    $role->add_cap( 'gravityforms_export_entries' );
    $role->add_cap( 'gravityforms_feed' );
    $role->add_cap( 'gravityforms_view_entries' );
    $role->add_cap( 'gravityforms_view_entry_notes' );
    $role->add_cap( 'wpseo_edit_advanced_metadata' );


    /**
     * Let editor manage users
     */

    /*
    $role->add_cap( 'create_users' );
    $role->add_cap( 'edit_users' );
    $role->add_cap( 'list_users' );
    $role->add_cap( 'delete_users' );

    // restrict access to superior users
    global $pagenow;

    $user_id = 0;
    if (isset($_REQUEST['user_id'])) {
        $user_id = $_REQUEST['user_id'];
    } else if (isset($_REQUEST['user'])) {
        $user_id = $_REQUEST['user'];
    }

    $blocked_admin_pages = array('user-edit.php', 'users.php');
    if (in_array($pagenow, $blocked_admin_pages)) {

        $user = wp_get_current_user();
        if (!in_array('administrator', $user->roles)
            && user_can($user_id, 'administrator')) {

            wp_die( 'Sinulla ei ole oikeutta muokata pääkäyttäjää. <a href="#" onclick="history.back();return false;">Takaisin</a>' );

        }

        if (!in_array('administrator', $user->roles)
            && !in_array('editor', $user->roles)
            && user_can($user_id, 'editor')) {

            wp_die( 'Sinulla ei ole oikeutta muokata päätoimittajaa. <a href="#" onclick="history.back();return false;">Takaisin</a>' );

        }

    }
    */
}

/**
 * Unregister default WordPress widgets if not needed
 */
add_action('widgets_init', 'ID_unregister_default_wp_widgets', 1);
function ID_unregister_default_wp_widgets() {
    unregister_widget('WP_Widget_Pages');
    unregister_widget('WP_Widget_Calendar');
    unregister_widget('WP_Widget_Archives');
    unregister_widget('WP_Widget_Links');
    unregister_widget('WP_Widget_Meta');
    unregister_widget('WP_Widget_Search');
    unregister_widget('WP_Widget_Text');
    unregister_widget('WP_Widget_Categories');
    unregister_widget('WP_Widget_Recent_Posts');
    unregister_widget('WP_Widget_Recent_Comments');
    unregister_widget('WP_Widget_RSS');
    unregister_widget('WP_Widget_Tag_Cloud');
    unregister_widget('WP_Nav_Menu_Widget');
}

/**
 * Remove irrelevant menu items from admin panel's sidebar
 */
add_action( 'admin_menu', 'ID_remove_irrelevant_menuitems', 999 );
function ID_remove_irrelevant_menuitems() {

    //remove_menu_page('edit.php'); // Hide posts
    //remove_menu_page('edit.php?post_type=page'); // Hide pages
    //remove_menu_page('edit-comments.php'); // Hide comments
    //remove_submenu_page( 'themes.php', 'widgets.php' ); // Hide widgets

    /* Hide from everyone but admin */
    $current_user = wp_get_current_user();
    if (is_array($current_user->roles)) {
        if (!in_array('administrator', $current_user->roles)) {
            //remove_menu_page('index.php'); // Hide dashboard
            remove_menu_page('tools.php'); // Hide tools
        }
    }

}

/**
 * Change default page in admin. Useful with hiding the dashboard
 */
add_filter('login_redirect', 'ID_dashboard_redirect');
function ID_dashboard_redirect($url) {

    // Redirect admin to development checklist
    $current_user = wp_get_current_user();
    if (user_can($current_user, 'administrator')) {
        $url = admin_url('/index.php?page=id-checklist');
    }

    // Redirect somewhere else than dashboard
    /*
    if (strpos($url, 'wp-admin') !== false) {
        $url = admin_url('/edit.php?post_type=page');
    } else {
        $url = home_url();
    }
    */

    return $url;

}

/**
 * Enables/Disables first row buttons of TinyMCE
 * Don't enable buttons that are not needed in theme
 */
add_filter('mce_buttons', 'ID_mce_buttons_1');
function ID_mce_buttons_1($buttons) {

    $buttons = array('bold',
                     'italic',
                     //'strikethrough',
                     'bullist',
                     'numlist',
                     //'blockquote',
                     //'hr',
                     //'alignleft',
                     //'aligncenter',
                     //'alignright',
                     'link',
                     'unlink',
                     //'wp_more',
                     'spellchecker',
                     'dfw',
                     'wp_adv',);

    return $buttons;
}

/**
 * Enables/Disables second row buttons of TinyMCE
 * Don't enable buttons that are not needed in theme
 */
add_filter('mce_buttons_2', 'ID_mce_buttons_2');
function ID_mce_buttons_2($buttons) {

    $buttons = array('formatselect',
                     'styleselect',
                     //'table', // requires plugin https://wordpress.org/plugins/mce-table-buttons/
                     //'underline',
                     //'alignjustify',
                     //'forecolor',
                     'pastetext',
                     'removeformat',
                     'charmap',
                     //'outdent',
                     //'indent',
                     'undo',
                     'redo',
                     'wp_help');

    return $buttons;
}

/**
 * Defines paragraph and heading styles for TinyMCE
 * Also defines custom style formats if styleselect button is enabled
 */

add_filter( 'tiny_mce_before_init', 'ID_mce_before_init_insert_formats' );
function ID_mce_before_init_insert_formats( $init_array ) {

    // Define the style_formats array
    $style_formats = array(
        // Each array child is a format with it's own settings
        array(
            'title' => __('Ingressi', 'ID_admin'),
            'selector' => 'p',
            'classes' => 'lead',
            'wrapper' => false,
        ),
        array(
            'title' => __('Painike', 'ID_admin'),
            'selector' => 'a',
            'classes' => 'button',
            'wrapper' => false,
        ),
    );

    /**
     * Custom ACF-styles
     */

    if( function_exists('get_field') ) {

        $custom_styles = get_field('custom_styles', 'option');

        if( is_array($custom_styles) ) {
            foreach($custom_styles as $custom_style) {
                $style = array(
                    'title' => $custom_style['custom_style_name'],
                    'classes' => $custom_style['custom_style_class'],
                    'styles' => ID_css2json($custom_style['custom_style_css']),
                    'selector' => '*',
                    'wrapper' => false,
                );

                $style_formats[] = $style;
            }
        }

    }
    // Insert the array, JSON ENCODED, into 'style_formats'
    $init_array['style_formats'] = json_encode( $style_formats );

    //Define paragraph and headings
    $init_array['block_formats'] = 'Leipäteksti=p;Pääotsikko=h1;Väliotsikko=h2;Väliotsikko 2=h3';

    return $init_array;
}

/**
 * Defines quicktag buttons for tinymce text editor.
 */
add_filter('quicktags_settings', 'ID_quicktags_settings');
function ID_quicktags_settings( $quicktags  ) {
    // Comma separated list of available buttons.
    // Default list 'strong,em,link,block,del,ins,img,ul,ol,li,code,more,close,dfw'
    $quicktags['buttons'] = 'strong,em';
    return $quicktags;
}

function ID_css2json ($css) {
    $json = array();
    $matches = array();
    if (preg_match_all('/([a-zA-Z0-9-]+):(.*);/', $css, $matches, PREG_SET_ORDER)) {
        foreach ($matches as $match) {
            $json[$match[1]] = trim($match[2]);
        }
    }
    return $json;
}

/**
 * Limit excerpt length from default 55 words
 */
function ID_custom_excerpt_length( $length ) {
    return 15;
}
add_filter( 'excerpt_length', 'ID_custom_excerpt_length', 999 );





add_action('admin_head', 'ID_admin_theme_colors');
function ID_admin_theme_colors() {
$theme_colors = get_field('theme_colors', 'option');
if(empty($theme_colors)) {
    $theme_colors = array(
        'primary_color' => '#253764',
        'secondary_color' => '#1c769d',
        'text_color_primary' => '#ffffff',
        'text_color_secondary' => '#ffffff',
    );
}

echo '<style>
    :root {
        --primary-color: ' . $theme_colors['primary_color'] . ';' .
        '--secondary-color: ' . $theme_colors['secondary_color'] . ';' .
        '--primary-text-color: ' . $theme_colors['text_color_primary'] . ';' .
        '--secondary-text-color: ' . $theme_colors['text_color_secondary'] . ';
    }
</style>';
}

add_action( 'admin_menu', 'remove_links_menu_contributors' );
function remove_links_menu_contributors() {
	if(!current_user_can('create_sites')) {
        // remove_menu_page('themes.php'); 
        remove_menu_page('admin.php?page=acf-options-general'); // Remove ACF Options
	}
}

// tests
// function ID_modify_site_capabilities(){
//     global $wp_roles; // global class wp-includes/capabilities.php
    
//     $role = 'administrator';
//     $cap = 'switch_themes';
//     $wp_roles->remove_cap( $role, $cap );

//     // print_r($wp_roles);
    
// 	$user = wp_get_current_user(); // getting & setting the current user 
// 	$roles = ( array ) $user->roles; // obtaining the role 
//     // print_r($roles); // return the role for the current user 

// }
// add_action( 'init', 'ID_modify_site_capabilities' );


?>
