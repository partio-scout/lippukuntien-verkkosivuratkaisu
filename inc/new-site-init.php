<?php
require get_template_directory() . '/inc/default_content.php';

//do_action( 'wp_initialize_site', ID_init_site($homepage_content) );
//ID_init_site($homepage_content);
function ID_init_site($homepage_content = '') {
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
		wp_update_nav_menu_item($menu_id, 0, array('menu-item-title' => 'About',
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
	}
}