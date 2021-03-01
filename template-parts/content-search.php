<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php if ('post' == get_post_type()) : ?>
	<div class="entry-meta">
        <span class="date"><?php echo get_the_date(); ?></span>
        <span class="author"><?php the_author_meta('nickname'); ?></span>
    </div>
    <?php endif; ?>
    <header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
	</header><!-- .entry-header -->
    <div class="entry-meta">
        <?php the_excerpt(); ?>
    </div>
	<footer class="entry-footer">
		<a href="<?php the_permalink(); ?>" rel="bookmark" class="button"><?php _e('Lue lisää', 'ID'); ?></a>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->
