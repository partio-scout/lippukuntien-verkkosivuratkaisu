<?php
$show = get_field('cookies_show_notification', 'option');
if($show) {

    $notification = get_field('cookies_notification', 'option');
    $ok = get_field('cookies_accept_text', 'option');
    
?>
<aside id="cookie-notification" class="cookie-notification">
    <div class="container">
        <div class="row">
            <div class="col-12 col-md-8 col-lg-9 cookie-notification-content"><?php echo $notification ?></div>
            <div class="col-12 col-md-4 col-lg-3 cookie-notification-buttons">
                <button id="cookie-accept-button" class="button cookie-notification-accept"><?php echo $ok ?></button>
            </div>
        </div>
    </div>
</aside>

<?php } ?>