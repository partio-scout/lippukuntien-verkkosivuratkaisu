<?php
/* ACF google maps api key */
function ID_acf_google_map_api($api)
{
  $api['key'] = 'AIzaSyDU5fWMLds51kb-AxtLcTozIga7shuHge4';
  return $api;
}
add_filter('acf/fields/google_map/api', 'ID_acf_google_map_api');

/*
 * Add dynamic default values to ACF fields.
 * Note field name in add_filter hook
 */
/*
function ID_acf_load_field( $field ) {
    $field['default_value'] = sanitize_title(get_the_title());
    return $field;
}
add_filter('acf/load_field/name=anchor_name', 'ID_acf_load_field');
*/


/**
 * Handle Flexible content field "automatically"
 */
if (!function_exists('ID_the_flexible_content_fields')) :
  function ID_the_flexible_content_fields($fieldset, $option = false)
  {

    $arg = null;
    if ($option) {
      $arg = 'option';
    } else if (is_home()) {
      $arg = get_option('page_for_posts');
    }

    if (have_rows($fieldset, $arg)) {
      while (have_rows($fieldset, $arg)) {
        the_row();
        get_template_part('template-parts/block-' . htmlspecialchars(get_row_layout()));
      }
    }
  }
endif;

/**
 * Create link tag from ACF link object
 */
if (!function_exists('ID_the_acf_link')) :
  function ID_the_acf_link($linkObj, $classes = '', $attr = '', $echo = true)
  {

    if (empty($linkObj))
      return;

    $href = ' href="' . $linkObj['url'] . '"';
    $target = ($linkObj['target'] == '_blank') ? ' target="_blank" rel="noopener"' : '';
    $class = empty($classes) ? '' : ' class="' . $classes . '"';
    $attr = ' ' . $attr;
    $title = $linkObj['title'];

    if ($echo) {
      echo '<a' . $href . $target . $class . $attr . '>' . $title . '</a>';
    } else {
      return array('<a' . $href . $target . $class . $attr . '>', '</a>', $title);
    }
  }
endif;

if (!function_exists('ID_the_acf_image')) :
  function ID_the_acf_image($imageObj, $size = null, $id = '', $classes = '', $echo = true)
  {

    if (empty($imageObj))
      return;

    if ($size && $imageObj['sizes'][$size]) {
      $src = $imageObj['sizes'][$size];
      $width = ' width="' . $imageObj['sizes'][$size . '-width'] . '"';
      $height = ' height="' . $imageObj['sizes'][$size . '-height'] . '"';
    } else {
      $src = $imageObj['url'];
      $width = ' width="' . $imageObj['width'] . '"';
      $height = ' height="' . $imageObj['height'] . '"';
    }


    $img = '<img src="' . $src . '"' . $width . $height;

    $img .= empty($id) ? '' : ' id="' . $id . '"';
    $img .= empty($classes) ? '' : ' class="' . $classes . '"';

    $img .= ' alt="' . $imageObj['alt'] . '"';

    $img .= '>';

    if ($echo) {
      echo $img;
    } else {
      return $img;
    }
  }
endif;


//ACF Read only field
function ID_acf_readonly($field)
{

  $field['readonly'] = 1;

  return $field;
}
//add_filter('acf/load_field/name=competition_newsletter_subscriptions', 'ID_acf_readonly');


/**
 * Populate ACF Selects named "content_type_selection"
 * dynamically with custom post types
 * 
 */
function ID_acf_custom_post_types_selection($field)
{
  $field['choices'] = array();

  $customtypes = get_post_types(array('_builtin' => false, 'exclude_from_search' => false), 'objects');
  foreach ($customtypes as $type) {
    $field['choices'][$type->name] = $type->label;
  }

  return $field;
}
//add_filter('acf/load_field/name=content_type_selection', 'ID_acf_custom_post_types_selection');


/*
* Hide ACF admin from production site (after registering license key), so nobody can't sync acf fields, since that is not recommended. 
*/
function ID_show_acf_admin()
{

  // get the current site url
  $site_url = get_bloginfo('url');

  if (strpos($site_url, '//localhost') !== false) {
    return true;
  }

  return false;
}
//add_filter('acf/settings/show_admin', 'ID_show_acf_admin');

