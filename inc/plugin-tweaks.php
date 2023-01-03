<?php
/*
 * Changes CSV separator for Gravity Forms export
 */
add_filter('gform_export_separator', 'ID_change_gf_separator', 10, 2);
function ID_change_gf_separator($separator, $form_id)
{
  return ';';
}

/**
 * Change Yoast SEO meta box position in "edit page"
 */
function yoasttobottom()
{
  return 'low'; //or 'high' to put top
}
add_filter('wpseo_metabox_prio', 'yoasttobottom');

/**
 * WPML - Delete all localized/duplicated versions of media file at once.
 */
function ID_delete_localized_versions_of_media_file($originalid)
{

  //first remove this action to prevent infinite loop when deleting other language versions of this attachment file
  $filter_removed = remove_action('delete_attachment', 'ID_delete_localized_versions_of_media_file');
  if ($filter_removed) {

    //get current language code
    $current_lang = ICL_LANGUAGE_CODE;

    //get all active languages
    $languages = apply_filters('wpml_active_languages', NULL, 'orderby=id&order=desc');

    //loop through languages
    foreach ($languages as $lang) {
      //skip current language since that file is already deleted
      if ($lang['language_code'] != $current_lang) {
        //get id for localised version of this attachment file
        $id = icl_object_id($originalid, 'attachment', false, $lang['language_code']);
        if ($id) {
          //delete localized version of attachment file
          wp_delete_attachment($id, true);
        }
      }
    }
  }
}
//add_action('delete_attachment', 'ID_delete_localized_versions_of_media_file');


function acf_load_gravity_forms( $field ) {    
    // reset choices
    $field['choices'] = array();    
    
    //get all forms
    $forms = GFAPI::get_forms();

    // loop through array and add to field 'choices'
    $field['choices'][ 0 ] = __('Valitse lomake', 'ID'); 
    if( is_array($forms) ) {        
        foreach( $forms as $form ) {            
            $field['choices'][ $form['id'] ] = $form['title'];      
        }        
    }   

    // return the field
    return $field;    
}

add_filter('acf/load_field/name=gravity_forms', 'acf_load_gravity_forms');




//Disable gravityforms styles
add_filter('pre_option_rg_gforms_disable_css', '__return_true');





//Hide ACF from others than network admins
add_filter('acf/settings/show_admin', 'my_acf_show_admin');
function my_acf_show_admin( $show ) {   
  if(is_multisite() && !current_user_can( 'create_sites' )) {
    return;
  }   

  return $show;
}


//Hide gravityforms forms if not super admin
function remove_gform_pages(){  
  if(is_multisite()) {
    if(!is_super_admin()) {
      remove_submenu_page( 'gf_edit_forms', 'gf_new_form' );
      remove_submenu_page( 'gf_edit_forms', 'gf_help' );
      remove_submenu_page( 'gf_edit_forms', 'gf_settings' );
      remove_submenu_page( 'gf_edit_forms', 'gf_edit_forms' );
      remove_submenu_page( 'gf_edit_forms', 'gf_addons' );
      remove_submenu_page( 'gf_edit_forms', 'gf_update' );
      remove_submenu_page( 'gf_edit_forms', 'gf_new_formf_help' );
      remove_submenu_page( 'gf_edit_forms', 'gf_system_status' );
      remove_submenu_page( 'gf_edit_forms', 'gf_export' );
    }
  }
}
add_action('admin_init','remove_gform_pages');

//Remove gform toolbar ribbon from admin panel
add_filter( 'gform_toolbar_menu', 'ID_custom_gform_toolbar', 10, 2 );
function ID_custom_gform_toolbar( $menu_items, $form_id ) { 
  if(is_multisite()) {
    if(!is_super_admin()) {
      return;
    }
  }
}

function remove_toolbar_items($wp_adminbar) {
  $wp_adminbar->remove_node('ddw-gravityforms-toolbar');
}
add_action('admin_bar_menu', 'remove_toolbar_items', 999);

// send GF email notification to email set in ACF options
add_filter( 'gform_pre_send_email', 'before_email' );
function before_email( $email ) {
    if (function_exists('get_field')) {
      $custom_notification_email = get_field('gf_admin_notification_email', 'option');
      if ($custom_notification_email != "") {
        $email['to'] = $custom_notification_email;
      }
    }
    return $email;
}

// add translation possibility to field
add_filter( 'gform_field_content', function( $field_content, $field ) {
  if ( $field->type == "html" && $field->cssClass == "privacy-policy-info" ) {
      return __( $field_content, "ID" );
  }
  return $field_content;
}, 10, 2 );



// define the wpseo_breadcrumb_separator callback 
function filter_wpseo_breadcrumb_separator( $this_options_breadcrumbs_sep ) { 
    $this_options_breadcrumbs_sep = '&bull;';
    return $this_options_breadcrumbs_sep; 
}; 
         
// add the filter 
add_filter( 'wpseo_breadcrumb_separator', 'filter_wpseo_breadcrumb_separator', 10, 1 ); 



add_filter( 'wp_kses_allowed_html', 'acf_add_allowed_iframe_tag', 10, 2 );
function acf_add_allowed_iframe_tag( $tags, $context ) {
    if ( $context === 'acf' ) {
        $tags['iframe'] = array(
            'src'             => true,
            'height'          => true,
            'width'           => true,
            'frameborder'     => true,
            'allowfullscreen' => true,
            'style' => true,
            'scrolling' => true
        );
    }

    return $tags;
}