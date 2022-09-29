var addClassHeader = $('.header-nav')

$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        addClassHeader.addClass('fixNav');
    } else {
        addClassHeader.removeClass('fixNav');
    }
});
