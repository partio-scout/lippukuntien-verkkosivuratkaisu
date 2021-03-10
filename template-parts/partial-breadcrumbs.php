<?php
$classes = '';

if(isset($args['class'])) {
	$classes = $args['class'];
}

if ( function_exists('yoast_breadcrumb') ) { ?>
	<div class="breadcrumbs-container container-lg<?php if(!empty($classes)) echo ' ' . $classes; ?>">
		<div class="row">
			<div class="col">
				<?php yoast_breadcrumb( '<div id="breadcrumbs">','</div>' ); ?>
			</div>
		</div>
	</div>
<?php } ?>