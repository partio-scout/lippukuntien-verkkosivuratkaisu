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
<div class="block-map id-block">
	<div class="acf-map" data-zoom="14">
		<?php if(!empty($location)): ?>
			<div class="marker" data-lat="<?php echo esc_attr($location['lat']); ?>" data-lng="<?php echo esc_attr($location['lng']); ?>"></div>
		<?php endif; ?>
    </div>
</div>
