<div class="header-mobile">
	<div class="header-helper">
		<div class="container-lg">
			<div class="flex">
				<?php $group_name = get_field('scouts_group_name', 'option'); ?>
				<p><?php echo $group_name; ?></p>
			</div>
		</div>
	</div>

	<div class="site-header-main">
		<div class="container-lg">
			<div class="flex">
				<div class="site-branding">
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
				</div><!-- .site-branding -->

				<button class="open-menu" aria-label="<?php _e('Avaa päävalikko', 'ID'); ?>"><span></span></button>
			</div>
		</div>
	</div>

	<div class="menu-overlay">
		<div id="site-header-menu" class="site-header-menu">
			<nav id="site-navigation" class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Päävalikko', 'ID' ); ?>">
				<?php
				wp_nav_menu( array(
					'theme_location' => 'primary',
					'menu_class'     => 'primary-menu',
					'walker'         => new ID_menu_walker(),
				) );
				?>
				<?php
				wp_nav_menu( array(
					'theme_location' => 'secondary',
					'menu_class'     => 'secondary-menu',
					'walker'         => new ID_menu_walker(),
				) );
				?>
				<?php get_template_part('template-parts/partial', 'language-selector'); ?> 
				<?php
				$nav_cta = get_field('nav_call_to_action', 'option');
				if(!empty($nav_cta)):
					?>
					<a class="button nav-cta" href="<?php echo $nav_cta['url']; ?>" target="<?php echo $nav_cta['target']; ?>"><?php echo $nav_cta['title']; ?></a>
				<?php endif; ?>
			</nav><!-- .main-navigation -->
		</div><!-- .site-header-menu -->
		<button class="close-menu" aria-label="<?php _e('Sulje päävalikko', 'ID'); ?>"></button>
	</div>
</div>