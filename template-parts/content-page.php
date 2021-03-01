<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
    </header><!-- .entry-header -->
    <?php ID_post_thumbnail(); ?>
    <div class="entry-content">
        <?php
        the_content();
        wp_link_pages( array(
            'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Sivut:', 'ID' ) . '</span>',
            'after'       => '</div>',
            'link_before' => '<span>',
            'link_after'  => '</span>',
            'pagelink'    => '<span class="screen-reader-text">' . __( 'Sivu', 'ID' ) . ' </span>%',
            'separator'   => '<span class="screen-reader-text">, </span>',
        ) );
        ?>
    </div><!-- .entry-content -->
</article><!-- #post-## -->
