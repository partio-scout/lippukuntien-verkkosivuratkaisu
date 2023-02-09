<?php
/**
 * Component: Hero, karuselli
 * Description: Hero-kuva, karuselli
 * InnerBlocks: true
 * InnerBlocksMode: preview
 * Keywords: 
 * @version 1.0
 */

$allowed_blocks = array(
    'acf/block-hero-carousel-slide',
);

$template = array(
	array('acf/block-hero-carousel-slide', array()),
);
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

<div class="block-hero-carousel full-width id-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">
	<div class="slides entry-content">
		<?php if ( $is_preview && !empty($block['data']['preview']) ): ?>
			<div class="slide">
				<h1>Lorem ipsum dolor sit amet</h1>
				<p>Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.</p>						
			</div>
		<?php else: ?>
			<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />
		<?php endif; ?>
	</div>

	<div class="controls">
		<div class="dots"></div>
	</div>
</div>