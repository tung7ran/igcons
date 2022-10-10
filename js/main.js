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

$('.reason-item-slide').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  Infinity: false,
  arrows: false,
});

$('.ig-proj-list ').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: false,
  Infinity: false,
  rows: 3,
  arrows: false,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        rows: 3,
      },
    }
  ]
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


$('.homeBanner').slick({
  slidesToShow: 1,
  arrows: false,
  fade: true,
  asNavFor: '.homeBanner-smImage'
});
$('.homeBanner-smImage').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.homeBanner',
  centerMode: true,
  Infinity: true,
  arrows: true,
  focusOnSelect: true,
});


$('.evaluate-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: false,
  Infinity: false,
  prevArrow: '<div class="manualContent-post-list-items-item-content-button arrow-left"><div class="manualContent-post-list-items-item-content-button-circle"><i class="ti-angle-right"></i><svg viewBox="0 0 36 50" class="circular-chart"><path class="circle-bg" stroke-dasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path><path class="circle" stroke-dasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path></svg></div></div>',
  nextArrow: '<div class="manualContent-post-list-items-item-content-button arrow-right"><div class="manualContent-post-list-items-item-content-button-circle"><i class="ti-angle-left"></i><svg viewBox="0 0 36 50" class="circular-chart"><path class="circle-bg" stroke-dasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path><path class="circle" stroke-dasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path></svg></div></div>',
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    }
  ]
});

$('.new-slide').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  Infinity: false,
  prevArrow: '<div class="manualContent-post-list-items-item-content-button arrow-left"><div class="manualContent-post-list-items-item-content-button-circle"><i class="ti-angle-right"></i><svg viewBox="0 0 36 50" class="circular-chart"><path class="circle-bg" stroke-dasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path><path class="circle" stroke-dasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path></svg></div></div>',
  nextArrow: '<div class="manualContent-post-list-items-item-content-button arrow-right"><div class="manualContent-post-list-items-item-content-button-circle"><i class="ti-angle-left"></i><svg viewBox="0 0 36 50" class="circular-chart"><path class="circle-bg" stroke-dasharray="72, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path><path class="circle" stroke-dasharray="50, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"></path></svg></div></div>',
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false
      },
    }
  ]
});

$('.swiper-wrapper').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  Infinity: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 426,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        rows: 1,
      },
    }
  ]
});

$('.priceList-list').slick({
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        
      },
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      },
    }
  ]
});

var scrollToTop = $('#scrollToTop');

$(window).scroll(function() {
  if ($(window).scrollTop() > 200) {
    scrollToTop.addClass('show');
  } else {
    scrollToTop.removeClass('show');
  }
});

scrollToTop.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '200');
});

const ResSearch = document.querySelector('.res-search'),
      resButton = document.querySelector('.res-search-button'),
      resInput = document.querySelector('.res-search-input');

      resButton.addEventListener('click', () => {
    ResSearch.classList.toggle('active');
    resInput.focus();
})

function openSlide(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function openSlideSecond(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tablinkSecond-item");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinkSecond");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

function consProcess(consProcessName) {
  var i;
  var x = document.getElementsByClassName("box-desc-procedure");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(consProcessName).style.display = "block";  

}


