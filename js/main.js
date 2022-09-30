var addClassHeader = $('.header-nav')

$(window).scroll(function() {
    if ($(window).scrollTop() > 50) {
        addClassHeader.addClass('fixNav');
    } else {
        addClassHeader.removeClass('fixNav');
    }
});

function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("city");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
  }

  $('.construction-list').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    Infinity: false,
    rows: 2,
  });

AOS.init({
    duration: 600,
});