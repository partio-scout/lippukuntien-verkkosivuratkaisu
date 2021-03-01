<?php
/**
 * Component: Kuva- ja tekstialue
 * Description: Lisää kuva ja tekstialue
 * Keywords: 
 * @version 1.0
 */
$title = get_field('title');
$content = get_field('content');
$image = get_field('image');

?>
<div class="block-image-and-text">
    <div class="row">
        <div class="col-6">
            <?php if ($image) { ?>
            <img src="<?php echo $image['sizes']['large']; ?>">

            <?php } ?>
        </div>

        <div class="col-6">
            <?php if ($title) { ?>
            <h2 class="title"><?php echo $title ?></h2>
            <?php } ?>

            <?php if ($content) { ?>
            <?php echo $content; ?>
            <?php } ?>
        </div>
    </div>
</div>
