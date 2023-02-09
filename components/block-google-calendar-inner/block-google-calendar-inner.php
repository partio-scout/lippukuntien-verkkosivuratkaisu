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
 $showTitle = get_field('title') === false ? '&showTitle=0' : '';
 $showNavBtns = get_field('nav_btns') === false ? '&showNav=0' : '';
 $showDate = get_field('date') === false ? '&showDate=0' : '';
 $showPrintIcon = get_field('print_icon') === false ? '&showPrint=0' : '';
 $showTabs = get_field('tabs') === false ? '&showTabs=0' : '';
 $showCalendarList = get_field('calendar_list') === false ? '&showCalendars=0' : '';
 $showTimeZone = get_field('time_zone') === false ? '&showTz=0' : '';
 
 $embed_url = $embed_code . $showTitle . $showNavBtns . $showDate . $showPrintIcon . $showTabs .  $showCalendarList . $showTimeZone;
 
 $valid_host = false;
 $built_iframe = '';
 
 if(!empty($embed_code)) {
	 if(!is_wp_error(parse_url($embed_code))) {
		 $url_obj = parse_url($embed_code);
		 $valid_host = $url_obj['host'] === 'calendar.google.com' ? true : false;
		 $built_iframe = '<iframe data-src="' . $embed_url . '" data-name="third_party" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>';
	 }
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
		if(!empty($embed_code)) {
			echo $built_iframe; 
		}
	}
	?>
</div>
