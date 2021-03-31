<?php

//do_action( 'wp_initialize_site', 'ID_init_site', 'test');
//ID_init_site($homepage_content);

function ID_init_site() {
	require get_template_directory() . '/inc/default_content.php';


	
	//Create homepage	
	$homepage = wp_insert_post(array(
		'post_type' => 'page',
		'post_title' => __('Etusivu', 'ID'),
		'comment_status' => 'closed',
		'post_status' => 'publish',
		'post_content' => $homepage_content
	));
	
	//Create page for posts
	$latest_posts = wp_insert_post(array(
		'post_type' => 'page',
		'post_title' => __('Ajankohtaiset uutiset', 'ID'),
		'post_name' => 'ajankohtaista',
		'comment_status' => 'closed',
		'post_status' => 'publish',
		'post_content' => ''
	));

	// Create empty pages
	
	$join_page    = wp_insert_post(array('post_type' => 'page', 'post_title' => __('Tule mukaan', 'ID'),          'post_name' => 'tule-mukaan', 'comment_status' => 'closed', 'post_status' => 'publish', 'post_content' => ''));
	$members_page = wp_insert_post(array('post_type' => 'page', 'post_title' => __('Jäsenelle', 'ID'),            'post_name' => 'jasenelle',   'comment_status' => 'closed', 'post_status' => 'publish', 'post_content' => ''));
	$info_page    = wp_insert_post(array('post_type' => 'page', 'post_title' => __('Tietoa lippukunnasta', 'ID'), 'post_name' => 'tietoa-lippukunnasta', 'comment_status' => 'closed', 'post_status' => 'publish', 'post_content' => ''));
	$events_page  = wp_insert_post(array('post_type' => 'page', 'post_title' => __('Tapahtumat', 'ID'),           'post_name' => 'tapahtumat',   'comment_status' => 'closed', 'post_status' => 'publish', 'post_content' => ''));
	$contact_page = wp_insert_post(array('post_type' => 'page', 'post_title' => __('Yhteystiedot', 'ID'),         'post_name' => 'yhteystiedot', 'comment_status' => 'closed', 'post_status' => 'publish', 'post_content' => ''));
	
	//Initialize empty menus
	// Update menus
	// Main menu
	$main_menu_id = ID_init_menu('Päävalikko', 'primary');
	$item_id = wp_update_nav_menu_item($main_menu_id, 0, array(
		'menu-item-title' => __('Tule mukaan', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $join_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $main_menu_id, 'nav_menu');

	$item_id = wp_update_nav_menu_item($main_menu_id, 0, array(
		'menu-item-title' => __('Jäsenelle', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $members_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $main_menu_id, 'nav_menu');

	$item_id = wp_update_nav_menu_item($main_menu_id, 0, array(
		'menu-item-title' => __('Tietoa lippukunnasta', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $info_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $main_menu_id, 'nav_menu');

	$item_id = wp_update_nav_menu_item($main_menu_id, 0, array(
		'menu-item-title' => __('Tapahtumat', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $events_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $main_menu_id, 'nav_menu');
	
	// Helper menu
	$help_menu_id = ID_init_menu('Apuvalikko', 'secondary');
	$item_id = wp_update_nav_menu_item($help_menu_id, 0, array(
		'menu-item-title' => __('Ajankohtaiset uutiset', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $latest_posts,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $help_menu_id, 'nav_menu');

	$item_id = wp_update_nav_menu_item($help_menu_id, 0, array(
		'menu-item-title' => __('Yhteystiedot', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $contact_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $help_menu_id, 'nav_menu');
		
	// Footer menu
	$footer_main_menu_id = ID_init_menu('Footer', 'footer');
	$item_id = wp_update_nav_menu_item($footer_main_menu_id, 0, array(
		'menu-item-title' => __('Tule mukaan', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $join_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $footer_main_menu_id, 'nav_menu');

	$item_id = wp_update_nav_menu_item($footer_main_menu_id, 0, array(
		'menu-item-title' => __('Jäsenelle', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $members_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $footer_main_menu_id, 'nav_menu');

	$item_id = wp_update_nav_menu_item($footer_main_menu_id, 0, array(
		'menu-item-title' => __('Tietoa lippukunnasta', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $info_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $footer_main_menu_id, 'nav_menu');

	$item_id = wp_update_nav_menu_item($footer_main_menu_id, 0, array(
		'menu-item-title' => __('Tapahtumat', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $events_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $footer_main_menu_id, 'nav_menu');

	$item_id = wp_update_nav_menu_item($footer_main_menu_id, 0, array(
		'menu-item-title' => __('Yhteystiedot', 'ID'),
		'menu-item-object' => 'page',
		'menu-item-object-id' => $contact_page,
		'menu-item-type' => 'post_type',
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $footer_main_menu_id, 'nav_menu');
		
	// Footer helper menu
	$footer_help_menu_id = ID_init_menu('Footer apuvalikko', 'footer-extra');
	$item_id = wp_update_nav_menu_item($footer_help_menu_id, 0, array(
		'menu-item-title' =>  __('Tietosuojaseloste', 'ID'),
		'menu-item-classes' => 'home',
		'menu-item-url' => network_site_url( '/tietosuojaseloste' ), 
		'menu-item-status' => 'publish'));
	wp_set_object_terms($item_id, $footer_help_menu_id, 'nav_menu');
	
	
	//Set front page and page for posts
	update_option( 'page_on_front', $homepage );
	update_option( 'page_for_posts', $latest_posts );
    update_option( 'show_on_front', 'page' );

    //Delete sample page generated by WordPress
    $defaultPage = get_page_by_title( __('Esimerkkisivu') );
    $defaultPost = get_page_by_title( __('Moikka maailma!'), OBJECT, 'post' );

    if(!empty($defaultPage)) {
    	wp_delete_post( $defaultPage->ID );
	}

	if(!empty($defaultPost)) {
    	wp_delete_post( $defaultPost->ID );
	}
}


add_action( 'wp_initialize_site', 'ID_initialize_site', 900 );
 
/**
 * Fires when a site's initialization routine should be executed.
 *
 * @param WP_Site $new_site New site object.
 */
function ID_initialize_site( WP_Site $new_site ) : void {
    switch_to_blog( $new_site->blog_id );
 
 	ID_init_site();
 
    restore_current_blog();
}

/*
function ID_init_site($homepage_content = '') {
	echo 'test';

	//Initialize empty menus
	ID_init_menu('Päävalikko', 'primary');
	ID_init_menu('Apuvalikko', 'secondary');
	ID_init_menu('Footer', 'footer');
	ID_init_menu('Footer apuvalikko', 'footer-extra');

	
	//Create homepage	
	$homepage = wp_insert_post(array(
		'post_type' => 'page',
		'post_title' => __('Etusivu', 'ID'),
		'comment_status' => 'closed',
		'post_status' => 'publish',
		'post_content' => $homepage_content
	));
	
	//Create page for posts
	$latest_posts = wp_insert_post(array(
		'post_type' => 'page',
		'post_title' => __('Ajankohtaiset uutiset', 'ID'),
		'post_name' => 'ajankohtaista',
		'comment_status' => 'closed',
		'post_status' => 'publish',
		'post_content' => ''
	));
	
	
	//Set front page and page for posts
	update_option( 'page_on_front', $homepage );
	update_option( 'page_for_posts', $latest_posts );
    update_option( 'show_on_front', 'page' );    

    //Delete sample page generated by WordPress
    $defaultPage = get_page_by_title( __('Esimerkkisivu') );
    $defaultPost = get_page_by_title( __('Moikka maailma!'), OBJECT, 'post' );

    if(!empty($defaultPage)) {
    	wp_delete_post( $defaultPage->ID );
	}

	if(!empty($defaultPost)) {
    	wp_delete_post( $defaultPost->ID );
	}
}
*/


//Create new menu
function ID_init_menu($menu_name = null, $menu_location = null) {
	if(!isset($menu_name) || !isset($menu_location)) {
		return;
	}

	$menuname = $menu_name;
	$menulocation = $menu_location;
	// Does the menu exist already?
	$menu_exists = wp_get_nav_menu_object( $menuname );

	// If it doesn't exist, let's create it.
	if( !$menu_exists){
	    $menu_id = wp_create_nav_menu($menuname);

	    // Set up default links and add them to the menu.
	    /*
	    wp_update_nav_menu_item($menu_id, 0, array(
	        'menu-item-title' =>  __('Home'),
	        'menu-item-classes' => 'home',
	        'menu-item-url' => home_url( '/' ), 
	        'menu-item-status' => 'publish'));
	    */

	    /*
		wp_update_nav_menu_item($menu_id, 0, array(
			'menu-item-title' => 'About',
            'menu-item-object' => 'page',
            'menu-item-object-id' => get_page_by_path('about')->ID,
            'menu-item-type' => 'post_type',
            'menu-item-status' => 'publish'));
	    */

	    // Grab the theme locations and assign our newly-created menu
	    // to the menu location.
	    if( !has_nav_menu( $menulocation ) ){
	        $locations = get_theme_mod('nav_menu_locations');
	        $locations[$menulocation] = $menu_id;
	        set_theme_mod( 'nav_menu_locations', $locations );
	    }
		return $menu_id;
	} else {
		return false;
	}
}