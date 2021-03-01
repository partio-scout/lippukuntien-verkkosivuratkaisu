<?php
/**
 * Create link list based on yoast settings
 */
function ID_social_links () {

    $social = get_option('wpseo_social', array());
    $keys = array(
        'facebook_site'   => array('class' => 'facebook',  'fa' => 'fa-facebook'),
        'twitter_site'    => array('class' => 'twitter',   'fa' => 'fa-twitter'),
        'google_plus_url' => array('class' => 'google',    'fa' => 'fa-google-plus'),
        'linkedin_url'    => array('class' => 'linkedin',  'fa' => 'fa-linkedin'),
        'instagram_url'   => array('class' => 'instagram', 'fa' => 'fa-instagram'),
        'youtube_url'     => array('class' => 'youtube',   'fa' => 'fa-youtube'),
        'pinterest_url'   => array('class' => 'pinterest', 'fa' => 'fa-pinterest'),
        );

    echo '<ul class="social">';
    foreach ($keys as $key => $args) {

        $href = $social[$key];
        if ($key == 'twitter_site') {
            $href = 'https://twitter.com/' . $social[$key];
        }

        if (!empty($social[$key])) {
            echo '<li class="', $args['class'], '"><a href="', $href, '" target="_blank" rel="noopener"><i class="fa ', $args['fa'], '" aria-hidden="true"></i></a></li>';
        }
    }
    echo '</ul>';
}

if ( ! function_exists( 'ID_entry_meta' ) ) :
function ID_entry_meta() {
	if ( 'post' === get_post_type() ) {
		$author_avatar_size = apply_filters( 'ID_author_avatar_size', 49 );
		printf( '<span class="byline"><span class="author vcard">%1$s<span class="screen-reader-text">%2$s </span> <a class="url fn n" href="%3$s">%4$s</a></span></span>',
			get_avatar( get_the_author_meta( 'user_email' ), $author_avatar_size ),
			_x( 'Kirjoittaja', 'Used before post author name.', 'ID' ),
			esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ),
			get_the_author()
		);
	}

	if ( in_array( get_post_type(), array( 'post', 'attachment' ) ) ) {
		ID_entry_date();
	}

	$format = get_post_format();
	if ( current_theme_supports( 'post-formats', $format ) ) {
		printf( '<span class="entry-format">%1$s<a href="%2$s">%3$s</a></span>',
			sprintf( '<span class="screen-reader-text">%s </span>', _x( 'Formaatti', 'Used before post format.', 'ID' ) ),
			esc_url( get_post_format_link( $format ) ),
			get_post_format_string( $format )
		);
	}

	if ( 'post' === get_post_type() ) {
		ID_entry_taxonomies();
	}

	if ( ! is_singular() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
		echo '<span class="comments-link">';
		comments_popup_link( sprintf( __( 'Kommentoi<span class="screen-reader-text"> on %s</span>', 'ID' ), get_the_title() ) );
		echo '</span>';
	}
}
endif;


if ( ! function_exists( 'ID_entry_date' ) ) :
function ID_entry_date() {
	$time_string = '<time class="entry-date published updated" datetime="%1$s">%2$s</time>';

	if ( get_the_time( 'U' ) !== get_the_modified_time( 'U' ) ) {
		$time_string = '<time class="entry-date published" datetime="%1$s">%2$s</time><time class="updated" datetime="%3$s">%4$s</time>';
	}

	$time_string = sprintf( $time_string,
		esc_attr( get_the_date( 'c' ) ),
		get_the_date(),
		esc_attr( get_the_modified_date( 'c' ) ),
		get_the_modified_date()
	);

	printf( '<span class="posted-on"><span class="screen-reader-text">%1$s </span><a href="%2$s" rel="bookmark">%3$s</a></span>',
		_x( 'Kirjoitettu', 'Used before publish date.', 'ID' ),
		esc_url( get_permalink() ),
		$time_string
	);
}
endif;


if ( ! function_exists( 'ID_entry_taxonomies' ) ) :
function ID_entry_taxonomies() {
	$categories_list = get_the_category_list( ', ' );
	if ( $categories_list ) {
		printf( '<span class="cat-links"><span class="screen-reader-text">%1$s </span>%2$s</span>',
			_x( 'Kategoriat', 'Used before category names.', 'ID' ),
			$categories_list
		);
	}

	$tags_list = get_the_tag_list( '', ', ' );
	if ( $tags_list ) {
		printf( '<span class="tags-links"><span class="screen-reader-text">%1$s </span>%2$s</span>',
			_x( 'Avainsanat', 'Used before tag names.', 'ID' ),
			$tags_list
		);
	}
}
endif;


if ( ! function_exists( 'ID_post_thumbnail' ) ) :
function ID_post_thumbnail() {
	if ( post_password_required() || is_attachment() || ! has_post_thumbnail() ) {
		return;
	}

	if ( is_singular() ) :
	?>

	<div class="post-thumbnail">
		<?php the_post_thumbnail(); ?>
	</div><!-- .post-thumbnail -->

	<?php else : ?>

	<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true">
		<?php the_post_thumbnail( 'post-thumbnail', array( 'alt' => the_title_attribute( 'echo=0' ) ) ); ?>
	</a>

	<?php endif; // End is_singular()
}
endif;


if ( ! function_exists( 'ID_excerpt' ) ) :

	function ID_excerpt( $class = 'entry-summary' ) {
		$class = esc_attr( $class );

		if ( has_excerpt() || is_search() ) : ?>
			<div class="<?php echo $class; ?>">
				<?php the_excerpt(); ?>
			</div><!-- .<?php echo $class; ?> -->
		<?php endif;
	}

endif;


if ( ! function_exists( 'ID_excerpt_more' ) && ! is_admin() ) :
function ID_excerpt_more() {
    /*
    //You can append this to the end of return if you want a read more link
	$link = sprintf( '<a href="%1$s" class="more-link">%2$s</a>',
		esc_url( get_permalink( get_the_ID() ) ),
		// translators: %s: Name of current post
		sprintf( __( 'Lue lisää<span class="screen-reader-text"> "%s"</span>', 'ID' ), get_the_title( get_the_ID() ) )
	);
    */
	return '&hellip;';
}
add_filter( 'excerpt_more', 'ID_excerpt_more' );
endif;


if ( ! function_exists( 'ID_the_custom_logo' ) ) :
function ID_the_custom_logo() {
	if ( function_exists( 'the_custom_logo' ) ) {
		the_custom_logo();
	}
}
endif;
