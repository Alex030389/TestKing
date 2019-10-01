'use strict';

let body = document.querySelector('body');

$(window).resize(function() {

  if($('.header__search').css('display') !== 'none') {
    $('.header__m-search').closest('.header__wrap-m-box').hide();
    if($('.header__m-box-nav').closest('.header__wrap-m-box').css('display') === 'none') {
      body.style.overflowY = 'auto';
    }
  }

  if($('.header__box-nav').css('display') !== 'none') {
    $('.header__m-box-nav').closest('.header__wrap-m-box').hide();
    body.style.overflowY = 'auto';
  }

})

// =============================================== header nav
$('.js.header__hamburger').click(function() {

  $('.header__m-search').closest('.header__wrap-m-box').hide();

  if($('.header__m-box-nav').closest('.header__wrap-m-box').css('display') === 'none') {
    $('.header__m-box-nav').closest('.header__wrap-m-box').slideDown();
    body.style.overflowY = 'hidden';
  } else {
    $('.header__m-box-nav').closest('.header__wrap-m-box').slideUp();
    body.style.overflowY = 'auto';
  }
})

$('.js.search__btn').click(function() {
  $('.header__m-box-nav').closest('.header__wrap-m-box').hide();

  if($('.header__m-search').closest('.header__wrap-m-box').css('display') === 'none') {
    $('.header__m-search').closest('.header__wrap-m-box').slideDown();
    $('body').css("overflow-y", "hidden");
  } else {
    $('.header__m-search').closest('.header__wrap-m-box').slideUp();
    body.style.overflowY = 'auto';
  }
})


// =================================================== ddmenu
let timerCloseDDmenu;

$('.main-nav__link.dropdown').mouseenter(function() {
  $('.main-nav__wrap-ddmenu').slideDown(200);
})

$('.main-nav__link.dropdown').mouseleave(function() {
  timerCloseDDmenu = setTimeout(closeDDmenu, 150);
})

$('.main-nav__wrap-ddmenu').mouseenter(function() {
  clearTimeout(timerCloseDDmenu);
})

$('.main-nav__wrap-ddmenu').mouseleave(function() {
  closeDDmenu();
})


function closeDDmenu() {
  $('.main-nav__wrap-ddmenu').slideUp(200);
}


// ======================================================= tab
$('.tab__btn').on('click', function() {
  let id = $('.tab__btn').index(this);

  $('.tab__btn').removeClass('active');
  $(this).addClass('active');

  $('.tab-content__item').hide();
  $('.tab-content__item').eq(id).fadeIn();
})


// ======================================================== add cart
$('.exam-add-cart__btn').on('click', function() {
  $('.exam-add-cart__wrap-response').fadeIn();
})


// ========================================================== slick
$('.slider__arrow._prev').on('click', function() {
  $('.slick-prev').click();
})

$('.slider__arrow._next').on('click', function() {
  $('.slick-next').click();
})

$('.slider__list').slick({
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  focusOnSelect: true,
  dots: true,
  appendDots: $('.slider__dots'),
  responsive: [
    {
      breakpoint: 576,
      settings: {
        variableWidth: false,
      }
    }
  ]
});

// slider-v2

$('.slider-v2__list').slick({
  slidesToShow: 4,
  infinite: false,
});

$('.slider-v2__btn.__prev').on('click', function() {
  $('.slick-prev').click();
})

$('.slider-v2__btn.__next').on('click', function() {
  $('.slick-next').click();
})


/*REMOVE or comment below code to see behavior of infinite false setting below code handles removing of arrows*/
$('.slider-v2__list').on('afterChange', function(){
  console.log($('#slider').slick('slickCurrentSlide'));

//   var currentSlide = $('#slider').slick('slickCurrentSlide');
// if(currentSlide==0)
// {
//    $('.slick-prev').hide();
//    $('.slick-next').show();
// }
// else if(currentSlide==5)
// {
// $('.slick-next').hide();
// $('.slick-prev').show();
// }

// if(currentSlide>0 && currentSlide<5)
// {
//    $('.slick-prev').show();
//    $('.slick-next').show();
// }

// });

// $(document).ready(function(){
// var currentSlide = $('#slider').slick('slickCurrentSlide');
// if(currentSlide==0)
// {
//    $('.slick-prev').hide();
// }
// else if(currentSlide==5)
// {
// $('.slick-next').hide();
// }

});


// ================================================================= tab-exam2__more
$('.tab-exam2__more').on('click', function() {

  if($(this).text() == 'More...') {
    $('.tab-exam2__desc-p').fadeIn();
    $(this).text('Close');
  } else {
    $('.tab-exam2__desc-p').hide();
    $(this).text('More...');
  }
})
