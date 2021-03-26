AOS.init()
$(window).ready(function() {
    $('.loader01').hide();
})
$(window).scroll(function(e) {
    $el = $('.header01');
    $el.toggleClass('header_bar', $(this).scrollTop() > 0);
});