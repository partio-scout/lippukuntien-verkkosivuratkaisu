<?php
/**
 * Component: Otsikko ja tekstialue
 * Description: Lisää otsikko ja tekstialue
 * Keywords: 
 * @version 1.0
 */
$title = get_field('title');
$content = get_field('content');

?>
<div class="container-fluid block-content">

    <?php if ($title) { ?>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-8 col-md-6">
                <h2 class="title"><?php echo $title ?></h2>
            </div>
        </div>
    </div>
    <?php } ?>

    <?php if ($content) { ?>
    <div class="container">
        <div class="row">
            <div class="col">
                <?php echo $content; ?>
            </div>
        </div>
    </div>
    <?php } ?>

</div>
