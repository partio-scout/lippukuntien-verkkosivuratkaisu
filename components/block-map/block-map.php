<?php
/**
 * Component: Kartta
 * Description: Kartta
 * InnerBlocks: false
 * InnerBlocksMode: preview
 * Keywords: 
 * @version 1.0
 */


$location = get_field('location');
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

<div class="block-map id-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">
	<div class="acf-map" data-zoom="14">
		<?php if(!empty($location)): ?>
			<div class="marker" data-lat="<?php echo esc_attr($location['lat']); ?>" data-lng="<?php echo esc_attr($location['lng']); ?>"></div>
		<?php endif; ?>
    </div>
</div>
