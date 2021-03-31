<?php
/*
 * Enable custom logo, featured images and add image sizes
 */
function ID_image_sizes ()
{
	// Enable support for custom logo.
	add_theme_support( 'custom-logo', array(
        'width'       => 240,
		'height'      => 240,		
		'flex-height' => true,
	) );

    add_image_size('karuselli-mobile', 640, 352, false);
    
    /*	
    add_theme_support( 'post-thumbnails' );
	set_post_thumbnail_size( 1200, 9999 );


    add_filter('image_size_names_choose', 'ID_image_size_names_choose');
    */
    add_image_size('nosto', 1200, 9999, false);
}
add_action( 'after_setup_theme', 'ID_image_sizes' );

/*
 * Add custom image sizes to admin UI
 */
function ID_image_size_names_choose ($sizes)
{
    return array_merge($sizes, array(
        'nosto@2x' => 'Nosto',
    ));
}

/**
 * Add custom image sizes attribute to enhance responsive image functionality
 * for content images
 */
add_filter( 'wp_calculate_image_sizes', 'ID_content_image_sizes_attr', 10 , 2 );
function ID_content_image_sizes_attr( $sizes, $size ) {

	$width = $size[0];
    if ($width <= 840) {
        $sizes = '(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 1362px) 62vw, 840px';
    }

	if ( 'page' === get_post_type() ) {
		if ($width < 840) {
            $sizes = '(max-width: ' . $width . 'px) 85vw, ' . $width . 'px';
        }
	} else {
		if ($width < 840 && $width >= 600) {
            $sizes = '(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 984px) 61vw, (max-width: 1362px) 45vw, 600px';
        } else if ($width < 600) {
            $sizes = '(max-width: ' . $width . 'px) 85vw, ' . $width . 'px';
        }
	}

	return $sizes;
}

/**
 * Add custom image sizes attribute to enhance responsive image functionality
 * for post thumbnails
 */
add_filter( 'wp_get_attachment_image_attributes', 'ID_post_thumbnail_sizes_attr', 10 , 3 );
function ID_post_thumbnail_sizes_attr( $attr, $attachment, $size ) {

	if ( 'post-thumbnail' === $size ) {

		if (is_active_sidebar( 'sidebar-1' )) {
            $attr['sizes'] = '(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 984px) 60vw, (max-width: 1362px) 62vw, 840px';
        } else {
            $attr['sizes'] = '(max-width: 709px) 85vw, (max-width: 909px) 67vw, (max-width: 1362px) 88vw, 1200px';
        }

	}
	return $attr;

}
?>
