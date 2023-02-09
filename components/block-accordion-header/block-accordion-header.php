<?php
/**
 * Component: Avautuva sisältöosio, otsikko
 * Description: Avautuva sisältöosio, otsikko
 * InnerBlocks: true
 * InnerBlocksMode: preview
 * Keywords: 
 * Parent: ["acf/block-accordion"]
 * @version 1.0
 */

$allowed_blocks = array(
    'core/heading',
);

$template = array(
	array('core/heading', array()),
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

<button type="button" aria-expanded="false" aria-controls="accordion-body" class="inner-block-accordion-header id-inner-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">	
	<span class="chevron"></span>
	<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="all" />	
</button>
