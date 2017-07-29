$(document).ready(function() {

  $('.services-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 10000,
  });

  $('.team-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.textarea-with-counter textarea').on('keyup keydown', function (e) {
    var textarea = $(this);
    var count = textarea.val().length;
    var countBlock = textarea.next().find('.textarea-num');

    if (count > 599) {
      textarea.val(textarea.val().slice(0, 599));
      countBlock.text(0);
      return;
    }
    countBlock.text(599 - count);
  });

  // scrollToPage
  let $page = $('html,body');
  let scrollToPage = (target) => {
  	let y = 0;
  	if (target && $(target).length) {
  		y = $(target).offset().top;
  	}
  	$page.animate({ scrollTop: y }, 300, 'swing')
  	return
  }

  $('.scrollto').on('click', function (e) {
  	e.preventDefault()
  	scrollToPage($(this).attr('href'));
  });

});

// Google map
function initMap() {
  var genesis = {lat: 46.998222, lng: 28.860354};
  // var position = innerWidth > 720 ? {lat: 47.026442, lng: 28.83243} : genesis;


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: genesis,
    scrollwheel: false,
    mapTypeId: google.maps.MapTypeId.HYBRID
  });
  var marker = new google.maps.Marker({
    position: genesis,
    icon: './assets/images/content/marker.png',
    map: map
  });
}
