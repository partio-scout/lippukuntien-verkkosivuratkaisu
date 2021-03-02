<?php
$logo = get_field('site_logo', 'option');
$logo_text = get_field('site_logo_text', 'option');
?>

<?php if(!empty($logo) || !empty($logo_text)): ?>
<a href="<?php echo get_home_url(); ?>">
	<?php if(!empty($logo)): ?>
	<span class="sr-only"><?php _ex('Etusivulle', 'Site logo link', 'ID'); ?> - </span><img src="<?php echo $logo['url']; ?>" alt="<?php echo $logo['alt']; ?>">
	<?php else: ?>
	<p>
		<span class="sr-only"><?php _ex('Etusivulle', 'Site logo link', 'ID'); ?> - </span>
		<?php echo $logo_text; ?>
	</p>
	<?php endif; ?>
</a>
<?php endif; ?>