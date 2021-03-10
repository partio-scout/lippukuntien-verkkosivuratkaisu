<?php
if(ID_REQUIRE_LOGIN) {
    if (!is_user_logged_in()) {
        auth_redirect();
    }
}
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="profile" href="http://gmpg.org/xfn/11">

        <?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
        <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
        <?php endif; ?>
        <?php wp_head(); ?>

        <style>
            /*
            This CSS resource incorporates links to font software which is the valuable copyrighted property of Monotype and/or its suppliers. You may not attempt to copy, install, redistribute, convert, modify or reverse engineer this font software. Please contact Monotype with any questions regarding Web Fonts: http://www.fonts.com
            */
            
            <?php 
            $theme_colors = get_field('theme_colors', 'option');
            ?>

            :root {
                --primary-color: <?php echo $theme_colors['primary_color']; ?>;
                --secondary-color: <?php echo $theme_colors['secondary_color']; ?>;
                --primary-text-color: <?php echo $theme_colors['text_color_primary']; ?>;
                --secondary-text-color: <?php echo $theme_colors['text_color_secondary']; ?>;
            }
        </style>
    </head>

    <body <?php body_class(); ?>>
        <?php if (!WP_DEBUG) {
    $analytics = get_option('id_analytics', '');
    if ($analytics && strpos($analytics,'GTM') === 0) { ?>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=<?php echo $analytics; ?>"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
        <?php }
}
        ?>
        <div id="page" class="site">
            <div class="site-inner">
                <header id="masthead" class="site-header" role="banner">                    
                    <?php get_template_part('template-parts/partial', 'header-desktop'); ?>
                    <?php get_template_part('template-parts/partial', 'header-mobile'); ?>                
                </header><!-- .site-header -->

                <?php get_template_part('template-parts/block', 'hero'); ?>

                <div id="content" class="site-content">

                    <?php
                    if ( !is_front_page() && function_exists('yoast_breadcrumb') ){
                        global $post;         
                        $blocks = parse_blocks( $post->post_content );

                        if(!empty($blocks) && $blocks[0]['blockName'] == 'acf/block-hero') {
                            get_template_part('template-parts/partial', 'breadcrumbs', array(
                                'class' => 'has-hero desktop'
                            ));
                        } else {
                            get_template_part('template-parts/partial', 'breadcrumbs');
                        }
                    }