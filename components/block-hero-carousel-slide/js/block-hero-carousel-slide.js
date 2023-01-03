var $ = window.jQuery;

$(document).ready(function() {
    $('.block-hero-carousel').each(function(index) {
        let hero = $(this)

        $(this).find('.slides').slick();
    });
})