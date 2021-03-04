<?php
require get_template_directory() . '/inc/components.php';
require get_template_directory() . '/inc/image-sizes.php';
require get_template_directory() . '/inc/admin-tweaks.php';
require get_template_directory() . '/inc/plugin-tweaks.php';
require get_template_directory() . '/inc/template-tags.php';
require get_template_directory() . '/inc/redirects.php';
require get_template_directory() . '/inc/gutenberg-settings.php';

require get_template_directory() . '/inc/api-actions.php';
require get_template_directory() . '/inc/post-types.php';
require get_template_directory() . '/inc/acf-helpers.php';

require get_template_directory() . '/inc/menu-walker.php';


/* Enable developer checklist in admin */
if (is_admin()) {
  require get_template_directory() . '/inc/checklist.php';
}

/* Enable gulp urls */
add_action('after_setup_theme', 'ID_enable_gulp');
function ID_enable_gulp()
{
  global $asset_manager;

  if ($asset_manager == 'gulp') {
    trigger_error('Gulp enabled in both parent and child theme', E_USER_ERROR);
  }

  $asset_manager = 'gulp';

  add_filter('stylesheet_directory_uri', 'ID_gulp_uri_filter');
  add_filter('template_directory_uri', 'ID_gulp_uri_filter');

  // Keep these commented
  //add_filter('stylesheet_directory', 'ID_gulp_uri_filter');
  //add_filter('template_directory', 'ID_gulp_uri_filter');
}

function ID_gulp_uri_filter($uri)
{

  if (WP_DEBUG) {
    $uri .= '/dev';
  } else {
    $uri .= '/dist';
  }

  return $uri;
}

function ID_gulp_destination_directory()
{
  $path = WP_DEBUG ? '/dev' : '/dist';
  return get_template_directory() . $path;
}

/**
 * Enqueues scripts and styles.
 */
