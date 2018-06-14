function featured_init(){
	
	$(".featured_button").on("click", function(){
		let id = $(this).attr("id");
		
		let container_width = $(".featured_items").width();
		let screen_width = $(window).width();
		
		let delta = 0;
		
		clear_featured_buttons();
		$(this).css("background-color", "#202020");
		
		if (id === "f_left") delta = 0;
		if (id === "f_middle") delta = (screen_width - container_width) / 2;
		if (id === "f_right") delta = screen_width - container_width;
		
		$(".featured_items").css("margin-left", delta + "px");
	});
	
	$(window).resize(function() {
		let screen_width = $(window).width();
		
		if (screen_width < 1200) {
			if ($(".featured_buttons").filter(":hidden")) $(".featured_buttons").fadeIn();
			
			clear_featured_buttons();
			$("#f_left").css("background-color", "#202020");
		} else {
			if ($(".featured_buttons").filter(":visible")) {
				$(".featured_buttons").fadeOut();
				
				$(".featured_items").css("margin-left", "0px");
			}
		}
	});
}

function clear_featured_buttons() {
	$(".featured_buttons").find("span").each(function() {
		$(this).css("background-color", "transparent");
	});
}

function featured_resize(){
	
}

function featured_scroll(){
	
}

$(document).ready(function() {

	$(window).on('resize.cms', function(){
		featured_resize();
	});
	
	$(window).on('scroll.cms', function(){
		featured_scroll();
	});
	
	featured_init();

	featured_resize();
	
	featured_scroll();

});
