<?php
/**
 * Component: Avautuva sisältöosio, sisältö
 * Description: Avautuva sisältöosio, sisältö
 * InnerBlocks: true
 * InnerBlocksMode: preview
 * Keywords: 
 * Parent: ["acf/block-accordion"]
 * @version 1.0
 */

$allowed_blocks = array(
    'core/paragraph',
    'core/heading',
    'core/buttons',
	'core/image'
);

$template = array(
    array('core/paragraph', array()),
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

<div id="accordion-body" class="inner-block-accordion-body id-inner-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?><?php if(is_admin()) echo ' is-admin'; ?>">	
	<div class="inner-blocks entry-content">
		<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />	
	</div>
</div>
