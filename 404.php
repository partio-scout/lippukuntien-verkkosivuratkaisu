<?php get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main container" role="main">
        <div class="row content-row">
            <div class="col-12 col-lg-9 page-content">
                <section class="error-404 not-found">
                    <header class="page-header">
                        <h1 class="page-title">404 - <?php _e( 'Sivua ei löytynyt', 'ID' ); ?></h1>
                    </header><!-- .page-header -->
                    <div class="page-content">
                        <p><?php _e( 'Hakemaasi sisältöä ei löytynyt. Kokeile hakua!', 'ID' ); ?></p>
                    </div><!-- .page-content -->
                </section><!-- .error-404 -->
            </div>
        </div>
    </main><!-- .site-main -->
</div><!-- .content-area -->

<?php get_sidebar(); ?>
<?php get_footer(); ?>
