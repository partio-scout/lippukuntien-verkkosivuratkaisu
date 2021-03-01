<?php ID_the_custom_logo(); ?>

<?php $footer_content = get_field('footer_contact', 'option');
if ($footer_content) {
  echo '<div class="footer-contact">' . $footer_content . '</div>';
}
?>
