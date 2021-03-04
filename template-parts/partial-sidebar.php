<ul class="sidebar-menu">
<?php
$pages = get_posts(array(
	'post_type' => 'page',
	'posts_per_page' => -1,
    'meta_query' => array(
        array(
            'key' => 'hide_from_sidebar', 
            'value' => true, 
            'compare' => 'LIKE'
        )
    )
));

$excludes = '';
foreach ($pages as $page) {
	if(!empty($excludes)) {
		$excludes .= ', ' . json_encode($page->ID);
	} else {
		$excludes .= json_encode($page->ID);
	}
}

$args = array(
	'post_type' 	=> 'page',
	'title_li'		=> null,
	'walker'	 	=> new ID_menu_walker_page(),
	'exclude'		=> $excludes
);

wp_list_pages($args);
?>
</ul>