<?php
/**
 * Component: Sisältönosto
 * Description: Sisältönosto
 * InnerBlocks: true
 * InnerBlocksMode: preview
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
	array('core/heading', array()),
    array('core/paragraph', array()),
);

$image = get_field('image');
$link = get_field('link');
$image_on_right = get_field('image_on_right');
$background_color = get_field('background_color');
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

<div class="block-image-beside-content full-width id-block<?php if($image_on_right) echo ' image-on-right'; ?><?php if($background_color) echo ' has-bg'; ?><?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">
	<div class="container-lg">
		<div class="row">
			<div class="col col-12 col-lg-6<?php if($image_on_right) echo ' order-lg-2'; ?>">
				<div class="align-image">
					<?php if(!empty($link)): ?>
					<a class="image-link" href="<?php echo $link['url']; ?>" target="<?php echo $link['target']; ?>">
						<div class="image" aria-label="<?php echo $link['title']; ?>"><?php if ($image) : ?><img src="<?php echo $image['sizes'] && $image['sizes']['nosto'] ? $image['sizes']['nosto'] : $image['url']; ?>"><?php endif; ?></div>
					</a>
					<?php else: ?>
					<div class="image" aria-label="<?php echo $image['alt']; ?>"><img src="<?php echo $image['url']; ?>"></div>
					<?php endif; ?>
				</div>
			</div>
			<div class="col col-12 col-lg-6">
				<div class="align-content">
					<div class="inner-blocks entry-content">
						<?php if ( $is_preview && !empty($block['data']['preview']) ): ?>
							<h1>Lorem ipsum dolor sit amet</h1>
							<p>Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.</p>						
						<?php else: ?>
							<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />
						<?php endif; ?>
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
