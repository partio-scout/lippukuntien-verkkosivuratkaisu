<?php
/**
 * Modify custom post type order, etc.
 */
function ID_pre_get_posts ( $query ) {

    // Restrict to front-end queries
    // Do not alter custom wp_query, only main query
    if (!is_admin() && $query->is_main_query()) {

        // Modify archive ordering
        if ($query->is_archive()) {
            $type = $query->get('post_type');

            switch ($type) {

            case 'product':
                $query->set('orderby', 'post_title');
                $query->set('order', 'ASC');
                $query->set('posts_per_page', -1);
                break;

            }
        }
    }

}
//add_action( 'pre_get_posts', 'ID_pre_get_posts' );

/**
 * Register query vars ($_GET) for get_query_var
 */
function ID_query_vars ($qvars) {
    $qvars[] = 'esimerkki';
    return $qvars;
}
//add_filter( 'query_vars', 'ID_query_vars' );

/**
 * Remove possibility to use tags if not needed
 */
function ID_unregister_tags() {
    unregister_taxonomy_for_object_type( 'post_tag', 'post' );
}
//add_action( 'init', 'ID_unregister_tags' );

/**
 * Sets up the custom post types
 * see http://codex.wordpress.org/Post_Types
 */
//add_action( 'init', 'ID_create_post_types' );
function ID_create_post_types () {

    // Post types
	register_post_type( 'product',
        array (
            'labels' => array (
                'name' => __( 'Tuotteet', 'ID_admin' ),
                'singular_name' => __( 'Tuote', 'ID_admin' ),
                'add_new' => __( 'Lisää tuote', 'ID_admin' ),
                'add_new_item' => __( 'Lisää tuote', 'ID_admin' ),
                'edit_item' => __( 'Muokkaa', 'ID_admin' ),
                'view_item' => __( 'Näytä', 'ID_admin' ),
                'search_item' => __( 'Hae tuotteista', 'ID_admin' ),
                'not_found' => __( 'Ei tuotteita', 'ID_admin' ),
                'not_found_in_trash' => __( 'Ei poistettuja tuotteita', 'ID_admin' ),
            ),
            'supports' => array( 'title', 'editor', 'thumbnail', 'revisions' ),
			'menu_position' => 3,
			'menu_icon' => 'dashicons-products', // https://developer.wordpress.org/resource/dashicons/
            'public' => true,
            'has_archive' => true,
            'rewrite' => array( 'slug' => 'tuote' ),
            'show_in_nav_menus' => true,

            // Required for block editor
            'show_in_rest' => true,
            'rest_base' => 'products', // GET wp-json/wp/v2/products
        )
    );

    // Taxonomies
    $labels = array(
        'name'                       => __( 'Pakkauskoot', 'ID_admin' ),
        'singular_name'              => __( 'Pakkauskoko', 'ID_admin' ),
        );
    register_taxonomy('bottlesizes',
                      array('product'),
                      array(
                          'label'        => 'Pakkauskoko',
                          'labels'       => $labels,
                          'hierarchical' => true,
                          'query_var'    => true,
                          'rewrite'      => array('slug' => 'pakkauskoko'),

                          // Required for block editor
                          'show_in_rest' => true,
                          'rest_base' => 'bottlesizes', // GET wp-json/wp/v2/bottlesizes
                          ));

    $labels = array(
        'name'                       => __( 'Annoskoot', 'ID_admin' ),
        'singular_name'              => __( 'Annoskoko', 'ID_admin' ),
        );
    register_taxonomy('pintsizes',
                      array('product'),
                      array(
                          'label'        => 'Annoskoko',
                          'labels'       => $labels,
                          'hierarchical' => true,
                          'query_var'    => true,
                          'rewrite'      => array('slug' => 'annoskoko'),

                          // Required for block editor
                          'show_in_rest' => true,
                          'rest_base' => 'pintsizes', // GET wp-json/wp/v2/pintsizes
                          ));

    // NOT RECOMMENDED, safer way is to save permalinks in admin
    // Flush rewrite rules once after every change made to custom post types
    //flush_rewrite_rules();
}
?>
