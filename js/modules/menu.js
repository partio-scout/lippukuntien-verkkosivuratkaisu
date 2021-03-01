const $ = window.jQuery;

$(document).ready(function() {

    $('.hamburger').on('click', function(e) {
        $(this).toggleClass('is-active');
        $('.site-header-menu').toggleClass('open');

        if( $(this).hasClass('is-active') ) {
            $(this).attr('aria-label', aria_close_menu); 
        } else {
            $(this).attr('aria-label', aria_open_menu); 
        }
    });

    $('.current-menu-ancestor').each(function(e) {
        $(this).addClass('open'); 
    });

    $('.sub-menu-toggle').on('click', function(e) {
        e.stopPropagation();
        $(this).parent('.menu-item').toggleClass('open'); 

        if( $(this).parent('.menu-item').hasClass('open') ) {
            $(this).attr('aria-label', aria_close_submenu); 
        } else {
            $(this).attr('aria-label', aria_open_submenu); 
        }
    });

});
