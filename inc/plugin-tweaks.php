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