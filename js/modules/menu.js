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
    let helperHeight;
    $(window).on('scroll', function(e) {       
        //console.log($(window).scrollTop())

        if($(window).width() >= 992) {
            helperHeight = $('.header-desktop .header-helper').outerHeight();
            //console.log(helperHeight)

            if($(window).scrollTop() >= helperHeight) {
                $('.site-header-main, .header-helper, .site-header').addClass('floating');
            } else {
                $('.site-header-main, .header-helper, .site-header').removeClass('floating');
            }
        } else {
            helperHeight = $('.header-mobile .header-helper').outerHeight();
            //console.log(helperHeight)

            if($(window).scrollTop() >= helperHeight) {
                $('.site-header-main, .header-helper, .site-header').addClass('floating');
            } else {
                $('.site-header-main, .header-helper, .site-header').removeClass('floating');
            }
        }
    });
});
