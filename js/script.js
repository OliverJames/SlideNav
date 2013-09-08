// JavaScript Document By Oliver Mahoney

$(function() {
	$( "#display, .mainMenuHidden" ).click(function(){
	  $( ".mainMenu" ).switchClass( "mainMenu", "mainMenuHidden", 500 );
	  $( ".mainMenuHidden" ).switchClass( "mainMenuHidden", "mainMenu", 500 );
	  return false;
	});
	$("#main").mouseenter(function(e){
		$( ".main" ).switchClass( "main", "mainShadow", 500 );
		return false;
	});
	$("#main").mouseleave(function(e){
		$( ".mainShadow" ).switchClass( "mainShadow", "main", 500 );
		return false;
	});
});
