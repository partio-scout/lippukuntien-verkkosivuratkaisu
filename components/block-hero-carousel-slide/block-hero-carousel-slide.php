<?php
/**
 * Component: Hero-karuselli, dia
 * Description: Hero-karuselli, dia
 * InnerBlocks: true
 * InnerBlocksMode: preview
 * Keywords: 
 * @version 1.0
 */

$allowed_blocks = array(
    'core/paragraph',
    'core/heading',
    'core/buttons',
);

$template = array(
	array('core/heading', array()),
    array('core/paragraph', array()),
	array('core/buttons', array(), array(
		array('core/button', array()),
	)),
);

$image = get_field('image');
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

<div class="block-hero-carousel-slide full-width id-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">
	<div class="flex">		
		<div class="img-wrap">	
			<div class="image">
				<?php if(!empty($image)): ?>
					<img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
				<?php else: ?>
					<?php if(is_admin()): ?>
						<div class="admin-image-placeholder"></div>
					<?php endif; ?>
				<?php endif; ?>
			</div>			
		</div>		

		<div class="content-wrap">
			<div class="content-shift">
				<div class="content-align">
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
	</div>
</div>