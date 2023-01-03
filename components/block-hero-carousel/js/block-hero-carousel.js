var $ = window.jQuery;

$(document).ready(function() {
    $('.block-hero-carousel').each(function(index) {
        let hero = $(this)

        $(this).find('.slides').slick({
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            appendDots: $(this).find('.controls .dots'),
            appendArrows: $(this).find('.controls'),
            autoplay: true,
            autoplaySpeed: 8000,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: false
        });
    });
})