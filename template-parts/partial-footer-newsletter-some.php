<?php
//Social icons start
$social_media = get_field('social_media', 'option');

if(!empty($social_media)):
?>
<div class="social-icons">
    <?php
    foreach ($social_media as $key => $value):
    if(!empty($value)):
    ?>
    <a href="<?php echo $value; ?>" class="social-icon <?php echo $key; ?>" aria-label="<?php echo $key; ?>"></a>
    <?php
    endif;
    endforeach;
    ?>
</div>
<?php 
endif;
//Social icons end
?>