<?php
/**
 * Component: Tekstinosto
 * Description: Tekstinosto
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

$hide_figure = get_field('hide_figure');
$shape = get_field('content_shape', 'option');

if(empty($shape)) {
	$shape = 'path';
}
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

<div class="block-content full-width id-block<?php if(isset($block['className'])) echo ' ' . $block['className']; ?><?php if($hide_figure) echo ' no-figure'; ?>">
	<div class="container-lg">
		<div class="row justify-content-center">
			<div class="col col-12 col-md-10 col-xxl-6">			
				<div class="inner-blocks entry-content">
					<?php if ( $is_preview && !empty($block['data']['preview']) ): ?>
						<h2>Lorem ipsum dolor sit amet</h1>
						<p>Mauris sed libero. Suspendisse facilisis nulla in lacinia laoreet, lorem velit accumsan velit vel mattis libero nisl et sem.</p>						
					<?php else: ?>
						<InnerBlocks template="<?php echo esc_attr(wp_json_encode($template)); ?>" allowedBlocks="<?php echo esc_attr(wp_json_encode($allowed_blocks)); ?>" templateLock="false" />
					<?php endif; ?>			
				</div>
			</div>
		</div>
	</div>	
	<?php if(!$hide_figure): ?>
		<?php if($shape === 'path'): ?>
		<svg class="figure cross" xmlns="http://www.w3.org/2000/svg" width="107" height="47.043" viewBox="0 0 107 47.043">
		    <g>
		        <path d="M29.916 6.541L23.349 0l-8.39 8.417L6.541 0 0 6.541l8.39 8.417L0 23.375l6.541 6.541 8.417-8.39 8.39 8.39 6.568-6.541-8.416-8.417z" transform="rotate(-90 23.522 23.521) translate(17.127)"/>
		        <path d="M15.253 11.446A24.159 24.159 0 0 1 9.034 0L0 2.064a33.488 33.488 0 0 0 8.632 15.87l.08.08s.617.617 1.474 1.662l7.238-5.79c-1.099-1.341-1.93-2.198-2.171-2.44z" transform="rotate(-90 23.522 23.521) translate(.429 60.519)"/>
		        <path d="M16.218 6.648L9.758 0A33.429 33.429 0 0 0 0 18.738l9.141 1.474a23.953 23.953 0 0 1 7.077-13.564z" transform="rotate(-90 23.522 23.521) translate(0 30.828)"/>
		        <path d="M.161 3.163A21.712 21.712 0 0 1 1.5 10.481 19.441 19.441 0 0 1 0 17.907l8.578 3.538a28.792 28.792 0 0 0 2.2-10.964A30.739 30.739 0 0 0 8.873 0z" transform="rotate(-90 23.522 23.521) translate(15.285 85.555)"/>
		    </g>
		</svg>
		<?php elseif($shape === 'mountain'): ?>
			<svg class="figure mountain" xmlns="http://www.w3.org/2000/svg" width="107" height="45.956" viewBox="0 0 107 45.956">
				<path d="M168.122 240.378l5.678-5.678-25.585-25.516-16.362 16.362-27.115-27.046L66.8 236.438l5.678 5.655 32.283-32.283 34.67 34.647 5.678-5.655-7.6-7.6 10.73-10.73z" transform="translate(-66.8 -198.5)"/>
			</svg>
		<?php endif; ?>
	<?php endif; ?>
</div>
