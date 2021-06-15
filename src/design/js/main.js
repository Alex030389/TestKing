'use strict';

let body = document.querySelector('body');

$(window).resize(function () {

  if ($('.header__search').css('display') !== 'none') {
    $('.header__nav-overlay').hide();
    $('.header__wrap-m-box._search').removeClass('active');
    $('.header__wrap-m-box._search').hide();
    if ($('.header__m-box-nav').closest('.header__wrap-m-box').css('display') === 'none') {
      $('body').removeClass('no-scroll');
    }
  }

  if ($('.header__box-nav').css('display') !== 'none') {
    $('.header__nav-overlay').hide();
    $('.header__wrap-m-box._nav').removeClass('active');
    $('.js.header__hamburger').removeClass('close');
    $('.header__wrap-m-box._nav').hide();
    $('body').removeClass('no-scroll');
  }

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

  if ($('.header__wrap-m-box._search').css('display') === 'none') {
    $('.header__nav-overlay').hide();
  } else {
    $('.header__nav-overlay').show();
    $('.header__wrap-m-box._search').removeClass('active');
    setTimeout(function() {
      $('.header__wrap-m-box._search').hide();
    }, 300);
  }


  if ($('.header__wrap-m-box._nav').css('display') === 'none') {
    $('body').addClass('no-scroll');
    $('.js.header__hamburger').addClass('close');
    $('.header__wrap-m-box._nav').show();
    setTimeout(function() {
      $('.header__wrap-m-box._nav').addClass('active');
    }, 30);
  } else {
    $('body').removeClass('no-scroll');
    $('.js.header__hamburger').removeClass('close');
    $('.header__wrap-m-box._nav').removeClass('active');
    setTimeout(function() {
      $('.header__wrap-m-box._nav').hide();
    }, 300)
  }
});

$('.js.search__btn').click(function () {

  if ($('.header__wrap-m-box._nav').css('display') === 'none') {
    $('.header__nav-overlay').hide();
  } else {
    $('.header__nav-overlay').show();
    $('.header__wrap-m-box._nav').removeClass('active');
    setTimeout(function () {
      $('.js.header__hamburger').removeClass('close');
      $('.header__wrap-m-box._nav').hide();
    }, 300);
  }



  if ($('.header__wrap-m-box._search').css('display') === 'none') {
    $('body').addClass('no-scroll');
    $('.header__wrap-m-box._search').show();

    $('.header__wrap-m-box .search__input').focus();

    setTimeout(function() {
      $('.header__wrap-m-box._search').addClass('active');
    }, 30)

  } else {
    $('body').removeClass('no-scroll');
    $('.header__wrap-m-box._search').removeClass('active');
    setTimeout(function() {
      $('.header__wrap-m-box._search').hide();
    }, 300);
  }
});


// =================================================== ddmenu
let timerCloseDDmenu;

$('.main-nav__link.dropdown').mouseenter(function () {
  $('.main-nav__wrap-ddmenu').slideDown(200);
});

$('.main-nav__link.dropdown').mouseleave(function () {
  timerCloseDDmenu = setTimeout(closeDDmenu, 150);
});

$('.main-nav__wrap-ddmenu').mouseenter(function () {
  clearTimeout(timerCloseDDmenu);
});

$('.main-nav__wrap-ddmenu').mouseleave(function () {
  closeDDmenu();
});


function closeDDmenu() {
  $('.main-nav__wrap-ddmenu').slideUp(200);
}

// === user-nav__sub-n _acc
let timerCloseUserSubNav;

$('.user-nav__link._left').mouseenter(function () {
  $('.user-nav__sub-n._acc').slideDown(200);
});

$('.user-nav__link._left').mouseleave(function () {
  timerCloseUserSubNav = setTimeout(closeUserSubNav, 200);
});

$('.user-nav__sub-n._acc').mouseenter(function () {
  clearTimeout(timerCloseUserSubNav);
});

$('.user-nav__sub-n._acc').mouseleave(function () {
  closeUserSubNav();
});


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
});

$('body').mouseup(function(even) {
  if($('.user-nav__sub-n').has(even.target).length === 0) {
    $('.user-nav__sub-n._reg').slideUp(200);
  }
});

