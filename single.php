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

        <?php
        $post_categories = get_the_category();
        $cats = array();
        
        if ($post_categories) {
            foreach($post_categories as $cat) {
                $cats[] = $cat->term_id;
            }
        }
        
        $post_tags = get_the_tags();
        $tags = array();

        if ($post_tags) {
            foreach($post_tags as $tag) {
                $tags[] = $tag->term_id;
            }       
        }       

        $args = array(
            'post_type' => 'post',
            'posts_per_page' => 4,
            'post__not_in' => array($post->ID),
            'tax_query' => array(
                'relation' => 'OR',
                array(
                    'taxonomy' => 'category',
                    'terms' => $cats 
                ),
                array(
                    'taxonomy' => 'post_tag',
                    'terms' => $tags 
                ), 
            ),
        );

        $readmore = new WP_Query($args);

        if ($readmore->have_posts()) : ?>
        <div class="read-also-title">
            <h3><?php _e('Lue myös', 'ID'); ?></h3>
        </div>
        <div class="row read-also-row">
            <?php while ($readmore->have_posts()): $readmore->the_post(); ?>
            <div class="col read-also-item"><?php get_template_part( 'template-parts/content', get_post_format() ); ?></div>
            <?php endwhile; wp_reset_postdata(); ?>
        </div>
        <?php endif; ?>

    </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
