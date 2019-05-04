$(document).ready(function(){
  var passwd = "A01633169";

  $( "form" ).submit(function( event ){

    if($("#username").val() === passwd &&){
      alert("Success");
      return;
    }

    $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
    event.preventDefault();
  });
});
