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


// ========================================================
