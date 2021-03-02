const $ = window.jQuery;

$(document).ready(function() {

    $('.open-language-selector').on('click', function(e) {
        $(this).toggleClass('open');
        $('.language').toggleClass('open');
    });

    $('.open-menu').on('click', function(e) {
        $('.header-mobile .site-header-main').addClass('open');
        $('.header-mobile .menu-overlay').addClass('open');
        $('body').addClass('no-scrolling');
    });

    $('.close-menu').on('click', function(e) {
        $('.header-mobile .site-header-main').removeClass('open');
        $('.header-mobile .menu-overlay').removeClass('open');
        $('body').removeClass('no-scrolling');
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

    //Float only main menu area
    $(window).on('scroll', function(e) {
        if($(window).width() >= 992) {
            if($(window).scrollTop() >= 52) {
                $('.site-header-main').addClass('floating');
            } else {
                $('.site-header-main').removeClass('floating');
            }
        } else {
            if($(window).scrollTop() >= 44) {
                $('.site-header-main').addClass('floating');
            } else {
                $('.site-header-main').removeClass('floating');
            }
        }
    });
});
