<?php if (has_nav_menu('footer')) : ?>
<nav id="footer-navigation" class="footer-navigation" role="navigation" aria-label="<?php esc_attr_e('Apuvalikko', 'ID'); ?>">
  <?php
    wp_nav_menu(array(
      'theme_location' => 'footer',
      'menu_class'     => 'footer-menu menu',
    ));
    ?>
</nav><!-- .main-navigation -->
<?php endif; ?>