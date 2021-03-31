<?php
/*
Example on how to remove unwanted archive pages
// Register template redirect action callback
add_action('template_redirect', 'ID_remove_wp_archives');

// Remove archives for specified items
function ID_remove_wp_archives(){
  // If we are on tag or date or author archive
  if( is_tag() || is_date() || is_author() ) {
    global $wp_query;
    $wp_query->set_404(); //set to 404 not found page
  }
}
*/
add_filter(
  'register_post_type_args',
  function ($args, $post_type) {
      if ($post_type !== 'post') {
          return $args;
      }

      $args['rewrite'] = [
          'slug' => 'ajankohtaista',
          'with_front' => true,
      ];

      return $args;
  },
  10,
  2
);

add_filter(
  'pre_post_link',
  function ($permalink, $post) {
      if ($post->post_type !== 'post') {
          return $permalink;
      }
      return '/ajankohtaista/%postname%/';
  },
  10,
  2
);