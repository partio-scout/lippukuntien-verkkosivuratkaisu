import 'slick-carousel';

const $ = window.jQuery;

$(document).ready(function() {
    $('.block-hero-carousel.multiple-carousel-items').slick({
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, 
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><span class="screen-reader-text">Edellinen</span></button>',
        nextArrow: '<button type="button" class="slick-next"><span class="screen-reader-text">Seuraava</span></button>'
    });
});
