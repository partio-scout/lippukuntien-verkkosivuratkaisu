<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main container" role="main">
        <?php if ( have_posts() ) : ?>
        <?php if ( is_home() && ! is_front_page() ) : ?>
        <header class="page-header">
            <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
        </header>
        <?php endif; ?>
        <div class="row justify-content-center content-row">
            <div class="col-12 page-content">
                <?php
                // Start the loop.
                while ( have_posts() ) : the_post();
                get_template_part( 'template-parts/content', get_post_format() );
                // End the loop.
                endwhile; ?>
            </div>
        </div>
        <?php
        // Previous/next page navigation.
        the_posts_pagination( array(
            'prev_text'          => __( 'Edelliset', 'ID' ),
            'next_text'          => __( 'Seuraavat', 'ID' ),
            'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Sivu', 'ID' ) . ' </span>',
        ));
        // If no content, include the "No posts found" template.
        else : ?>
        <div class="row content-row">
            <div class="col-12 not-found-item">
                <?php get_template_part( 'template-parts/content', 'none' ); ?>
            </div>
        </div>
        <?php
        endif;
        ?>
    </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
