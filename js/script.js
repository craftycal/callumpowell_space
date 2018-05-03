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

  $('.hvr-ripple-out-good').click(function() {
     var el = $(this),
     newone = el.clone(true);
     el.before(newone);
     el.remove();
     newone.addClass('fill-good');
});


  $('.hvr-ripple-out-good').onClick(function(){
      $(this).addClass('hvr-ripple-out');
  });


  //riple buttons
  $( '.hvr-ripple-out-good' ).click(function() {
    $( this ).toggleClass( 'fill-good' );
  });

  $( '.hvr-ripple-out-bad' ).click(function() {
    $( this ).toggleClass( 'fill-bad' );
  });


});
