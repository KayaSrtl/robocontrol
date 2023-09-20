





$(window).scroll(function(event){
	var st = $(this).scrollTop();
});

$( document ).ready(function() {
    console.log( "ready!" );
	
	
	
	
	
	$("#forward_button").click(function() {
		console.log( "forward" );
		$(this).css("color", "red");
		$("#stop_button, #left_button, #right_button, #backward_button").css("color", "");
		
	});
	
	$("#left_button").click(function() {
		console.log( "left" );
		$(this).css("color", "red");
		$("#forward_button, #stop_button, #right_button, #backward_button").css("color", "");

	});
	
	$("#stop_button").click(function() {
		console.log( "stop" );
		$(this).css("color", "red");
		$("#forward_button, #left_button, #right_button, #backward_button").css("color", "");
	});
	
	$("#right_button").click(function() {
		console.log( "right" );
		$(this).css("color", "red");
		$("#forward_button, #left_button, #stop_button, #backward_button").css("color", "");
	});
	
	$("#backward_button").click(function() {
		console.log( "backward" );
		$(this).css("color", "red");
		$("#forward_button, #left_button, #right_button, #stop_button").css("color", "");
	});
	
});

$(document).keydown(function(e){
	var key = e.which;
	switch(key) {
			case 38:
				$( "#forward_button" ).trigger( "click" );
				break;
			case 37:
				$( "#left_button" ).trigger( "click" );
				break;
			case 39:
				$( "#right_button" ).trigger( "click" );
				break;
			case 40:
				$( "#backward_button" ).trigger( "click" );
				break;
		case 80:
			$( "#stop_button" ).trigger( "click" );
			break;
		}
	
	console.log(key);
});