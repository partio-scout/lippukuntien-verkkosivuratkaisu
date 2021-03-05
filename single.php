<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main container" role="main">
        <div class="row justify-content-center content-row">
            <div class="col-12 article-content">
                <?php
                // Start the loop.
                while ( have_posts() ) : the_post();
                // Include the single post content template.
                get_template_part( 'template-parts/content', 'single' );
                /*
                // If comments are open or we have at least one comment, load up the comment template.
                if ( comments_open() || get_comments_number() ) {
                    comments_template();
                }
                */
                // End of the loop.
                endwhile;
                ?>
            </div>
        </div>
    </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
