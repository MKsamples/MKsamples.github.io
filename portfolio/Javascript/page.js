
var page_fade = 150;
var page_queue = 125;

var char_fade = 25;
var char_transition = 150;

function textFade(id) {
	var text = $(id).html();
	
	var tmp = "";
	var open = true;
	
	for (var i = 0; i < text.length; i++) {
		if (text.charAt(i) === "<" || text.charAt(i) === ">") {
			open = !open;
		}
		
		if (open && text.charAt(i) !== ">") tmp += "<span class='faded'>" + text.charAt(i) + "</span>";
		else tmp += text.charAt(i);
	}
	
	$(id).html(tmp);
	
	$(id).css("visibility", "visible");
	
	$(id).find(".faded").each(function(index) {
		$(this).delay(char_fade * index).queue(function() {
			$(this).css({
				"filter": "alpha(opacity=100)",
				"opacity": 1
			});
			
			$(this).text();
		});
	});
}

function scrollToElement($element) {
	if (!/Mobi/.test(navigator.userAgent)) {
		$("html, body").animate({
			scrollTop: $($element).offset().top - $("#nav").height()
		}, 500);
	} else {
		$("html, body").scrollTop($($element).offset().top);
	}
}

$(document).ready(function() {
	textFade("#header_title");
});

$(document).ready(function() {
	$("#scroll_top").tooltip({
		"delay": {show: 25}
	});
	
	$("#scroll_top").click(function() {
		scrollToTop();
	});
});

function scrollToTop() {
	if (!/Mobi/.test(navigator.userAgent)) {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	} else {
		$("html, body").scrollTop(0);
	}
}

function animateContainers(id) {
	$(id).find(".fade_block_l").each(function(index) {
		$(this).delay(page_queue * index).queue(function() {
			$(this).css({
				"left": "0%",

				"filter": "alpha(opacity=100)",
				"opacity": "1"
			});
		});
	});
	
	$(id).find(".fade_block_r").each(function(index) {
		$(this).delay(page_queue * index).queue(function() {
			$(this).css({
				"right": "0%",

				"filter": "alpha(opacity=100)",
				"opacity": "1"
			});
		});
	});
	
	$(id).find(".fade_block_t").each(function(index) {
		$(this).delay(page_queue * index).queue(function() {
			$(this).css({
				"top": "0px",

				"filter": "alpha(opacity=100)",
				"opacity": "1"
			});
		});
	});
}

function isContainerInViewport(id) {
	return ($(window).scrollTop() + ($(window).height() / 2)) > $(id).offset().top;
}

var about_me_listener = false;
var design_principles_listener = false;
var samples_listener = false;
var used_technologies_listener = false;

$(window).scroll(function() {
	if (!about_me_listener && isContainerInViewport("#about_me")) {
		animateContainers("#about_me");
		
		about_me_listener = true;
	} 
	
	if (!design_principles_listener && isContainerInViewport("#design_principles")) {
		animateContainers("#design_principles");
		
		design_principles_listener = true;
	}
	
	if (!samples_listener && isContainerInViewport("#samples")) {
		animateContainers("#samples");
		
		samples_listener = true;
	} 
	
	if (!used_technologies_listener && isContainerInViewport("#used_technologies")) {
		animateLogos();
		
		used_technologies_listener = true;
	} 
	
	if ($(this).scrollTop() > ($("#used_technologies").offset().top - $(this).height() +100) && $(this).width() > 800) {
		$("#scroll_top").fadeIn(page_fade);
	} else {
		$("#scroll_top").fadeOut(page_fade);
	}
});

