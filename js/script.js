$( document ).ready(function() {

  // vibration
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  $('.vib').click(function() {
    navigator.vibrate(50);
  });


  // nav menu
  $( "#navButton" ).click(function() {
    $( ".navigation" ).slideToggle("slow", function() {});
  });
  $(window).on('resize', function() {
    if ($(this).width() > 800) {
      $('.navigation').css({
        'display': 'flex'
      });
    } else {
      $('.navigation').css({
        'display': 'none'
      });
    }
  });


  // expand the box
  $( '.expand' ).click(function() {
    $('.hidden').slideToggle(function() {
      $(this).closest('.box').toggleClass('large-box');
      $('.shift').toggleClass("fa-expand fa-compress");
    });
  });


  //riple buttons
  $( '.hvr-ripple-out-good' ).click(function() {
    $( this ).toggleClass( 'fill-good' );
  });

  $( '.hvr-ripple-out-bad' ).click(function() {
    $( this ).toggleClass( 'fill-bad' );
  });


});
