<?php
/**
 * Component: Avautuva sisältöosio
 * Description: Avautuva sisältöosio
 * InnerBlocks: true
 * InnerBlocksMode: preview
 * Keywords: 
 * Parent: ["acf/block-content", "acf/block-article-content", "block/content-with-sidebar"]
 * @version 1.0
 */

$allowed_blocks = array(
    'acf/accordion-header',
	'acf/accordion-body',
);

$template = array(
	array('acf/block-accordion-header', array()),
    array('acf/block-accordion-body', array()),
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

<div class="inner-block-accordion id-inner-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">	
	<div class="inner-blocks entry-content">
		<?php if ( $is_preview && !empty($block['data']['preview']) ): ?>
			<h2>Lorem ipsum dolor sit amet</h1>
			<p>Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.</p>						
		<?php else: ?>
			<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="all" />
		<?php endif; ?>			
	</div>
</div>
