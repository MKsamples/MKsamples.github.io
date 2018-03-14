
var nav_fade = 150;
var nav_slide = 400;
var active_dropdown = "";

$(document).ready(function() {
	$("#page_wrapper").click(function(event) {
		if (!$(event.target).hasClass("nav_dropdown"))
			if (active_dropdown != "") hideNavDropdown(active_dropdown);
	});
});

$(document).ready(function() {
	$("#cover").click(function(event) {
		if ($("#mobi_dropdown").is(":visible")) {
			$("#nav_small").click()[0];
		}
	});
});

$(document).ready(function() {
	$(".nav_dropdown").click(function() {
		var tmp_id = $(this).attr("id");
		
		if ($(this).find("ul").height() > 0) {
			hideNavDropdown(tmp_id);
		} else {
			if (active_dropdown != "" && active_dropdown != tmp_id) hideNavDropdown(active_dropdown);
			
			showNavDropdown(tmp_id);
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
	
	active_dropdown = ""
}

$(document).ready(function() {
	$("#nav_small").click(function() {
		if ($("#mobi_dropdown").is(":visible")) {
			$("#cover").fadeOut(nav_fade);
			
			$(this).find("i").css("color", "#FAFAFA");
			
			$("#mobi_dropdown").slideUp(nav_slide);
		} else {
			$("#cover").fadeIn(nav_fade);
			
			$(this).find("i").css("color", "#00cc55");
			
			$("#mobi_dropdown").slideDown(nav_slide);
		}
	});
});



