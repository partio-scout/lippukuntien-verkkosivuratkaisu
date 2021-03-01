<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
    </header><!-- .entry-header -->
    <div class="entry-meta">
        <span class="date"><?php echo get_the_date(); ?></span>
        <span class="author"><?php the_author_meta('nickname'); ?></span>
    </div>
    <?php ID_post_thumbnail(); ?>
    <?php ID_excerpt(); ?>
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
        if ( '' !== get_the_author_meta( 'description' ) ) {
            get_template_part( 'template-parts/biography' );
        }
        ?>
    </div><!-- .entry-content -->
    <footer class="entry-footer">
        <?php
        $categories_list = get_the_category_list( ', ' );
        if ( $categories_list ) {
            printf( '<div class="categories"><span class="cat-links"><span class="links-title">%1$s </span>%2$s</span></div>',
                   _x( 'Kategoriat:', 'Used before category names.', 'ID' ),
                   $categories_list
                  );
        }
        $tags_list = get_the_tag_list( '', ', ' );
        if ( $tags_list ) {
            printf( '<div class="tags"><span class="tag-links"><span class="links-title">%1$s </span>%2$s</span></div>',
                   _x( 'Avainsanat:', 'Used before tag names.', 'ID' ),
                   $tags_list
                  );
        }
        ?>
        <div class="back-to-blog">
            <a href="<?php echo get_the_permalink(get_option('page_for_posts')); ?>" rel="bookmark" class="button"><?php _e('Takaisin blogiin', 'ID'); ?></a>
        </div>
    </footer><!-- .entry-footer -->
</article><!-- #post-## -->
