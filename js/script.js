$( document ).ready(function() {

  // vibration for mobile
  // support for all navigator vibrate veriants
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  // vibrate on tap
  $('.vib').click(function() {
    navigator.vibrate(50);
  });


  // nav menu
  $("#navButton").click(function() {
    $(".navigation").slideToggle("slow", function() {});
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


  //riple buttons
  $( ".hvr-ripple-out-good" ).click(function() {
    $( this ).toggleClass( "fill-good" );
  });

  $( ".hvr-ripple-out-bad" ).click(function() {
    $( this ).toggleClass( "fill-bad" );
  });



});
