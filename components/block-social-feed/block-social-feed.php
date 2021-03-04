<?php
/**
 * Component: Sosiaalinen media
 * Description: Sosiaalinen media
 * InnerBlocks: false
 * InnerBlocksPreview: false
 * Keywords: 
 * @version 1.0
 */

$title = get_field('title');
$feed_id = get_field('juicer_feed_id', 'option');

if(empty($title)) {
	$title = _x('Somessa tapahtunutta', 'Sosiaalinen media otsikko', 'ID');
}
?>

<?php if(!empty($feed_id)): ?>
<div class="block-social-feed full-width id-block admin">
	<div class="container-lg">
		<div class="row">
			<div class="col">
				<h2 class="block-title"><?php echo $title; ?></h2>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<?php if(!is_admin()): ?>
				<script src="https://assets.juicer.io/embed.js" type="text/javascript"></script>
				<link href="https://assets.juicer.io/embed.css" media="all" rel="stylesheet" type="text/css" />
				<ul class="juicer-feed" data-feed-id="<?php echo $feed_id ?>" data-overlay="false" data-style="modern" data-after="custom_juicer()" data-gutter="48" data-per="6"></ul>
				<script>
					const $ = window.jQuery;

					function custom_juicer() {
						$('.block-social-feed .juicer-feed .feed-item').each(function(e) {
							if($(this).find('.j-image').length !== 0) {
								$(this).data('image', $(this).find('.j-image').data('image'));
								$(this).data('image-link', $(this).find('.j-image').attr('href'));
							}

							if($(this).find('.j-text').length !== 0) {
								$(this).data('message', JSON.stringify($(this).find('.j-message').html()));
								$(this).data('socialmedia', $(this).find('.j-social').attr('aria-label'));
							}

							if($(this).find('.j-poster').length !== 0) {
								$(this).data('poster-thumb', $(this).find('.j-poster img').data('lazy'));
								$(this).data('poster-link', $(this).find('.j-poster a').attr('href'));
								$(this).data('poster-name', JSON.stringify($(this).find('.j-poster h3').html()));
								$(this).data('date', JSON.stringify($(this).find('.j-date').html()));
							}

							let juicer_item = '<div class="card">';

							if($(this).data('image').length !== 0) {
								juicer_item += '<a target="_blank" rel="no-referer" href="' + $(this).data('image-link') + '"><img class="thumbnail" src="' + $(this).data('image') + '"></a>';
							} else {
								juicer_item += '<div class="no-image"></div>';
							}

							juicer_item += '<div class="content">';
							juicer_item += '<div class="excerpt">' + JSON.parse($(this).data('message')) + '</div>';
							juicer_item += '<div class="user">';
							juicer_item += '<img class="poster-thumb" src="' + $(this).data('poster-thumb') + '">';
							juicer_item += '<div class="user-meta">';
							juicer_item += '<div><a target="_blank" rel="no-referer" href="' + $(this).data('poster-link') + '" class="username">' + JSON.parse($(this).data('poster-name')) + '</a></div>';
							juicer_item += '<p class="time">' + JSON.parse($(this).data('date')) + '</p>';
							juicer_item += '</div>'; //user-meta
							juicer_item += '</div>'; //user
							juicer_item += '</div>'; //content
							juicer_item += '<div class="socialmedia">' + $(this).data('socialmedia') + '</div>';
							juicer_item += '</div>'; //card


							//Replace card html
							$(this).html(juicer_item);
						});

						//Change button language						
						$('.j-paginate').text("<?php _ex('Näytä lisää', 'Juicer.io', 'ID'); ?>");


						$('.block-social-feed .j-paginate').on('click', function(e) {
							$(this).closest('.juicer-feed').addClass('more');
						});
					}
				</script>
				<?php else: ?>
					<?php _e('Tässä näytetään sosiaalisen median syöte', 'ID_admin'); ?>
				<?php endif; ?>
			</div>
		</div>
	</div>	
</div>
<?php else: ?>
	<?php if(is_admin()): ?>
		<div class="block-social-feed full-width id-block admin">
			<div class="container-lg">
				<div class="row">
					<div class="col">
						<h2 class="block-title"><?php echo $title; ?></h2>
					</div>
				</div>
				<div class="row">
					<div class="col">
						<?php _e('Aseta Juicer syötteen id teeman asetuksiin', 'ID_admin'); ?>
					</div>
				</div>
			</div>	
		</div>
	<?php endif; ?>
<?php endif; ?>
