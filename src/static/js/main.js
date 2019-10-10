'use strict';

let body = document.querySelector('body');

$(window).resize(function () {

  if ($('.header__search').css('display') !== 'none') {
    $('.header__m-search').closest('.header__wrap-m-box').hide();
    if ($('.header__m-box-nav').closest('.header__wrap-m-box').css('display') === 'none') {
      body.style.overflowY = 'auto';
    }
  }

  if ($('.header__box-nav').css('display') !== 'none') {
    $('.header__m-box-nav').closest('.header__wrap-m-box').hide();
    body.style.overflowY = 'auto';
  }

})

// =============================================== smooth scroll
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

// =============================================== select link
const searchCertificSelect = document.querySelector('.search-certifications__select select');
if(searchCertificSelect) {
  searchCertificSelect.addEventListener('change', function() {
    if(this.value) {
      window.location.href = this.value;
    }
  })
}

// =============================================== header nav
$('.js.header__hamburger').click(function () {

  $('.header__m-search').closest('.header__wrap-m-box').hide();

  if ($('.header__m-box-nav').closest('.header__wrap-m-box').css('display') === 'none') {
    $('.header__m-box-nav').closest('.header__wrap-m-box').slideDown();
    body.style.overflowY = 'hidden';
  } else {
    $('.header__m-box-nav').closest('.header__wrap-m-box').slideUp();
    body.style.overflowY = 'auto';
  }
})

$('.js.search__btn').click(function () {
  $('.header__m-box-nav').closest('.header__wrap-m-box').hide();

  if ($('.header__m-search').closest('.header__wrap-m-box').css('display') === 'none') {
    $('.header__m-search').closest('.header__wrap-m-box').slideDown();
    $('body').css("overflow-y", "hidden");
  } else {
    $('.header__m-search').closest('.header__wrap-m-box').slideUp();
    body.style.overflowY = 'auto';
  }
})


// =================================================== ddmenu
let timerCloseDDmenu;

$('.main-nav__link.dropdown').mouseenter(function () {
  $('.main-nav__wrap-ddmenu').slideDown(200);
})

$('.main-nav__link.dropdown').mouseleave(function () {
  timerCloseDDmenu = setTimeout(closeDDmenu, 150);
})

$('.main-nav__wrap-ddmenu').mouseenter(function () {
  clearTimeout(timerCloseDDmenu);
})

$('.main-nav__wrap-ddmenu').mouseleave(function () {
  closeDDmenu();
})


function closeDDmenu() {
  $('.main-nav__wrap-ddmenu').slideUp(200);
}


// ======================================================= tab
$('.tab__btn').on('click', function () {
  let id = $('.tab__btn').index(this);

  $('.tab__btn').removeClass('active');
  $(this).addClass('active');

  $('.tab-content__item').hide();
  $('.tab-content__item').eq(id).fadeIn();
  // $('.tab-content__item').removeClass('active');
  // $('.tab-content__item').eq(id).addClass('active');
})

// ======================================================== changes the price
const exam1Checkbox = document.querySelector('#exam1__checkbox');
const exam1PlusElement = document.querySelector('.exam1__box-input-label .ex-pr');
const exam1OldPrice = document.querySelector('.exam-add-cart__old-price .ex-pr');
const exam1NewPrice = document.querySelector('.exam-add-cart__new-price .ex-pr');

if (exam1Checkbox) {
  exam1Checkbox.addEventListener('click', function () {
    if (this.checked) {
      exam1OldPrice.textContent = (+exam1OldPrice.textContent + +exam1PlusElement.textContent).toFixed(2);
      exam1NewPrice.textContent = (+exam1NewPrice.textContent + +exam1PlusElement.textContent).toFixed(2);
    } else {
      exam1OldPrice.textContent = (+exam1OldPrice.textContent - +exam1PlusElement.textContent).toFixed(2);
      exam1NewPrice.textContent = (+exam1NewPrice.textContent - +exam1PlusElement.textContent).toFixed(2);
    }
  })
}

// ======================================================== add cart
$('.exam-add-cart__btn').on('click', function () {
  $('.exam-add-cart__wrap-response').fadeIn();
})

// ======================================================== add cart purchase
$('.purchase__add-to-cart').on('click', function () {
  $(this).closest('.purchase__box-add-to-cart').find('.purchase__wrap-response').fadeIn();
  $(this).hide();
})


// ========================================================== slick
$('.slider__arrow._prev').on('click', function () {
  $('.slick-prev').click();
})

$('.slider__arrow._next').on('click', function () {
  $('.slick-next').click();
})

$('.slider__list').slick({
  slidesToShow: 1,
  centerMode: true,
  variableWidth: true,
  focusOnSelect: true,
  dots: true,
  appendDots: $('.slider__dots'),
  responsive: [{
    breakpoint: 576,
    settings: {
      variableWidth: false,
    }
  }]
});

// =============================================================== slider-v2
$('.slider-v2__list').slick({
  slidesToShow: 4,
  infinite: false,
});

checkDisabledArrow();

function checkDisabledArrow() {
  if($('.slick-prev').hasClass('slick-disabled')) {
    $('.slider-v2__btn.__prev').css({'opacity': '0', 'cursor': 'default'});
  } else {
    $('.slider-v2__btn.__prev').css({'opacity': '1', 'cursor': 'pointer'});
  }

  if($('.slick-next').hasClass('slick-disabled')) {
    $('.slider-v2__btn.__next').css({'opacity': '0', 'cursor': 'default'});
  } else {
    $('.slider-v2__btn.__next').css({'opacity': '1', 'cursor': 'pointer'});
  }
}

$('.slider-v2__btn.__prev').on('click', function () {
  $('.slick-prev').click();
  checkDisabledArrow();
})

$('.slider-v2__btn.__next').on('click', function () {
  $('.slick-next').click();
  checkDisabledArrow();
})

// ================================================================= tab-exam2__more
$('.tab-exam2__more').on('click', function () {
  if ($(this).text() == 'More...') {
    $('.tab-exam2__desc-p').fadeIn();
    $(this).text('Close');
  } else {
    $('.tab-exam2__desc-p').hide();
    $(this).text('More...');
  }
})

// =================================================================== lightbox
if(document.querySelector('.slider-v2__item')) {
  $('.slider-v2__item').simpleLightbox();
}

// ============================================================ footer
(function () {
  var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  var stickFooter = function () {
    var FOOTER = document.querySelector('footer');
    var MAIN = document.querySelector('main');
    var BODY = document.querySelector('body');
    var footerHeight = FOOTER.offsetHeight;
    BODY.style.position = 'relative';
    MAIN.style.marginBottom = footerHeight + 'px';
    FOOTER.style.position = 'absolute';
    FOOTER.style.bottom = '0';
    FOOTER.style.left = '0';
    FOOTER.style.width = '100%';
  };

  if (isIE11) {
    stickFooter();
    window.addEventListener('resize', stickFooter);
  }
})();