// ======================================================= tab
$('.tab__btn').on('click', function () {
  let id = $('.tab__btn').index(this);

  $('.tab__btn').removeClass('active');
  $(this).addClass('active');

  $('.tab-content__item').hide();
  $('.tab-content__item').eq(id).fadeIn();

  if($('.tab-content__item').eq(id).find('.slider-v2__list').length == 1) {
    $('.slider-v2__list').slick('slickSetOption', 'adaptiveHeight', true, true);
  }
});

// ======================================================== testimonials
$('.b-block__link-view-all').on('click', function() {
  if($(this).text() === 'View All') {
    $(this).text('Hide All');
    $('.b-feedbacks__item').slideDown();
  } else {
    $(this).text('View All');
    $('.b-feedbacks__item:nth-child(n + 4)').slideUp();
  }
});


// ======================================================== add cart purchase
// $('.purchase__add-to-cart').on('click', function () {
//   $(this).closest('.purchase__box-add-to-cart').find('.purchase__wrap-response').fadeIn();
//   $(this).hide();
// });


// ========================================================== slick
$('.slider__arrow._prev').on('click', function () {
  $('.slick-prev').click();
});

$('.slider__arrow._next').on('click', function () {
  $('.slick-next').click();
});

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


// $('.slider-v3__list').slick({
//   slidesToShow: 2,
//   infinite: false,
// });

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
});

$('.slider-v2__btn.__next').on('click', function () {
  $('.slick-next').click();
  checkDisabledArrow();
});

// ================================================================= tab-exam2__more
$('.exam-more').on('click', function () {
  if ($(this).text() == 'More...') {
    $('.text-more-hidden').fadeIn();
    $(this).text('Close');
  } else {
    $('.text-more-hidden').hide();
    $(this).text('More...');
  }
});

// ================================================================ upgrade hide show
$('.ma-home__additional-btn.upgrade').on('click', function () {
  $(this).hide();
  $('.ma-home__additional-btn.hide').fadeIn();
  $('.ma-home__upgr').fadeIn();
});

$('.ma-home__additional-btn.hide').on('click', function () {
  $(this).hide();
  $('.ma-home__additional-btn.upgrade').fadeIn(200);
  $('.ma-home__upgr').hide();
});


// ========================================== test magnific-popup



$('.slider-v2__list').magnificPopup({
  delegate: 'a',
  type: 'image',
  gallery:{
    enabled:true
  },
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
      // just a hack that adds mfp-anim class to markup 
       this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  closeOnContentClick: true,
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.

});

// =========================================== modal

try {
  if(modalNumber === 1) {
    setTimeout(function() {
      marginificInitialize('#offer1');
    }, 5000)
  } else if (modalNumber === 2) {
    marginificInitialize('#offer2');
  }
} catch(e) {}


function marginificInitialize(offer) {
  $.magnificPopup.open({
    items: {
      src: offer
    },
    type: 'inline',
    modal: true,
    alignTop: true,
    showCloseBtn: false
  }, 0);
}

let modalClose = document.querySelectorAll('.modal__close');
let modalBtnShop = document.querySelector('.modal__btn._shop')

if(modalClose) {
  for(let i = 0; i < modalClose.length; i++) {
    modalClose[i].addEventListener('click', function() {
      $.magnificPopup.close();
    })
  }
}

if(modalBtnShop) {
  modalBtnShop.addEventListener('click', function() {
    $.magnificPopup.close();
  })
}

$('[href="#modal-download"]').magnificPopup({
  type: 'inline',
  // modal: true,
  alignTop: true,
  showCloseBtn: false
});

$('[data-mfp-src="#modal-details"]').magnificPopup({
  type: 'inline',
  // modal: true,
  alignTop: true,
  showCloseBtn: false
});


$('[data-mfp-src="#modal-details-2"]').magnificPopup({
  type: 'inline',
  // modal: true,
  alignTop: true,
  showCloseBtn: false
});

$('[data-mfp-src="#modal-details-3"]').magnificPopup({
  type: 'inline',
  // modal: true,
  alignTop: true,
  showCloseBtn: false
});

// ================================================================= video list
$('.video-level-1__header').on('click', function () {
  let videoLevel2 = $(this).next('.video-level-2');
  if(videoLevel2.css('display') === 'none') {
    videoLevel2.slideDown(150);
    $(this).addClass('_open');
  } else {
    videoLevel2.slideUp(150);
    $(this).removeClass('_open');
  }
});


