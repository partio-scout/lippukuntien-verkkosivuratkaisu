const $ = window.jQuery;
$('.load-more').click(function(){

	var button = $(this),
	data = {
		'action': 'loadmore',
		'query': ID_load_more.posts, // that's how we get params from wp_localize_script() function
		'page' : ID_load_more.current_page
	};

	$.ajax({ // you can also use $.post here
		url : ajaxurl, // AJAX handler
		data : data,
		type : 'POST',
		beforeSend : function ( xhr ) {
		},
		success : function( data ){
			if( data ) { 
				$('.content-row').append(data);
				ID_load_more.current_page++;

				if ( ID_load_more.current_page == ID_load_more.max_page ) 
					button.remove(); // if last page, remove the button

			} else {
				button.remove(); // if no data, remove the button as well
			}
		}
	});
});
