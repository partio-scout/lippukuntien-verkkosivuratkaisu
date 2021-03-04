<?php
/**
 * Component: Sisältöalue sivupalkilla
 * Description: Sisältöalue sivupalkilla
 * InnerBlocks: true
 * InnerBlocksMode: preview
 * Keywords: 
 * @version 1.0
 */

$allowed_blocks = array_merge(ID_allowed_inner_blocks(), array(
	'acf/block-map'
));

$template = array(
	array('core/heading', array(
		'level' => 1,
	)),
    array('core/paragraph', array()),
);

$hide_figure = get_field('hide_figure');
?>
<div class="block-content-with-sidebar full-width id-block">
	<div class="container-lg">
		<div class="row">
			<div class="col d-none d-lg-block col-lg-4 col-xxl-3">
				<?php get_template_part('template-parts/partial' , 'sidebar'); ?>
			</div>
			<div class="col col-12 col-lg-8 col-xxl-7 offset-xxl-1">	
				<div class="inner-blocks entry-content">
					<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />
				</div>
			</div>
		</div>
	</div>	
	<?php if(!$hide_figure): ?>
		<svg class="figure" xmlns="http://www.w3.org/2000/svg" width="107" height="47.043" viewBox="0 0 107 47.043">
		    <g>
		        <path d="M29.916 6.541L23.349 0l-8.39 8.417L6.541 0 0 6.541l8.39 8.417L0 23.375l6.541 6.541 8.417-8.39 8.39 8.39 6.568-6.541-8.416-8.417z" transform="rotate(-90 23.522 23.521) translate(17.127)"/>
		        <path d="M15.253 11.446A24.159 24.159 0 0 1 9.034 0L0 2.064a33.488 33.488 0 0 0 8.632 15.87l.08.08s.617.617 1.474 1.662l7.238-5.79c-1.099-1.341-1.93-2.198-2.171-2.44z" transform="rotate(-90 23.522 23.521) translate(.429 60.519)"/>
		        <path d="M16.218 6.648L9.758 0A33.429 33.429 0 0 0 0 18.738l9.141 1.474a23.953 23.953 0 0 1 7.077-13.564z" transform="rotate(-90 23.522 23.521) translate(0 30.828)"/>
		        <path d="M.161 3.163A21.712 21.712 0 0 1 1.5 10.481 19.441 19.441 0 0 1 0 17.907l8.578 3.538a28.792 28.792 0 0 0 2.2-10.964A30.739 30.739 0 0 0 8.873 0z" transform="rotate(-90 23.522 23.521) translate(15.285 85.555)"/>
		    </g>
		</svg>
	<?php endif; ?>
</div>
