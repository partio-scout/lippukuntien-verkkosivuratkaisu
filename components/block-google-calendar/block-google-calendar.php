<?php
/**
 * Component: Google kalenteri
 * Description: Google kalenteri
 * InnerBlocks: false
 * InnerBlocksMode: preview
 * Keywords: 
 * @version 1.0
 */

$embed_code = get_field('embed_code');
$embed_code_sanitized = '';

if(!empty($embed_code)) {
	$embed_code_sanitized = strip_tags($embed_code, '<iframe>');

	$embed_code_sanitized = str_replace("src=\"", "data-src=\"", $embed_code_sanitized);
    $embed_code_sanitized = str_replace("<iframe", "<iframe data-name=\"third_party\"", $embed_code_sanitized);
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

<div class="block-google-calendar full-width id-block admin<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">
	<div class="container-lg">
		<div class="row">
			<div class="col d-flex justify-content-center">
				<?php echo $embed_code_sanitized; ?>
			</div>
		</div>
	</div>
</div>
