<?php get_header(); ?>

<section id="primary" class="content-area">
    <main id="main" class="site-main container" role="main">

        <?php if ( have_posts() ) : ?>

        <header class="page-header">
            <h1 class="page-title"><?php printf( __( 'Hakutulokset hakusanalla: %s', 'ID' ), '<span>' . esc_html( get_search_query() ) . '</span>' ); ?></h1>
        </header><!-- .page-header -->

        <div class="row content-row">
            <div class="col-12 col-lg-7 article-items">
                <?php
                // Start the loop.
                while ( have_posts() ) : the_post();

                get_template_part( 'template-parts/content', 'search' );

                // End the loop.
                endwhile;
                ?>
            </div>
        </div>

        <?php
        // Previous/next page navigation.
        the_posts_pagination( array(
        'prev_text'          => __( 'Edelliset', 'ID' ),
        'next_text'          => __( 'Seuraavat', 'ID' ),
        'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Sivu', 'ID' ) . ' </span>',
        ) );

        // If no content, include the "No posts found" template.
        else : ?>
        <div class="row content-row">
            <div class="col-12 col-lg-7 not-found-item">
                <?php get_template_part( 'template-parts/content', 'none' ); ?>
            </div>
        </div>
        <?php
        endif;
        ?>

    </main><!-- .site-main -->
</section><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
