'use strict';

var $overlay = $('#overlay');
var $body = $('body');
var $orderCallHeadline = $('#order-call-headline');

$('.js-open-popup').on('click', function (e) {
  e.preventDefault();
  closePopup();

  var $this = $(this);
  var popupId = $this.attr('href');
  var popupIdElement = $(popupId);
  if (popupId === '#order-call') setHeadline($this.data('headline'));

  openPopup.call(this, popupIdElement);
});

$('#overlay, .js-close-popup').on('click', function (e) {
  e.preventDefault();
  closePopup();
});

var openPopup = function openPopup(popupOpen) {
  $(popupOpen).addClass('popupOpened');
  $overlay.removeClass('-hide');
  $body.addClass('popup_active');
};

var closePopup = function closePopup() {
  $('.popup--wrapper').removeClass('popupOpened');
  $overlay.addClass('-hide');
  $body.removeClass('popup_active');
};

var setHeadline = function setHeadline(headline) {
  $orderCallHeadline.text(headline);
};

$('.list-slider').on('click', 'div', function (e) {
  e.stopPropagation();

  var $listSliderFull = $('#list-slider-full');
  var $listSliderFullGallery = $('#list-slider-full-gallery');

  var images = $(this).closest('.list-slider').data('images').split(',');
  var slickIndex = e.target.dataset.slickIndex;

  openPopup.call(this, $listSliderFull);
  if ($listSliderFullGallery.hasClass('slick-initialized')) $listSliderFullGallery.slick('unslick');;
  $listSliderFullGallery.html('');

  images.forEach(function (image) {
    var slide = document.createElement('div');

    // var imageEl = document.createElement('IMG');
    // imageEl.src = image;
    // slide.append(imageEl);

    slide.style.backgroundImage = image;
    slide.style.backgroundImage = "url('" + image + "')";

    $listSliderFullGallery.append(slide);
  });

  $listSliderFullGallery.slick({
    fade: true,
    initialSlide: +slickIndex
  });
});