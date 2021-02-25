$(function() {

  const worksSlider = $('[data-slider="slick"]')

  // filter=================================
  let filter = $("[data-filter]");

  filter.on("click", function(event) {
    event.preventDefault();

    let cat = $(this).data("filter");

    if (cat == "all") {
      $("[data-cat]").removeClass("hide");
    } else {
      $("[data-cat]").each(function() {
        let workCat = $(this).data("cat");

        if (workCat != cat) {
          $(this).addClass("hide");
        } else {
          $(this).removeClass("hide");
        }
      });
    }
  });

  //   MODAL=========================

  const modalCall = $('[data-modal]');
  const modalClose = $('[data-close]');

  modalCall.on("click", function(event) {
      event.preventDefault();
      let $this = $(this);
      let modalId = $this.data('modal');
      
      $(modalId).addClass('show');
      $('.slick-slider').slick('setPosition');
      $('body').addClass('no-scroll');

      setTimeout(function() {
        $(modalId).find('.modal__dialog').css({
          transform: 'rotateX(0)'
        });
      }, 200);

      modalCall.on('click', function() {
        let $this = $(this);
        let modalParent = $this.parents('.modal');
    
        modalParent.find('.modal__dialog').css({
          transform: 'rotateX(90deg)'
        });
          $(modalParent).removeClass('show');

      })
	});

	modalClose.on("click", function(event) {
      event.preventDefault();
    let $this = $(this);
    let modalParent = $this.parents('.modal');

    modalParent.find('.modal__dialog').css({
      transform: 'rotateX(90deg)'
    });

    setTimeout(function() {
      (modalParent).removeClass('show');
      $('body').removeClass('no-scroll');
    }, 200);
  });
  
  $('.modal').on("click", function(event) {
    let $this = $(this);

    $this.find('.modal__dialog').css({
      transform: 'rotateX(90deg)'
    });

    setTimeout(function() {
      $this.removeClass('show');
      $('body').removeClass('no-scroll');
    }, 200);

    worksSlider.slick('setPosition')
});

$('.modal__dialog').on("click", function(event) {
  event.stopPropagation();
});

// Header Fixed/////////////////////////

let header = $('#header');
let intro = $('#intro');
let introH;
let scrollPos = $(window).scrollTop();

$(window).on('scroll load resize', function() {
  introH = intro.innerHeight();
  scrollPos = $(this).scrollTop();

  if(scrollPos > introH - 53) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
});


// mobile nav///////////////////////////

const navToggle = $('#navToggle')
const nav = $('#nav')

navToggle.on('click', function(event) {
  event.preventDefault();

  navToggle.toggleClass('active');
  nav.toggleClass('show');
})

// Smooth Scroll////////////////////

$('[data-scroll]').on('click', function(event) {
  event.preventDefault();

  let elementId = $(this).data('scroll');
  let elementOffset = $(elementId).offset().top;

  nav.removeClass('show');
  navToggle.removeClass('active');

  $('html, body').animate({
    scrollTop: elementOffset - 90
  }, 700 );
})

// Slider: https://kenwheeler.github.io/slick/

worksSlider.slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  arrows: false,
  dots: true
});

$('.slickPrev').on('click', function(event) {
  event.preventDefault

  let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')

  currentSlider.slick('slickPrev')
})

$('.slickNext').on('click', function(event) {
  event.preventDefault

  let currentSlider = $(this).parents(".modal").find('[data-slider="slick"]')

  currentSlider.slick('slickNext')
})

// Checkbox Dark Theme

const checkbox1 = $('#checkbox1');
const checkbox2 = $('#checkbox2');
const checkbox3 = $('#checkbox3');


checkbox1.on('click', function() {
  $('#subtitle1').toggleClass('dark');
  $('#description1').toggleClass('dark');
  $('#text1').toggleClass('dark');
})

checkbox2.on('click', function() {
  $('#subtitle2').toggleClass('dark');
  $('#description2').toggleClass('dark');
  $('#text2').toggleClass('dark');
})

checkbox3.on('click', function() {
  $('#subtitle3').toggleClass('dark');
  $('#description3').toggleClass('dark');
  $('#text3').toggleClass('dark');
})

// Reviews photo width height 100%

const photo = $('#photo')

photo.on('click', function() {
  photo.toggleClass('active')
})

// AOS JS

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: 'phone', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 90, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 750, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

});