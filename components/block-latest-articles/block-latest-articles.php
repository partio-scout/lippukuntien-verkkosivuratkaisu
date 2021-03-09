<?php
/**
 * Component: Viimeisimmät artikkelit
 * Description: Viimeisimmät artikkelit
 * InnerBlocks: false
 * InnerBlocksMode: preview
 * Keywords: 
 * @version 1.0
 */

$title = get_field('title');

if(empty($title)) {
	$title = _x('Ajankohtaista', 'Viimeisimmät artikkelit otsikko', 'ID');
}
?>

<?php 
if ( $is_preview && !empty($block['data']['preview']) ): 
$blockName = substr($block['name'], 4);
?>
<img src="<?php echo ID_get_theme_uri() . 'components/' . $blockName . '/screenshot.png'; ?>">
<?php
return;
endif; 
?>

<div class="block-latest-articles full-width id-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">
	<div class="accent"></div>
	<div class="container-lg">
		<div class="row">
			<div class="col">
				<h2 class="block-title"><?php echo $title; ?></h2>
			</div>
		</div>
		<div class="row">
			<?php
			$args = array(
				'post_type' => 'post',
				'posts_per_page' => 3
			);
			$posts_query = new WP_Query($args);
			if ($posts_query->have_posts()):
			while ($posts_query->have_posts()):
			$posts_query->the_post();
			?>

			<div class="col col-12 col-md-4">
				<?php get_template_part('template-parts/partial', 'article-card', array(
					'ID' => get_the_ID()
				)); ?>   
			</div>

			<?php
			endwhile;
			endif;
			wp_reset_postdata();
			?>
		</div>
	</div>	
</div>
