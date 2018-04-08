$( document ).ready(function() {

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



  // $( ".box" ).mouseover(function() {
  //   $(this).css({"width": "50%"});
  // });


  $( ".hvr-ripple-out-good" ).click(function() {
    $( this ).toggleClass( "fill-good" );
  });

  $( ".hvr-ripple-out-bad" ).click(function() {
    $( this ).toggleClass( "fill-bad" );
  });



});
