        </div><!-- .site-content -->

        <footer class="site-footer" role="contentinfo">
          <div class="footer-top">
            <div class="container-lg">
              <div class="row">
                <div class="col-12"><div class="border-top"></div></div>
                <div class="col-12 col-md-6 col-lg-3 footer-col footer-contact-col"><?php get_template_part('template-parts/partial', 'footer-brand'); ?></div>
                <div class="col-12 col-md-6 col-lg-6 footer-col footer-nav-col"><?php get_template_part('template-parts/partial', 'footer-menu'); ?></div>
                <div class="col-12 col-md-6 col-lg-3 footer-col footer-some"><?php get_template_part('template-parts/partial', 'footer-some'); ?></div>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="container-lg">
              <div class="row">
                <div class="col">
                  <div class="flex">
                    <div>
                      <?php get_template_part('template-parts/partial', 'partio-logo'); ?>
                    </div>
                    <div class="copyright">&copy; <?php echo date('Y') . ' ' . _x('Suomen partiolaiset Ry', 'copyright', 'ID'); ?></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer><!-- .site-footer -->

	</div><!-- .site-inner -->
</div><!-- .site#page -->
<?php get_template_part('template-parts/block', 'cookie-notification'); ?>
<?php wp_footer(); ?>
</body>
</html>