// =============================================================== video player
let videoLevel2 = document.querySelectorAll('.video-level-2');

if(document.querySelector('.video-level-2__header._open')) {
  for (let i = 0; i < videoLevel2.length; i++) {
    videoLevel2[i].addEventListener('click', function(event) {
      let videoLevel2Headers = this.querySelectorAll('.video-level-2__header._open');
      let currentElement = event.target;
      let indexCurrentElement = Number(currentElement.getAttribute('data-index'));

      openPlayer(makeVideoList(videoLevel2Headers), indexCurrentElement);
    })
  }
}


function makeVideoList(videoLevel2Headers) {
  let videoList = [];

  for (let i = 0; i < videoLevel2Headers.length; i++) {
    let id = videoLevel2Headers[i].getAttribute('id');
    let title = videoLevel2Headers[i].getAttribute('data-title');
    videoList.push(new Object({id: id, title: title}))
  }
  return videoList;
}


function openPlayer(videoList, index) {

  const player = new Plyr('#player', {
    controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'captions', 'settings', 'pip', 'airplay', 'fullscreen']
  });

  $.magnificPopup.open({
    items: {
      src: '#video-popup'
    },
    // closeBtnInside: false,
    type: 'inline',
    callbacks: {
      beforeClose: function() {
        player.destroy();
      }
    }
  }, 0);


  let videoPlayer = document.querySelector('#player');

  let plyrControls = document.querySelector('.plyr__controls');
  let plyrControl = document.querySelector('.plyr__control');

  plyrControls.insertAdjacentHTML('afterbegin', '<div class="player-title"></div>');
  let videoTitle = document.querySelector('.player-title');

  plyrControl.insertAdjacentHTML('beforebegin', '<button type="button" class="plyr-prev"></button>');
  plyrControl.insertAdjacentHTML('afterend', '<button type="button" class="plyr-next"></button>');

  let plyrPrev = document.querySelector('.plyr-prev');
  let plyrNext = document.querySelector('.plyr-next');


  let source = videoPath + videoList[index].id;

  videoPlayer.setAttribute('src', source);
  videoTitle.innerHTML = videoList[index].title;

  checkButtons(videoList, index);


  plyrPrev.addEventListener('click', function() {
    index--;

    source = videoPath + videoList[index].id;

    videoPlayer.setAttribute('src', source);

    videoTitle.innerHTML = videoList[index].title;

    checkButtons(videoList, index);
  });

  plyrNext.addEventListener('click', function() {
    index++;

    source = videoPath + videoList[index].id;

    videoPlayer.setAttribute('src', source);

    videoTitle.innerHTML = videoList[index].title;

    checkButtons(videoList, index);
  });


  function checkButtons(videoList, index) {
    if (index === 0) {
      plyrPrev.setAttribute('disabled', 'disabled');
    } else {
      plyrPrev.removeAttribute('disabled');

    }
    if (index === videoList.length - 1) {
      plyrNext.setAttribute('disabled', 'disabled');
    } else {
      plyrNext.removeAttribute('disabled');
    }
  }
}

//======================================= checkouthelp
let checkoutHelpList = document.querySelector('.checkouthelp__list');
let checkoutHelpDescArr = document.querySelectorAll('.checkouthelp__desc');

if(checkoutHelpList) {
  checkoutHelpList.addEventListener('click', function (e) {
    if(e.target.classList.contains('checkouthelp__btn')) {
      e.target.nextElementSibling.classList.toggle('_show');
    }
  })
}


$('.checkouthelp-link').magnificPopup({
  type:'inline',
  alignTop: true
});


$('[data-mfp-src="#cvv-modal"]').magnificPopup({
  type:'inline',
  alignTop: true
});

// ============================================================= up
$(window).scroll(function () {
  if ($(this).scrollTop() > 1500) {
    // $('.up').fadeIn();
    $('.up').css({"transform": "translateX(0)"});
  } else {
    $('.up').css({"transform": "translateX(100px)"});
  }
});

$('.up').on('click', function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
});


// ============================================================ footer
(function () {
  let isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

  let stickFooter = function () {
    let FOOTER = document.querySelector('footer');
    let MAIN = document.querySelector('main');
    let BODY = document.querySelector('body');
    let footerHeight = FOOTER.offsetHeight;
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
