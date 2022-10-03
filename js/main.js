var addClassHeader = $('.header-nav')

$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        addClassHeader.addClass('fixNav');
    } else {
        addClassHeader.removeClass('fixNav');
    }
});

$('.construction-list').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  Infinity: false,
  rows: 2,
});

$('.change').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  Infinity: true,
  rows: 6,
});

AOS.init({
    duration: 600,
});