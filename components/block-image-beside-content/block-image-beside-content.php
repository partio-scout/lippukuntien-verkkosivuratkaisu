<?php
/**
 * Component: Sisältönosto
 * Description: Sisältönosto
 * InnerBlocks: true
 * InnerBlocksPreview: false
 * Keywords: 
 * @version 1.0
 */

$allowed_blocks = array(
    'core/paragraph',
    'core/heading',
    'core/buttons',
    'core/list',
);

$template = array(
	array('core/heading', array(
        'placeholder' => 'Lorem ipsum dolor sit amet',
	)),
    array('core/paragraph', array(
        'placeholder' => 'Quisque ligula eros ullamcorper quis, lacinia quis facilisis sed sapien.',
	)),
);

$image = get_field('image');
$link = get_field('link');
$image_on_right = get_field('image_on_right');
$background_color = get_field('background_color');
?>
<div class="block-image-beside-content full-width id-block<?php if($image_on_right) echo ' image-on-right'; ?><?php if($background_color) echo ' has-bg'; ?>">
	<div class="container-lg">
		<div class="row">
			<div class="col col-12 col-lg-6<?php if($image_on_right) echo ' order-lg-2'; ?>">
				<div class="align-image">
					<?php if(!empty($link)): ?>
					<a class="image-link" href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">			
						<div class="image" style="background-image: url('<?php echo $image['url']; ?>');" aria-label="<?php echo $image['alt']; ?>"></div>
					</a>
					<?php else: ?>
					<div class="image" style="background-image: url('<?php echo $image['url']; ?>');" aria-label="<?php echo $image['alt']; ?>"></div>
					<?php endif; ?>
				</div>
			</div>
			<div class="col col-12 col-lg-6">
				<div class="align-content">
					<div class="inner-blocks entry-content">
						<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />
					</div>
					<?php if(!empty($link)): ?>
						<div>
							<a class="read-more button" href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>"><?php echo $link['title']; ?></a>
						</div>
					<?php endif; ?>
				</div>
			</div>
		</div>
	</div>	
</div>
