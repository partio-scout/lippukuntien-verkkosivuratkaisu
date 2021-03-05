<div class="sidebar-posts">
	<p class="sidebar-title"><?php _ex('Uusimmat artikkelit', 'Artikkelit sivuvalikko', 'ID'); ?></p>
	<ul class="latest">
		<?php
		$posts = get_posts(array(
			'post_type' => 'post',
			'posts_per_page' => 5,
		));

		foreach ($posts as $post):
		?>
		<li class="article">
			<span class="date"><?php echo get_the_date('j.n.Y', $post->ID); ?></span>
			<a href="<?php echo get_the_permalink($post->ID); ?>" class="link"><?php echo $post->post_title; ?></a>
		</li>
		<?php endforeach; ?>
	</ul>
	<a class="more" href="<?php echo get_post_type_archive_link('post'); ?>"><?php _ex('Kaikki artikkelit', 'Artikkelit sivuvalikko', 'ID') ?></a>
</div>