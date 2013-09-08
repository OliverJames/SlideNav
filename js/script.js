// JavaScript Document By Oliver Mahoney

$(document).ready(function() {
	$( "#displayButton" ).click(function(){
	  $( ".mainMenu" ).switchClass( "mainMenu", "mainMenuHidden", 500 );
	  $( ".mainMenuHidden" ).switchClass( "mainMenuHidden", "mainMenu", 500 );
	  return false;
	});
});
