<?php
/* Limit REST API to logged in users */
//add_filter('rest_authentication_errors', 'ID_rest_authentication_errors');
function ID_rest_authentication_errors ($error) {
    if (!empty($error)) {
        return $error;
    }
    if (!is_user_logged_in()) {
        return new WP_Error('rest_not_logged_in', 'You are not currently logged in.', array('status' => 401));
    }
    return $error;
}

/**
 * Register REST endpoints
 * Example includes caching with browser headers and WP transients
 */

$transient_prefix = '2017mmdd'; // change to clear all cached transients
$transient_duration = 30 * 60;
$browser_cache_duration = 30 * 60;

add_action('rest_api_init', 'ID_rest_api_init');
function ID_rest_api_init () {

    // GET /wp-json/v1/livesearch
    register_rest_route('v1', '/livesearch', array(
        'methods' => 'GET',
        'callback' => 'ID_livesearch',
        'permission_callback' => '__return_true'
    ));

    // Modify request headers
    add_filter('rest_pre_serve_request', 'ID_rest_pre_serve_request');
}

function ID_rest_pre_serve_request ($value) {

    global $browser_cache_duration;
    header('Cache-Control: max-age=' . $browser_cache_duration);
    return $value;

}

function ID_get_countries () {

    global $transient_prefix, $transient_duration;

    $transient_key = $transient_prefix . 'id_countries';

    // Check for cached data
    $countries = get_transient($transient_key);

    if (!$countries) {

        // Get fresh data
        $countries = get_posts(array(
            'numberposts' => -1,
            'post_type'   => 'country',
            'orderby'     => 'title',
            'order'       => 'asc',
            'post_status' => 'publish',
        ));

        // Cache data
        set_transient($transient_key, $countries, $transient_duration);
    }

    // Return data. WP handles JSON encoding.
    return $countries;
}

/*
 * Live search 
 */
function ID_livesearch() {

    $searchterm = $_GET['s'];
    $minlength = 3; //remember to change in search.js too

    if (mb_strlen($searchterm) < $minlength) {
        return new WP_Error('short_search_term', __('Liian lyhyt hakusana. (min. 3 merkkiä)', 'ID'), array('status' => 400));
    }

    $args = array(
        's' => $searchterm,
    );

    $query = new WP_Query();
    $query->parse_query($args);
    relevanssi_do_query($query);

    $results = array(
        'best' => array(
            'title' => __('Paras tulos', 'ID'),
            'items' => array()
        ),
        'page' => array(
            'title' => __('Sivut', 'ID'),
            'items' => array()
        ),
        'post' => array(
            'title' => __('Blogi', 'ID'),
            'items' => array()
        ),
    );

    $i = 0;
    $max = 2;
    $types = array_keys($results);

    foreach ($query->posts as $item) {
        $i++;
        $resultitem = ID_get_livesearch_result_item($item);

        if ($resultitem && $i == 1) {
            $results['best']['items'][] = $resultitem;
            continue;
        }

        if ($resultitem && in_array($resultitem['type'], $types) && count($results[$resultitem['type']]['items']) < $max) {
            $results[$resultitem['type']]['items'][] = $resultitem;
        }
    }

    $return = array(
        'searchnum' => intval($_GET['n']),
        'results' => $results
    );

    // Return data. WP handles JSON encoding.
    return $return;
}

function ID_get_livesearch_result_item($item) {

    $handled = array();
    $id = $item->ID;

    //exclude front page from search results
    $front_page_id = get_option('page_on_front');

    if ($id != $front_page_id) {
        $handled['link'] = get_permalink($id);
        $handled['image'] = get_the_post_thumbnail_url($id, 'thumbnail');
        $handled['id'] = $id;
        $handled['title'] = $item->post_title;
        $handled['excerpt'] = $item->post_excerpt;
        $handled['type'] = $item->post_type;

        return $handled;        
    }
}

/**
 * Add AJAX actions if needed
 * Using REST API recommended
 */
//add_action( 'wp_ajax_my_action', 'my_action_callback' );
//add_action( 'wp_ajax_nopriv_my_action', 'my_action_callback' );
function my_action_callback () {

    // Do something

    die(); // this is required to return a proper result
}
