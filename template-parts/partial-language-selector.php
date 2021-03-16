<div class="language-selector">
	<?php
	if (function_exists('icl_get_languages')) {
		$langs = icl_get_languages('skip_missing=0&link_empty_to='.site_url(). '/?lang={%lang}');

		$active_lang = '';

		foreach ($langs as $key=>$lang) {
			if($lang['active']) {
				$active_lang = $lang;
				continue;
			}
		}

		if(count($langs) > 1) {
			echo '<div class="active-lang">' . $active_lang['native_name'] . '<button class="open-language-selector" aria-label="' . __('Avaa kielivalitsin', 'ID') . '"></button></div>';

			echo '<ul class="language">';
			foreach ($langs as $key=>$lang) {
				if($lang['active']){
					continue;
				}

				echo '<li><a href="'.$lang['url'].'" class="lang-select-btn' . $lang['code'] . '" aria-label="' . $lang['native_name'] . '">' . $lang['native_name'] . '</a></li>';
			}
			echo '</ul>';
		}
	}
	?>
</div>