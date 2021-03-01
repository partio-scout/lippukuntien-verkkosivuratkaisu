<?php
/**
 * Component: Uusimmat artikkelit
 * Description: Näytä uusimmat artikkelit
 * Keywords: 
 * @version 1.0
 */

$title = get_field('title');
$article_count = get_field('article_count');
$link = get_field('article_page');

// Set excerpt length for block, filter removed at end
if (!function_exists('ID_newestposts_excerpt_length')) {
    function ID_newestposts_excerpt_length ($length) {
        return 13;
    }
}
add_filter('excerpt_length', 'ID_newestposts_excerpt_length', 99);
?>
<div class="container block-latest-articles">
    <?php if(!empty($title)): ?>
    <div class="row">
        <div class="col">
            <h2 class="block-title"><?php echo $title; ?></h2>
        </div>
    </div>
    <?php endif; ?>
    
    <div class="row">
        <?php
        $posts = get_posts(array(
            'numberposts'   => $article_count,
            'post_type'     => 'post'
        ));
        
        foreach($posts as $article):
        $thumbnail = get_the_post_thumbnail_url($article->ID);
        $categories = get_the_category($article->ID);
        $tags = wp_get_post_tags($article->ID);
        
        if(empty($thumbnail)) {
            $thumbnail = ''; //Placeholder image path if wanted
        }
        ?>
        <div class="col-12 col-md-6 col-lg-3">
            <article>
                <div class="thumbnail" style="background-image: url('<?php echo $thumbnail; ?>');"></div>
                <div class="meta">
                    <span class="post-date"><?php echo get_the_date('d.m.Y', $article->ID); ?></span>
                    <span class="post-author"><?php echo get_the_author_meta('nicename', $article->author); ?></span>
                </div>
                <a href="<?php echo get_the_permalink($article->ID); ?>" class="title-link"><h3 class="title"><?php echo $article->post_title; ?></h3></a>
                <div class="excerpt">
                    <p><?php echo get_the_excerpt($article->ID); ?></p>
                </div>
                <a href="<?php echo get_the_permalink($article->ID); ?>" class="read-more"><?php _e('Lue lisää', 'ID'); ?></a>
                <?php if(!empty($categories) || !empty($tags)): ?>
                <ul class="cats-and-tags">
                    <?php foreach($tags as $tag): ?>
                    <li><a href="<?php echo get_term_link($tag->term_id, 'post_tag'); ?>"><?php echo $tag->name; ?></a></li>
                    <?php endforeach; ?>
                    <?php foreach($categories as $cat): ?>
                    <li><a href="<?php echo get_term_link($cat->term_id, 'category'); ?>"><?php echo $cat->name; ?></a></li>
                    <?php endforeach; ?>
                </ul>
                <?php endif; ?>
            </article>
        </div>
        <?php endforeach; ?>
    </div>
    
    <?php if(!empty($link)): ?>
    <div class="row">
        <div class="col text-center">
            <a href="<?php echo $link['url']; ?>" <?php if($link['target']) echo 'target="_blank"'; ?> class="load-more button"><?php echo $link['title']; ?></a>
        </div>
    </div>
    <?php endif; ?>
</div>

<?php remove_filter('excerpt_length', 'ID_newestposts_excerpt_length', 99); ?>