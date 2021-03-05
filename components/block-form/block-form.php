<?php
/**
 * Component: Lomake
 * Description: Lomake
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

$form = get_field('gravity_forms');
?>
<div class="block-form full-width id-block">
	<div class="container-lg">
		<div class="row">
			<div class="col col-12 col-lg-6">
				<div class="inner-blocks entry-content">
					<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />
				</div>
			</div>
			<div class="col col-12 col-lg-6">
				<?php echo do_shortcode('[gravityform id="' . $form . '" title="false" description="false" ajax="true"]') ?>
			</div>
		</div>
	</div>	
</div>
