AOS.init()
$(window).scroll(function(e) {
    $el = $('.header01');
    $el.toggleClass('header_bar', $(this).scrollTop() > 0);
});