add_action('wp_enqueue_scripts', 'ID_scripts');
function ID_scripts()
{

  $dynamic_version_num = true;
  if ($dynamic_version_num) {

    if (is_file(ID_gulp_destination_directory() . '/stylesheets/screen.css')) {
      $css = filemtime(ID_gulp_destination_directory() . '/stylesheets/screen.css');
    } else {
      $css = null;
    }


    if (is_file(ID_gulp_destination_directory() . '/js/app.js')) {
      $js = filemtime(ID_gulp_destination_directory() . '/js/app.js');
    } else {
      $js = null;
    }

    if ($css || $js) {
      $version = $css > $js ? $css : $js;
    } else {
      $version = uniqid();
    }
  } else {
    $version = '1';
  }

  /* For optimization: Remove Gutenberg block-styles, if using Classic editor */
  //wp_dequeue_style('wp-block-library');
  //wp_deregister_style('wp-block-library');

  /* GULP */
  wp_enqueue_style('screen-stylesheet', get_template_directory_uri() . '/stylesheets/screen.css', array(), $version, 'all');
  wp_enqueue_style('print-stylesheet', get_template_directory_uri() . '/stylesheets/print.css', array(), $version, 'print');

  wp_register_script('maps', 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDU5fWMLds51kb-AxtLcTozIga7shuHge4', array(), false, true);
  wp_register_script('intodigital-script', get_template_directory_uri() . '/js/app.js', array('jquery'), $version, true);


  wp_localize_script('intodigital-script', 'ajaxurl', admin_url('admin-ajax.php'));
  wp_localize_script('intodigital-script', 'resturl', get_rest_url(null, '/'));
  wp_localize_script('intodigital-script', 'aria_open_menu', __('Avaa päävalikko', 'ID'));
  wp_localize_script('intodigital-script', 'aria_close_menu', __('Sulje päävalikko', 'ID'));
  wp_localize_script('intodigital-script', 'aria_open_submenu', __('Avaa alavalikko', 'ID'));
  wp_localize_script('intodigital-script', 'aria_close_submenu', __('Sulje alavalikko', 'ID'));
  wp_enqueue_script('maps');
  wp_enqueue_script('intodigital-script');

  // WP Scripts
  if (is_singular() && comments_open() && get_option('thread_comments')) {
    wp_enqueue_script('comment-reply');
  }
}

/**
 * Enqueues scripts and styles in admin only.
 */
add_action('admin_enqueue_scripts', 'ID_admin_scripts');
function ID_admin_scripts()
{

  global $asset_manager;
  $version = '1.1';

  if ($asset_manager == 'gulp') {
    wp_enqueue_style('intodigital-admin-stylesheet', get_template_directory_uri() . '/stylesheets/admin.css', array(), $version, 'all');
  } else {
    wp_enqueue_style('intodigital-admin-stylesheet', get_template_directory_uri() . '/css/admin.css', array(), $version, 'all');
  }

  wp_register_script('intodigital-admin-script', get_template_directory_uri() . '/js/admin.js', array('jquery', 'wp-editor'), $version, true);
  wp_localize_script('intodigital-admin-script', 'ajaxurl', admin_url('admin-ajax.php'));
  wp_enqueue_script('intodigital-admin-script');
}


/**
 * Required by some plugins... Maximum content width in pixels
 */
function ID_content_width()
{
  $GLOBALS['content_width'] = apply_filters('ID_content_width', 840);
}
add_action('after_setup_theme', 'ID_content_width', 0);

/**
 * Add wrapper to oembeds for styling
 */
function ID_oembed_dataparse($return, $data, $url)
{
  global $oembedthumb;
  if ($oembedthumb) {
    return @$data->thumbnail_url;
  }

  $class = 'oembed oembed-' . preg_replace('/[^a-z0-9]/', '-', strtolower($data->provider_name));
  return "<div class=\"{$class}\">{$return}</div>";
}
add_filter('oembed_dataparse', 'ID_oembed_dataparse', 10, 3);

/**
 * Get oembed thumbnail
 */
function ID_oembed_thumbnail($url)
{
  global $oembedthumb;
  $oembedthumb = true;

  $thumbnail = wp_oembed_get($url);
  $oembedthumb = false;

  return $thumbnail;
}

/**
 * Registers a widget area.
 */
//add_action( 'widgets_init', 'ID_widgets_init' );
function ID_widgets_init()
{
  register_sidebar(array(
    'name'          => __('Sivupalkki', 'ID_admin'),
    'id'            => 'sidebar-1',
    'description'   => __('Lisää sivupalkissa näytettävät vimpaimet tähän.', 'ID_admin'),
    'before_widget' => '<section id="%1$s" class="widget %2$s">',
    'after_widget'  => '</section>',
    'before_title'  => '<h2 class="widget-title">',
    'after_title'   => '</h2>',
  ));
}


/**
 * Handles JavaScript detection.
 * Adds a `js` class to the root `<html>` element when JavaScript is detected.
 */
add_action('wp_head', 'ID_head', 10);
function ID_head()
{

  /* Javascript detection */
  echo "<script>(function(html){html.className = html.className.replace(/\bno-js\b/,'js')})(document.documentElement);</script>\n";

  /* Analytics */
  $analytics = get_option('id_analytics', '');

  if (!WP_DEBUG) {

    if ($analytics && strpos($analytics, 'GTM') === 0) {
      echo <<<INLINE

		<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','$analytics');</script>
<!-- End Google Tag Manager -->


INLINE;
    } else if ($analytics) {
      echo <<<INLINE

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=$analytics" id="gtag" data-ua="$analytics"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '$analytics', { 'anonymize_ip': true });
    </script>

INLINE;
    }
  }
}


/**
 * Adds custom classes to the array of body classes.
 */
add_filter('body_class', 'ID_body_classes');
function ID_body_classes($classes)
{

  // Adds a class of custom-background-image to sites with a custom background image.
  if (get_background_image()) {
    $classes[] = 'custom-background-image';
  }

  return $classes;
}


/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */

if (!function_exists('ID_setup')) :

  function ID_setup()
  {

    // Make theme available for translation.
    load_theme_textdomain('ID', get_template_directory() . '/languages');
    load_theme_textdomain('ID_admin', get_template_directory() . '/languages');

    // Add default posts and comments RSS feed links to head.
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title.
    add_theme_support('title-tag');

    // Add support for featured images
    add_theme_support('post-thumbnails');

    // Register menu locations.
    register_nav_menus(array(
      'primary' => __('Päävalikko', 'ID_admin'),
      'secondary' => __('Apuvalikko', 'ID_admin'),
      'footer' => __('Footer', 'ID_admin'),
      'footer-extra' => __('Footer apuvalikko', 'ID_admin'),
    ));

    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support('html5', array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    ));

    /*
     * Enable support for Post Formats.
     * See: https://codex.wordpress.org/Post_Formats
     */
    /*
	add_theme_support( 'post-formats', array(
		'aside',
		'image',
		'video',
		'quote',
		'link',
		'gallery',
		'status',
		'audio',
		'chat',
	) );
    */

    // Indicate widget sidebars can use selective refresh in the Customizer.
    add_theme_support('customize-selective-refresh-widgets');
  }

endif; // ID_setup
add_action('after_setup_theme', 'ID_setup');




/*
 * Add support to svg uploads.
 * Remember to update htaccess as well

# Add SVG Mime Types
AddType image/svg+xml svg
AddType image/svg+xml svgz

 */
//add_filter( 'upload_mimes', 'ID_mime_types' );
function ID_mime_types($mimes)
{
  $mimes['svg'] = 'image/svg+xml';
  return $mimes;
}

/**
 * Fixes problem with TinyMCE not showing if using amazon cloudfront.
 */
add_filter('user_can_richedit', 'ID_user_can_richedit');
function ID_user_can_richedit($wp_rich_edit)
{
  if (
    !$wp_rich_edit
    && (get_user_option('rich_editing') == 'true' || !is_user_logged_in())
    && isset($_SERVER['HTTP_USER_AGENT'])
    && stripos($_SERVER['HTTP_USER_AGENT'], 'amazon cloudfront') !== false
  ) {
    return true;
  }

  return $wp_rich_edit;
}


//Disable WordPress search functionality on frontend
function disable_search($query, $error = true)
{
    if (is_search() && !is_admin()) {
        $query->is_search = false;
        $query->query_vars['s'] = false;
        $query->query['s'] = false;

        // to error
        if ($error == true) $query->is_404 = true;
    }
}

add_action('parse_query', 'disable_search');
add_filter('get_search_form', function(){ return null; });