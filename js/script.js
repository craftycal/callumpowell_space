



$( document ).ready(function() {

  $( "#navButton" ).click(function() {
    $( ".navigation" ).slideToggle( "slow", function() {
    });
  });



  $( ".hvr-ripple-out-good" ).click(function() {
    $( this ).toggleClass( "fill-good" );
  });

  $( ".hvr-ripple-out-bad" ).click(function() {
    $( this ).toggleClass( "fill-bad" );
  });

});
