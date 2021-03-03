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
<div class="block-social-feed full-width id-block">
	<div class="container-lg">
		<div class="row">
			<div class="col">
				<h2 class="block-title"><?php echo $title; ?></h2>
			</div>
		</div>
		<div class="row">
			<div class="col">
				Somefeed tähän
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
