<?php
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">

	<?php if ( have_comments() ) : ?>
		<h2 class="comments-title">
			<?php
				$comments_number = get_comments_number();
				if ( $comments_number === 1  ) {
					/* translators: %s: post title */
					printf( _e( 'Yksi kommentti aiheesta &ldquo;%s&rdquo;', 'ID' ), get_the_title() );
				} else {
					printf(
						/* translators: 1: number of comments, 2: post title */
						_n(
							'%1$s kommentti aiheesta &ldquo;%2$s&rdquo;',
							'%1$s kommenttia aiheesta &ldquo;%2$s&rdquo;',
							$comments_number,
							'ID'
						),
						number_format_i18n( $comments_number ),
						get_the_title()
					);
				}
			?>
		</h2>

		<?php the_comments_navigation(); ?>

		<ol class="comment-list">
			<?php
				wp_list_comments( array(
					'style'       => 'ol',
					'short_ping'  => true,
					'avatar_size' => 42,
				) );
			?>
		</ol><!-- .comment-list -->

		<?php the_comments_navigation(); ?>

	<?php endif; // Check for have_comments(). ?>

	<?php
		// If comments are closed and there are comments, let's leave a little note, shall we?
		if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) :
	?>
		<p class="no-comments"><?php _e( 'Kommentointi on suljettu.', 'ID' ); ?></p>
	<?php endif; ?>

	<?php
		comment_form( array(
			'title_reply_before' => '<h2 id="reply-title" class="comment-reply-title">',
			'title_reply_after'  => '</h2>',
		) );
	?>

</div><!-- .comments-area -->
