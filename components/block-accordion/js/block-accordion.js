var $ = window.jQuery;

$(document).ready(function() {
    $('.inner-block-accordion').each(function(index) {
        let accordion = $(this)

        accordion.find('.inner-block-accordion-header').click(function(e) {
            if($(this).attr('aria-expanded') === 'false') {
                $(this).attr('aria-expanded', 'true')
            } else {
                $(this).attr('aria-expanded', 'false')
            }
            
            accordion.toggleClass('open')
        })
    });
})