
$(document).ready(function() {
	$("#top_nav_lang_button").click(function() {
		toggleNavDropdown("#top_nav_lang_button", "#top_nav_lang_button_l", 250);
	});
});

$(document).ready(function() {
	$("#top_nav_drop_button").click(function() {
		toggleNavDropdown("#top_nav_drop_button", "#top_nav_drop_button_l", 350);
	});
});

$(document).ready(function() {
	$("#page_wrapper").click(function() {
		if ($("#top_nav_drop_button_l").is(":visible"))
			toggleNavDropdown("#top_nav_drop_button", "#top_nav_drop_button_l", 350);
		if ($("#top_nav_lang_button_l").is(":visible"))
			toggleNavDropdown("#top_nav_lang_button", "#top_nav_lang_button_l", 250);
	});
});

$(window).scroll(function() {
	if ($(this).scrollTop() >= 1500 && $(this).width() >= 976) { // this refers to window
		$(".to_top").fadeIn(200);
	} else {
		$(".to_top").fadeOut(200);
	}
});

function changePageLanguage($language) {
	var url_split = window.location.href.split("/");
	
	var url = "";
	
	for (var i = 0; i < url_split.length - 1; i++) {
		url += url_split[i] + "/";
	}
	
	window.location.href = url + $language;
}

function toggleNavDropdown($button, $dropdown, $delay) {
	if ($($dropdown).is(":visible")) {
		setTimeout(function() {
			$($button).css("background", "#FAFAFA");
		}, $delay);
			
		$($dropdown).slideUp($delay);
	} else {
		$($button).css("background", "#E0E0E0");
		$($dropdown).slideDown($delay);
	}
}

function scrollToElement($element) {
	if (!/Mobi/.test(navigator.userAgent)) {
		$("html, body").animate({
			scrollTop: $($element).offset().top - 100
		}, 500);
	} else {
		$("html, body").scrollTop($($element).offset().top - 100);
	}
}

function scrollToTop() {
	if (!/Mobi/.test(navigator.userAgent)) {
		$('html, body').animate({
			scrollTop: 0
		}, 500);
	} else {
		$("html, body").scrollTop(0);
	}
}

