<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main container" role="main">
        <?php 
        if ( have_posts() ) : ?>
        <header class="page-header">            
            <h1 class="page-title"><?php echo get_the_archive_title(); ?></h1>
        </header>
        <div class="row content-row static-card-wrapper">
            <?php while ( have_posts() ) : the_post(); ?>
                <div class="col col-12 col-md-4">
                <?php get_template_part('template-parts/partial', 'article-card', array(
                    'ID' => get_the_ID()
                )); ?>   
                </div>
            <?php endwhile; ?>
        </div>
    
        <div class="row">
            <div class="col load-more-wrapper">
                <?php if (  $wp_query->max_num_pages > 1 ): ?>
                <button type="button" class="load-more"><?php _ex('Näytä lisää', 'Arkisto', 'ID'); ?></button>
                <?php endif; ?>
            </div>
        </div>
    <?php endif; ?>
    </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>