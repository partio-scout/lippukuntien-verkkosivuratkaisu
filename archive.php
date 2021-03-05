<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main container" role="main">
        <?php 
        if ( have_posts() ) : ?>
        <header class="page-header">            
            <h1 class="page-title"><?php echo get_the_title(get_queried_object_id()); ?></h1>
        </header>
        <div class="row content-row">
            <?php while ( have_posts() ) : the_post(); ?>
                <div class="col col-12 col-md-4">
                <?php get_template_part('template-parts/partial', 'article-card', array(
                    'ID' => get_the_ID()
                )); ?>   
                </div>
            <?php endwhile; ?>
        </div>
    <?php endif; ?>
    </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>