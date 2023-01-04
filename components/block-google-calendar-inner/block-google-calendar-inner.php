<?php
/**
 * Component: Google kalenteri, sisältöalue
 * Description: Google kalenteri, sisältöalue
 * InnerBlocks: false
 * InnerBlocksMode: preview
 * Keywords: 
 * Parent: ["acf/block-content", "acf/block-article-content", "block/content-with-sidebar"]
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

<div class="block-google-calendar-inner id-inner-block admin<?php if(isset($block['className'])) echo ' ' . $block['className']; ?>">
	<?php 
	if(is_admin()) {
		echo '<div class="admin-message">' . __('Tässä näytetään Google kalenteri', 'ID_admin') . '</div>'; 
	} else {
		echo $embed_code_sanitized; 
	}
	?>
</div>
