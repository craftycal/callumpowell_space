$( document ).ready(function() {

  // vibration
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate;
  $('.vib').click(function() {
    navigator.vibrate(50);
  });


  // nav menu
  $( '#navButton' ).click(function() {
    $( '.navigation' ).slideToggle("slow", function() {
      $('.no-colour').toggleClass('colour').animate('slow');
    });
  });

  $(window).on('resize', function() {
    if ($(this).width() > 800) {
      $('.navigation').css({
        'display': 'flex'
      });

    } else {
      $('.navigation').css({
        'display': 'none',
        'height': '50px !important'
      });
    }
  });


  // scroll animation
  function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
  }
  $(".next-button").click(function() {
    scrollToAnchor('start');
  });


  // ripple button
  $('.hvr-ripple-out-good').click(function() {
    var el = $(this),
    newone = el.clone(true);
    el.before(newone);
    el.remove();
    newone.addClass('fill-good');
  });
  $('.hvr-ripple-out-good').click(function(){
    $(this).addClass('hvr-ripple-out');
  });

});
