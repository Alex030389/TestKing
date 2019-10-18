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
$('a[href*="#"]').click(function () {
  $page.animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 400);
  return false;
});

// =============================================== select link
const searchCertificSelect = document.querySelector('.search-certifications__select select');
if (searchCertificSelect) {
  searchCertificSelect.addEventListener('change', function () {
    if (this.value) {
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

// === user-nav__sub-n _acc
let timerCloseUserSubNav;

$('.user-nav__link._left').mouseenter(function () {
  $('.user-nav__sub-n._acc').slideDown(200);
})

$('.user-nav__link._left').mouseleave(function () {
  timerCloseUserSubNav = setTimeout(closeUserSubNav, 200);
})

$('.user-nav__sub-n._acc').mouseenter(function () {
  clearTimeout(timerCloseUserSubNav);
})

$('.user-nav__sub-n._acc').mouseleave(function () {
  closeUserSubNav();
})


function closeUserSubNav() {
  $('.user-nav__sub-n').slideUp(200);
}

// === user-nav__sub-n _reg
$('.user-nav__link._right').on('click', function() {

  if($('.user-nav__sub-n._reg').css('display') == 'none') {
    $('.user-nav__sub-n._reg').slideDown(200);
  } else {
    $('.user-nav__sub-n._reg').slideUp(200);
  }
})

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
  if ($('.slick-prev').hasClass('slick-disabled')) {
    $('.slider-v2__btn.__prev').css({
      'opacity': '0',
      'cursor': 'default'
    });
  } else {
    $('.slider-v2__btn.__prev').css({
      'opacity': '1',
      'cursor': 'pointer'
    });
  }

  if ($('.slick-next').hasClass('slick-disabled')) {
    $('.slider-v2__btn.__next').css({
      'opacity': '0',
      'cursor': 'default'
    });
  } else {
    $('.slider-v2__btn.__next').css({
      'opacity': '1',
      'cursor': 'pointer'
    });
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

// ================================================================ upgrade hide show
$('.ma-home__additional-btn.upgrade').on('click', function () {
  $(this).hide();
  $('.ma-home__additional-btn.hide').fadeIn();
  $('.ma-home__upgr').fadeIn();
})

$('.ma-home__additional-btn.hide').on('click', function () {
  $(this).hide();
  $('.ma-home__additional-btn.upgrade').fadeIn(200);
  $('.ma-home__upgr').hide();
})

// =============================================================== upgrade
const upgrInput = document.querySelectorAll('.ma-home__upgr-input');

if (upgrInput.length) {
  changePrice();
}


for (let i = 0; i < upgrInput.length; i++) {
  upgrInput[i].addEventListener('change', function () {
    changePrice();
  })
}

function changePrice() {
  const upgInputChecked = document.querySelectorAll('.ma-home__upgr-input:checked');
  const numChecked = upgInputChecked.length;
  const itemToSave = document.querySelector('.ma-home__upgr-save span');
  const promotionalDiscount = document.querySelector('.ma-home__upgr-remain-right span');
  const total = document.querySelector('.ma-home__upgr-total span');
  const newTotalProcent = document.querySelector('.ma-home__upgr-new-total span:first-child');
  const newTotal = document.querySelector('.ma-home__upgr-new-total span:last-child');

  const procent = 10 * numChecked;

  let totalAmount = 0;

  for (let i = 0; i < upgInputChecked.length; i++) {
    totalAmount += +upgInputChecked[i].getAttribute('data-price')
  }

  let a = totalAmount / 100 * procent;
  a = totalAmount - a;

  itemToSave.textContent = 10 + procent;
  promotionalDiscount.textContent = procent;
  newTotalProcent.textContent = procent;
  total.textContent = totalAmount.toFixed(2);
  newTotal.textContent = a.toFixed(2);
}


// =================================================================== lightbox
if (document.querySelector('.slider-v2__item')) {
  $('.slider-v2__item').simpleLightbox();
};

// ==================================================================== acc-nav
const accNavBtn = document.querySelectorAll('.acc-nav__item-2 button');
const maHome = document.querySelectorAll('.ma-home');

if (accNavBtn.length > 1) {
  for (let i = 0; i < accNavBtn.length; i++) {
    accNavBtn[i].addEventListener('click', function (e) {

      const accNavItemCurrent = document.querySelector('.acc-nav__item-2._current');
      accNavItemCurrent.classList.remove('_current');
      e.target.parentElement.classList.add('_current');

      if (+e.target.getAttribute('data-id') === 0) {
        maHome[0].classList.remove('_expired-prod');
        maHome[1].classList.add('_expired-prod');
      } else {
        maHome[1].classList.remove('_expired-prod');
        maHome[0].classList.add('_expired-prod');
      }

    });
  }
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
