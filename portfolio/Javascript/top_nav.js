
var nav_fade = 150;
var nav_slide = 400;
var active_dropdown = "";

$(document).ready(function() {
	$("#cover").click(function(event) {
		if ($("#mobi_dropdown").is(":visible")) {
			$("#nav_small").click()[0];
		}
	});
});

$(document).ready(function() {
	$(".nav_dropdown").on({
		mouseenter: function() {
			var tmp_id = $(this).attr("id");
			
			if ($(this).find("ul").height() <= 0) {
				if (active_dropdown != "" && active_dropdown != tmp_id) hideNavDropdown(active_dropdown);
				
				showNavDropdown(tmp_id);
			}
		},
		mouseleave: function() {
			if (active_dropdown != "") hideNavDropdown(active_dropdown);
		}	
	});
});

function showNavDropdown(id) {
	$("#" + id).css("color", "#00cc55");
			
	$("#" + id).find("ul").css({
		"max-width": "350px",
		"max-height": "250px",
		
		"filter": "alpha(opacity=100)",
		"opacity": "1"
	});
	
	active_dropdown = id;
}

function hideNavDropdown(id) {
	$("#" + id).css("color", "#FAFAFA");
			
	$("#" + id).find("ul").css({
		"max-width": "0px",
		"max-height": "0px",
		
		"filter": "alpha(opacity=0)",
		"opacity": "0"
	});
	
	active_dropdown = "";
}

$(window).resize(function() {
	if ($(this).width() > 800) {
		if ($("#cover").is(":visible")) hideMobNav();
	}
});

$(document).ready(function() {
	$("#nav_small").click(function() {
		if ($("#mobi_dropdown").is(":visible")) {
			hideMobNav();
		} else {
			showMobNav();
		}
	});
});

function hideMobNav() {
	$("#cover").fadeOut(nav_fade);
			
	$("#nav_small").find("div").find("span").css("background", "#FAFAFA");
	$("#bar_top").css({
		"width": "30px",
		
		"-webkit-transform": "rotate(0deg) translate(0px, 0px)",
		"-moz-transform": "rotate(0deg) translate(0px, 0px)",
		"-o-transform": "rotate(0deg) translate(0px, 0px)",
		"-ms-transform": "rotate(0deg) translate(0px, 0px)",
		"transform": "rotate(0deg) translate(0px, 0px)"
	});
	$("#bar_middle").css({
		"filter": "alpha(opacity=100)",
		"opacity": "100"
	});
	$("#bar_bottom").css({
		"width": "30px",
		
		"-webkit-transform": "rotate(0deg) translate(0px, 0px)",
		"-moz-transform": "rotate(0deg) translate(0px, 0px)",
		"-o-transform": "rotate(0deg) translate(0px, 0px)",
		"-ms-ransform": "rotate(0deg) translate(0px, 0px)",
		"transform": "rotate(0deg) translate(0px, 0px)"
	});
	
	$("#mobi_dropdown").slideUp(nav_slide);
}

function showMobNav() {
	$("#cover").fadeIn(nav_fade);
			
	$("#nav_small").find("div").find("span").css("background", "#00cc55");
	$("#bar_top").css({
		"width": "20px",
		
		"-webkit-transform": "rotate(45deg) translate(3px, -1px)",
		"-moz-transform": "rotate(45deg) translate(3px, -1px)",
		"-o-transform": "rotate(45deg) translate(3px, -1px)",
		"-ms-transform": "rotate(45deg) translate(3px, -1px)",
		"transform": "rotate(45deg) translate(3px, -1px)"
	});
	$("#bar_middle").css({
		"filter": "alpha(opacity=0)",
		"opacity": "0"
	});
	$("#bar_bottom").css({
		"width": "20px",
		
		"-webkit-transform": "rotate(-45deg) translate(2px, 1.5px)",
		"-moz-transform": "rotate(-45deg) translate(2px, 1.5px)",
		"-o-transform": "rotate(-45deg) translate(2px, 1.5px)",
		"-ms-transform": "rotate(-45deg) translate(2px, 1.5px)",
		"transform": "rotate(-45deg) translate(2px, 1.5px)"
	});
	
	$("#mobi_dropdown").slideDown(nav_slide);
}

