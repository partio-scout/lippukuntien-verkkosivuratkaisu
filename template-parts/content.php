<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <div class="item-top">
        <?php if (is_singular()) : ?>
        <div class="entry-thumbnail">
            <?php 
            $thumb = get_the_post_thumbnail_url($post, 'large'); ?>
           <div class="thumb" <?php if ($thumb) { ?>style="background-image: url('<?php echo $thumb; ?>');"<?php } ?>></div>
        </div>
        <?php endif; ?>
        <div class="entry-meta">
            <span class="date"><?php echo get_the_date(); ?></span>
            <span class="author"><?php the_author_meta('nickname'); ?></span>
        </div>
        <header class="entry-header">
            <?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
        </header><!-- .entry-header -->
        <div class="entry-content">
            <?php the_excerpt(); ?>
        </div>
    </div>
    <div class="item-bottom">
        <footer class="entry-footer">
            <a href="<?php the_permalink(); ?>" rel="bookmark" class="button"><?php _e('Lue lisää', 'ID'); ?></a>
        </footer><!-- .entry-footer -->
    </div>
</article><!-- #post-## -->
