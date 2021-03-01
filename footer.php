        </div><!-- .site-content -->

        <footer class="site-footer" role="contentinfo">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4 footer-col footer-contact-col"><?php get_template_part('template-parts/partial', 'footer-contact'); ?></div>
              <div class="col-12 col-md-6 col-lg-6 footer-col footer-nav-col"><?php get_template_part('template-parts/partial', 'footer-menu'); ?></div>
              <div class="col-12 col-md-6 col-lg-2 footer-col footer-newsletter-some"><?php get_template_part('template-parts/partial', 'footer-newsletter-some'); ?></div>
            </div>
          </div>
        </footer><!-- .site-footer -->

	</div><!-- .site-inner -->
</div><!-- .site#page -->
<?php get_template_part('template-parts/block', 'cookie-notification'); ?>
<?php wp_footer(); ?>
</body>
</html>