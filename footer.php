        </div><!-- .site-content -->

        <footer class="site-footer" role="contentinfo">
          <div class="footer-top">
            <div class="container-lg">
              <div class="row">
                <div class="col-12"><div class="border-top"></div></div>
                <div class="col-12 col-lg-3 footer-col footer-brand-col"><?php get_template_part('template-parts/partial', 'footer-brand'); ?></div>
                <div class="col-12 col-lg-6 footer-col footer-nav-col"><?php get_template_part('template-parts/partial', 'footer-menu'); ?></div>
                <div class="col-12 col-lg-3 footer-col footer-some">
                  <?php if(!empty(get_field('footer_text_area', 'option'))): ?>
                    <div class="footer-text-area entry-content"><?= get_field('footer_text_area', 'option'); ?></div>
                  <?php endif; ?>
                  <?php get_template_part('template-parts/partial', 'footer-some'); ?>
                </div>
                <div class="col-12 footer-navigation-wrapper mobile footer-col">
                  <nav id="footer-navigation" class="footer-navigation" role="navigation" aria-label="<?php esc_attr_e('Apuvalikko', 'ID'); ?>">
                          <?php
                            wp_nav_menu(array(
                              'theme_location' => 'footer-extra',
                              'menu_class'     => 'footer-helper',
                            ));
                            ?> 
                  </nav><!-- .main-navigation -->
                  <button type="button" class="cookie-settings-toggle"><?php _e('Evästeasetukset', 'ID'); ?></button>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container-lg">
              <div class="row">
                <div class="col">
                  <div class="flex mobile-col">
                    <div class="flex">
                      <?php get_template_part('template-parts/partial', 'partio-logo'); ?>
                      <nav id="footer-navigation mobile" class="footer-navigation desktop" role="navigation" aria-label="<?php esc_attr_e('Apuvalikko', 'ID'); ?>">
                        <?php
                          wp_nav_menu(array(
                            'theme_location' => 'footer-extra',
                            'menu_class'     => 'footer-helper',
                          ));
                          ?>
                      </nav><!-- .main-navigation -->
                      <button type="button" class="cookie-settings-toggle"><?php _e('Evästeasetukset', 'ID'); ?></button>
                    </div>
                    <div class="copyright">&copy; <?php echo date('Y') . ' ' . _x('Suomen Partiolaiset – Finlands Scouter ry', 'copyright', 'ID'); ?></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer><!-- .site-footer -->

	</div><!-- .site-inner -->
</div><!-- .site#page -->
<?php //get_template_part('template-parts/block', 'cookie-notification'); ?>

<?php wp_footer(); ?>
</body>
</html>