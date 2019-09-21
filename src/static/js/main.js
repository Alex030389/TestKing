'use strict';

$('.header__hamburger').click(function() {

  $('.header__m-search').closest('.header__wrap-m-box').fadeOut();

  if($('.header__m-box-nav').closest('.header__wrap-m-box').css('display') === 'none') {
    $('.header__m-box-nav').closest('.header__wrap-m-box').slideDown();
    $('body').css("overflow-y", "hidden");
  } else {
    $('.header__m-box-nav').closest('.header__wrap-m-box').slideUp();
    $('body').css("overflow-y", "auto");
  }

})

$('.js.search__btn').click(function() {
  $('.header__m-box-nav').closest('.header__wrap-m-box').fadeOut();

  if($('.header__m-search').closest('.header__wrap-m-box').css('display') === 'none') {
    $('.header__m-search').closest('.header__wrap-m-box').slideDown();
    $('body').css("overflow-y", "hidden");
  } else {
    $('.header__m-search').closest('.header__wrap-m-box').slideUp();
    $('body').css("overflow-y", "auto");
  }

})
