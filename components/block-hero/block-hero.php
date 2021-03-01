<?php
/**
 * Component: Hero
 * Description: Hero-kuva
 * InnerBlocks: true
 * InnerBlocksPreview: false
 * Keywords: 
 * @version 1.0
 */

$allowed_blocks = array(
    'core/paragraph',
    'core/heading',
    'core/buttons',
);

$template = array(
	array('core/heading', array(
        'placeholder' => 'Lorem ipsum dolor sit amet',
	)),
    array('core/paragraph', array(
        'placeholder' => 'Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien.',
	)),
	array('core/buttons', array(), array(
		array('core/button', array(
			'placeholder' => 'Lorem ipsum'
		)),
	)),
);

$image = get_field('image');
?>
<div class="block-hero full-width id-block">
	<div class="container-lg">
		<div class="row">
			<div class="col">
				<div class="flex">
					<div class="accent desktop"></div>					
					<div class="accent mobile">
						<?php if(!empty($image)): ?>
						<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
						<?php else: ?>
							<?php if(is_admin): ?>
								<div class="admin-image-placeholder"></div>
							<?php endif; ?>
						<?php endif; ?>
					</div>					
					<div class="inner-blocks entry-content">
						<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />
					</div>
				</div>
			</div>
		</div>
	</div>			
</div>
