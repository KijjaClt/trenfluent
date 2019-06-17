$(document).ready(function () {

$('.form-group input').keyup(function () {

  if ($(this).val().length <= 0) {
    $(this).siblings('label').css('visibility', 'hidden');
  } else {
    $(this).siblings('label').css('visibility', 'visible');
  }
});
$(window).scroll(function () {
  var y = $(window).scrollTop();
  if (y > 0) {
    $("#top-shadow").css({
      'display': 'block',
      'opacity': y / 20
    });
  } else {
    $("#top-shadow").css({
      'display': 'block',
      'opacity': y / 20
    });
  }
});


$('.footer-menu h4').click(function () {
  $(this).toggleClass('close-menu');
  $(this).siblings('ul').toggleClass('close-menu');


});

$("#sidebar").mCustomScrollbar({
  theme: "minimal"
});

$('#dismiss, .overlay').on('click', function () {
  // hide sidebar
  $('#sidebar').removeClass('active');
  // hide overlay
  $('.overlay').removeClass('active');
});

$('#sidebarCollapse').on('click', function () {
  if ($(this).hasClass('active')) {
    $('#sidebar').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
  } else {
    $('#sidebar').addClass('active');
    // fade in the overlay
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
  }

  $(this).toggleClass('active')
  $('#topNav').toggleClass('active')
  // open sidebar

});
$('a[data-toggle="collapse"]').parent('li').click(function () {
  $('a[data-toggle="collapse"]').parent('li').not(this).children('.list-unstyled').collapse('hide');
});

})
