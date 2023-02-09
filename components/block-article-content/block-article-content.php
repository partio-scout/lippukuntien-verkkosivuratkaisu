<?php
/**
 * Component: Artikkelin sisältö
 * Description: Artikkelin sisältö
 * InnerBlocks: true
 * InnerBlocksMode: preview
 * Keywords: 
 * @version 1.0
 */

$allowed_blocks = array_merge(ID_allowed_inner_blocks(), array(
	'acf/block-map',
	'acf/block-accordion',
	'acf/block-google-calendar-inner'
));

$template = array(
    array('core/paragraph', array()),
);

$hide_figure = get_field('hide_figure');
$uniq_id = uniqid();
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

<div class="block-article-content article full-width id-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">
	<div class="container-lg">
		<div class="row">
			<div class="col d-none d-lg-block col-lg-4 col-xxl-3">
				<?php get_template_part('template-parts/partial' , 'sidebar-posts'); ?>
			</div>
			<div class="col col-12 col-lg-8 col-xxl-7 offset-xxl-1">	
				<p class="entry-date"><?php echo _x('Julkaistu', 'artikkeli', 'ID') . ' ' . get_the_date('j.n.Y', $post_id); ?></p>
				<?php
				$terms = wp_get_post_terms($post_id, 'category');

				if(!empty($terms)):
				?>
				<ul class="post-terms">
					<?php foreach($terms as $term): ?>
						<li><a href="<?= get_term_link($term); ?>"><?php echo $term->name; ?></a></li>
					<?php endforeach; ?>
				</ul>
				<?php endif; ?>
				<h1 class="entry-title" id="entry-title-<?php echo $uniq_id; ?>"><?php echo get_the_title($post_id); ?></h1>
				<div class="inner-blocks entry-content">
					<?php if ( $is_preview && !empty($block['data']['preview']) ): ?>
						<h1>Lorem ipsum dolor sit amet</h1>
						<p>Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.</p>						
					<?php else: ?>
						<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>	
	<?php if(!$hide_figure): ?>
		<div class="figures">
			<svg class="figure mountain" xmlns="http://www.w3.org/2000/svg" width="107" height="45.956" viewBox="0 0 107 45.956">
			    <path d="M168.122 240.378l5.678-5.678-25.585-25.516-16.362 16.362-27.115-27.046L66.8 236.438l5.678 5.655 32.283-32.283 34.67 34.647 5.678-5.655-7.6-7.6 10.73-10.73z" transform="translate(-66.8 -198.5)"/>
			</svg>

			<svg class="figure tent" xmlns="http://www.w3.org/2000/svg" width="107" height="78.58" viewBox="0 0 107 78.58">
			    <path d="M217.722 215.089l10.643-13.474-10.227-8.115-8.756 11.059-8.757-11.059-10.225 8.115 10.681 13.474L155.9 272.08h16.645l36.837-46.5 36.875 46.5H262.9z" transform="translate(-155.9 -193.5)"/>
			</svg>
		</div>
	<?php endif; ?>
	<?php if (is_admin()) { // jank fix for updating title in block when post title changes ?>
	<script>
		if (document.getElementById('post-title-0')) {
			const blocktitle = document.getElementById('entry-title-<?php echo $uniq_id; ?>');
			document.getElementById('post-title-0').addEventListener('keyup', function(e) { 
				blocktitle.textContent = e.target.value;
			})
		}
  	</script>
	<?php } ?>
</div>
