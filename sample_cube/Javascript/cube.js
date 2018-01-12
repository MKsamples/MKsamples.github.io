
var cube_size = 200;
var cube_margin = 50;

$(document).ready(function() {
	loadCubes();
});

function loadCubes() {
	var width = screen.width;
	var height = screen.height;
	
	if (height < 900) height = 900;
	
	load_width = width;
	load_height = height;
	
	var columns = Math.ceil(width / (cube_size + cube_margin));
	var rows = Math.ceil(height / (cube_size + cube_margin));
	
	var context = "";
	var top = 0, left = 0;
	
	for (var i = 0; i < rows; i++) {
		left = 0;
		
		for (var j = 0; j < columns; j++) {
			context += 
				"<span style='top:" + top + "px;left:" + left + "px;' class='cube'>" +
					"<span class='cube_front'></span>" +
					"<span class='cube_bottom'></span>" +
					"<span class='cube_left'></span>" +
				"</span>"
			;
			
			left += cube_size + cube_margin;
		}
		
		top += cube_size + cube_margin;
	}
	
	$("#top_nav_cube_wrapper").html(context);
}

$(document).ready(function() {
	$(".cube").mouseenter(function() {
		$(this).addClass("cube_animation");
	});
});

$(document).ready(function() {
	$(".cube").bind("webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd", function(){
		$(this).removeClass("cube_animation")  
	});
});