/**
 * Custom wysiwyg toolbars for ACF wysiwyg fields
 */

function ID_acf_wysiwyg_toolbars($toolbars)
{

  /*
  $toolbars['Simple' ] = array();
  $toolbars['Simple' ][1] = array('bold', 'italic', 'link', 'unlink', 'spellchecker', 'dfw', 'wp_adv');
  $toolbars['Simple' ][2] = array('formatselect', 'styleselect', 'pastetext', 'removeformat', 'charmap', 'undo', 'redo', 'wp_help');
  */

  $toolbars['Stripped'] = array();
  $toolbars['Stripped'][1] = array('bold', 'link', 'unlink', 'spellchecker', 'dfw', 'wp_adv');
  $toolbars['Stripped'][2] = array('pastetext', 'removeformat', 'charmap', 'undo', 'redo', 'wp_help');

  return $toolbars;
}
//add_filter( 'acf/fields/wysiwyg/toolbars' , 'ID_acf_wysiwyg_toolbars'  );


/**
 * Add ACF fields to search. 
 * 
 * NOTICE! 
 * You have to manually add desired ACF field names 
 * to $list_searcheable_acf array!
 *
 * ALSO! this will alter search query altogether. 
 * Therefore, it may cause conflicts if used with 
 * other search plugins.
 * 
 * Modified from https://stackoverflow.com/questions/36787391/add-acf-fields-to-search-results-page-wordpress
 */
/*
function ID_include_acf_fields_to_search( $where, &$wp_query ) {
    global $wpdb;

    if ( empty( $where ))
        return $where;

    // get search expression
    $terms = $wp_query->query_vars[ 's' ];

    // explode search expression to get search terms
    $exploded = explode( ' ', $terms );
    if( $exploded === FALSE || count( $exploded ) == 0 )
        $exploded = array( 0 => $terms );

    // reset search in order to rebuilt it as we whish
    $where = '';

    // NOTICE! Add searchable ACF fields to this list
    $list_searcheable_acf = array("title", "sub_title", "text_content");

    foreach( $exploded as $tag ) :
    $where .= " 
          AND (
            ($wpdb->posts.post_title LIKE '%$tag%')
            OR ($wpdb->posts.post_content LIKE '%$tag%')
            OR EXISTS (
              SELECT * FROM $wpdb->postmeta
                  WHERE post_id = $wpdb->posts.ID
                    AND (";
    foreach ($list_searcheable_acf as $searcheable_acf) :
    if ($searcheable_acf == $list_searcheable_acf[0]):
    $where .= " (meta_key LIKE '%" . $searcheable_acf . "%' AND meta_value LIKE '%$tag%') ";
    else :
    $where .= " OR (meta_key LIKE '%" . $searcheable_acf . "%' AND meta_value LIKE '%$tag%') ";
    endif;
    endforeach;
    $where .= ")
            )
            OR EXISTS (
              SELECT * FROM $wpdb->comments
              WHERE comment_post_ID = $wpdb->posts.ID
                AND comment_content LIKE '%$tag%'
            )
            OR EXISTS (
              SELECT * FROM $wpdb->terms
              INNER JOIN $wpdb->term_taxonomy
                ON $wpdb->term_taxonomy.term_id = $wpdb->terms.term_id
              INNER JOIN $wpdb->term_relationships
                ON $wpdb->term_relationships.term_taxonomy_id = $wpdb->term_taxonomy.term_taxonomy_id
              WHERE (
                taxonomy = 'post_tag'
                    OR taxonomy = 'category'                
                    OR taxonomy = 'myCustomTax'
                )
                AND object_id = $wpdb->posts.ID
                AND $wpdb->terms.name LIKE '%$tag%'
            )
        )";
    endforeach;
    return $where;
}
add_filter( 'posts_search', 'ID_include_acf_fields_to_search', 500, 2 );
*/

/*
 * Add dynamic default values to ACF fields.
 * Note field name in add_filter hook
 */
/*
function ID_acf_load_field( $field ) {
    $field['default_value'] = sanitize_title(get_the_title());
    return $field;
}
add_filter('acf/load_field/name=anchor_name', 'ID_acf_load_field');
*/
