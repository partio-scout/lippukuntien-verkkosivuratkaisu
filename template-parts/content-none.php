<section class="no-results not-found">
	<header class="page-header">
		<h1 class="page-title"><?php _e( 'Tyhjää täynnä', 'ID' ); ?></h1>
	</header><!-- .page-header -->

	<div class="page-content">
		<?php if ( is_search() ) : ?>

			<p><?php _e( 'Valitettavasti hakusanalla ei löytynyt tuloksia. Kokeile uudelleen eri hakusanalla.', 'ID' ); ?></p>

		<?php else : ?>

			<p><?php _e( 'Hakemaasi sisältöä ei löytynyt. Kokeile hakua!', 'ID' ); ?></p>

		<?php endif; ?>
	</div><!-- .page-content -->
</section><!-- .no-results -->
