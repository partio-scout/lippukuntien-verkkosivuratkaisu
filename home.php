<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main container" role="main">
        <?php 
        if ( have_posts() ) :
        if ( is_home() && ! is_front_page() ) : ?>
        <header class="page-header">
            <h1 class="page-title"><?php single_post_title(); ?></h1>
        </header>
        <?php endif; ?>
        <div class="row content-row">
            <div class="col-12 col-lg-7 article-items">
                <?php
                // Start the loop.
                while ( have_posts() ) : the_post();
                get_template_part( 'template-parts/content', get_post_format() );
                // End the loop.
                endwhile; ?>
            </div>
            <div class="col-12 offset-lg-2 col-lg-3 articles-sidebar">
                <div class="sidebar-item sidebar-categories">
                    <div class="item-header categories-header">
                        <p class="item-title categories-title text-l"><?php _e('Kategoriat', 'ID'); ?></p>
                    </div>
                    <?php
                    $categories = get_categories();
                    if ($categories) : ?>
                    <ul>
                        <?php foreach ($categories as $cat) : ?>
                        <li><a href="<?php echo get_term_link($cat->term_id); ?>"><?php echo $cat->name; ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                    <?php endif; ?>
                </div>
                <div class="sidebar-item sidebar-tags">
                    <div class="item-header tags-header">
                        <p class="item-title tags-title text-l"><?php _e('Avainsanat', 'ID'); ?></p>
                    </div>
                    <?php
                    $tags = get_tags();
                    if ($tags) : ?>
                    <ul>
                        <?php foreach ($tags as $tag) : ?>
                        <li><a href="<?php echo get_term_link($tag->term_id); ?>"><?php echo $tag->name; ?></a></li>
                        <?php endforeach; ?>
                    </ul>
                    <?php endif; ?>
                </div>
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
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
