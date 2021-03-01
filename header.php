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
                    <div class="container-lg">
                        <div class="site-header-main">
                            <div class="site-branding">
                                <?php ID_the_custom_logo(); ?>
                            </div><!-- .site-branding -->
                            <?php if ( has_nav_menu( 'primary' ) ) : ?>
                            <button class="hamburger hamburger--collapse" type="button" aria-label="<?php _e('Avaa päävalikko', 'ID'); ?>">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>  
                            <div id="site-header-menu" class="site-header-menu">
                                <nav id="site-navigation" class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Päävalikko', 'ID' ); ?>">
                                    <?php
                                    wp_nav_menu( array(
                                        'theme_location' => 'primary',
                                        'menu_class'     => 'primary-menu',
                                        'walker'         => new ID_menu_walker(),
                                    ) );
                                    ?>
                                </nav><!-- .main-navigation -->
                            </div><!-- .site-header-menu -->
                            <?php endif; ?>
                            <div class="site-search">
                                <?php get_search_form(); ?>
                            </div>
                        </div><!-- .site-header-main -->
                    </div>

                </header><!-- .site-header -->

                <?php get_template_part('template-parts/block', 'hero'); ?>

                <div id="content" class="site-content">

                    <?php
                    if ( !is_front_page() && function_exists('yoast_breadcrumb') ) { ?>
                    <div class="breadcrumbs-container container">
                        <?php yoast_breadcrumb( '<div id="breadcrumbs">','</div>' ); ?>
                    </div>
                    <?php } ?>