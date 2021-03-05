<?php
$ID = $args['ID'];
$image = get_the_post_thumbnail_url($ID);

if(empty($image)) {
	$image = get_template_directory_uri() . '/images/partio-article-image-placeholder.png';
}

$date = get_the_date('j.n.Y', $ID);
$title = get_the_title($ID);
$link = get_the_permalink($ID);
?>

<div class="article-card entry-content">
	<a href="<?php echo $link; ?>">
		<div class="image" style="background-image: url('<?php echo $image; ?>');"></div>
	</a>
	<div class="meta">
		<span class="date"><?php echo _x('Julkaistu', 'Artikkeli kortti', 'ID') . ' ' . get_the_date(); ?></span>	
	</div>
	<h3 class="title"><?php echo $title; ?></h3>
	<a class="read-more" href="<?php echo $link; ?>"><span class="sr-only"><?php echo $title . ' - '; ?></span><?php _e('Lue lisää', 'ID'); ?></a>
</div>