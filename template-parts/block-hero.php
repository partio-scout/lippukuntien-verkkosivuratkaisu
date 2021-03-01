<?php
$items = get_field('hero-carousel');
if ($items) :
$carousel_class = count($items) == 1 ? 'single-item-carousel' : 'multiple-carousel-items'; ?>
<section class="block-hero-carousel <?php echo $carousel_class; ?>">
    <?php foreach ( $items as $item ) :
    if ( @$item['image']['sizes']['karuselli'] ) {
        $img_url = $item['image']['sizes']['karuselli'];
    } else {
        $img_url = $item['image']['sizes']['large'];
    }
    if ( @$item['image-mobile']['sizes']['karuselli-mobile'] ) {
        $img_mobile_url = $item['image-mobile']['sizes']['karuselli-mobile'];
    } else {
        $img_mobile_url = $img_url;
    }

    if ( $item ) { 
    ?>
    <div class="block-hero" style="background-image:url('<?php echo $img_url; ?>');">
        <div class="mobile-image" style="background-image:url('<?php echo $img_mobile_url; ?>');">
            <?php if ( !empty($item['small_title']) || !empty($item['title']) || !empty($item['link']) ) { ?>
            <div class="container">
                <div class="row <?php if (!empty($item['text_place']) && $item['text_place'] == 'right') { echo ' justify-content-end'; } ?>">
                    <div class="col-10 col-md-6">
                        <div class="hero-content-center">
                            <?php if (!empty($item['title'])) { ?>
                            <h2 class="hero-title"><?php echo $item['title']; ?></h2>
                            <?php } ?>
                            <?php if (!empty($item['text'])) { ?>
                            <?php echo $item['text']; ?>
                            <?php } ?>
                            <?php if(!empty($item['link'])){ ?>
                            <a href="<?php echo $item['link']['url']; ?>" class="hero-btn button" target="<?php echo $item['link']['url']; ?>"><?php echo $item['link']['title']; ?></a>
                            <?php } ?>
                        </div>
                    </div>
                </div>
            </div>
            <?php } ?>
        </div>
    </div>
    <?php }
    endforeach; 
    ?>
</section>
<?php endif; ?>
