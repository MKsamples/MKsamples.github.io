
var fade_duration = 275;

var offsets = [[13, 70], [9, 39], [23, 16], [27, 34], [20, 54], [33, 73], [59, 78], [81, 61], [79, 34], [50, 19], [50, 50]];

var active_id = null;
var active_width = null;
var active_height = null;
var active_top = null;
var active_left = null;
var active_html = null;

var image_interval = null;
var image_count = 11;
var image_sound_delay = 0.8;
var image_delay = 800;
var image_fade_duration = 50;

var message_fade_duration = 750;

var reset_fade_duration = 500;

var blop_sound = new Audio("Sounds/blop.mp3");
var yay_sound = new Audio("Sounds/yay.mp3");

$(document).ready(function() {
	$("#baby_start").on("click", function() {
		$("#baby_greet").fadeOut(fade_duration);
		
		blop_sound.volume = 0.0;
		yay_sound.volume = 0.0;
		
		yay_sound.play();
		blop_sound.play();
		
		if (image_interval == null) { 
			imageAnimation();
		}
	});
});

$(document).ready(function() {
	$("#blop_button").on("click", function() {
		blop_sound.volume = 1.0;
		blop_sound.currentTime = image_sound_delay;
		blop_sound.play();
	});
});

$(document).ready(function() {
	$("#yay_button").on("click", function() {
		if (animation_finished) {
			yay_sound.volume = 1.0;
			yay_sound.currentTime = 0;
			yay_sound.play();
		} 
	});
});

$(document).ready(function() {
	$("#baby_reset").click(function() {
		resetAnimation();
	});
});

$(window).on("resize", function() {
	if ($(window).width() > 850) {
		if ($("#baby_mobi_cover").css("display") != "none") shrinkMobiImage();
	} else {
		if ($("#baby_cover").css("display") != "none") shrinkImage();
	}
});
	

function imageAnimation() {
	var counter = 1;
	
	image_interval = setInterval(function() {
		if (counter > 11) {
			clearInterval(image_interval);
			messageAnimation();
			return;
		}
		
		$("#baby" + counter).fadeIn(image_fade_duration);
		$("#blop_button")[0].click();
		
		if (/Mobi/.test(navigator.userAgent)) {
			$("html, body").animate({ 
				scrollTop: $(document).height() 
			}, "slow");
		}
		
		counter++;
	}, image_delay);
}

function messageAnimation() {
	$("#baby_message").fadeIn(message_fade_duration);
	
	animation_finished = true;
	$("#yay_button")[0].click();
	
	if (/Mobi/.test(navigator.userAgent)) {
		$("html, body").animate({ 
			scrollTop: $(document).height() 
		}, "slow");
	}
}

function resetAnimation() {
	clearInterval(image_interval);
	blop_sound.pause();
	yay_sound.pause();
	
	for (var i = 1; i <= image_count; i++) {
		$("#baby" + i).fadeOut(reset_fade_duration);
	}
	$("#baby_message").fadeOut(reset_fade_duration);
	
	setTimeout(function() {
		imageAnimation();
	}, reset_fade_duration * 2);
}

$(document).ready(function() {
	$(".baby_img").click(function() {

		if ($("#baby_cover").css("display") == "none" && $("#baby_mobi_cover").css("display") == "none") {
			active_id = $(this).attr("id");
			active_html = $(this).find("span").html();
			
			if ($(window).width() > 850) {
				active_width = $(this).width();
				active_height = $(this).height();
				
				active_top =  offsets[$(this).attr("id").replace("baby", "") - 1][0];
				active_left = offsets[$(this).attr("id").replace("baby", "") - 1][1];
				
				$(this).css({
					"width": "500px",
					"height": "500px",
					"z-index": "3",
					"top": "50%",
					"left": "50%",
					
					"-webkit-box-shadow": "none",
					"-moz-box-shadow": "none",
					"box-shadow": "none"
				});
				
				$("#baby_cover").fadeIn(fade_duration);
				
				
				$(this).find("b").css({
					"-webkit-transform": "scale(1)",
					"-moz-transform": "scale(1)",
					"-ms-transform": "scale(1)",
					"-o-transform": "scale(1)",
					"transform": "scale(1)"
				});
				
				$(this).find("span").html("Beebi Annabeli " + active_html + ". minisünnipäev");
				
				$(this).find("span").css("top", "70%");
			} else {
				var window_width = $(window).width() * 0.9;
				
				$("#baby_mobi_cover").fadeIn(fade_duration);
				
				$("#baby_mobi_cover").html("<div><span>Beebi Annabeli " + active_html + ". minisünnipäev</span></div>");
				$("#baby_mobi_cover").find("div").css({
					"width": window_width + "px",
					"height": window_width + "px",
					
					"background-repeat": "no-repeat",
					"background-position": "top center",
					"background": "url(./Images/babyannabel" + active_html + ".jpg)",
					
					"line-height": (window_width * 3/2) + "px",
					
					"-webkit-background-size": "cover",
					"-moz-background-size": "cover",
					"-o-background-size": "cover",
					"background-size": "cover"
				});
				
				$("#baby_mobi_cover").find("div").find("span").css("line-height", window_width / 10 + "px");
			}
		} else {
			if ($(window).width() > 850) {
				shrinkImage();
			}
		}
	});
});

$(document).ready(function() {
	$("#baby_cover").click(function() {
		shrinkImage();
	});
	$("#baby_mobi_cover").click(function() {
		shrinkMobiImage();
	});
});

function shrinkImage() {
	if (active_id != null) {
		$("#baby_cover").fadeOut(fade_duration);
		
		$("#" + active_id).css({
			"width": active_width+ "px",
			"height": active_height + "px",
			"z-index": "1",
			"top": active_top + "%",
			"left": active_left + "%",
			
			"-webkit-box-shadow": "0px 0px 10px #ff8480",
			"-moz-box-shadow": "0px 0px 10px #ff8480",
			"box-shadow": "0px 0px 10px #ff8480"
		});
		
		$("#" + active_id).find("span").html(active_html);
		
		$("#" + active_id).find("span").css("top", "50%");
		
		resetVariables();
	}
}

function shrinkMobiImage() {
	if (active_id != null) {
		$("#baby_mobi_cover").fadeOut(fade_duration);
		$("#baby_mobi_cover").html("");
		
		resetVariables();
	}
}

$(document).ready(function() {
	$(".baby_img").on({
		mouseenter: function() {
			if ($("#baby_cover").css("display") == "none") {
				$(this).find("b").css({
					"-webkit-transform": "scale(1.25)",
					"-moz-transform": "scale(1.25)",
					"-ms-transform": "scale(1.25)",
					"-o-transform": "scale(1.25)",
					"transform": "scale(1.25)"
				});
				
				$(this).css({
					"-webkit-box-shadow": "0px 5px 35px #ff6b66",
					"-moz-box-shadow": "0px 5px 35px #ff6b66",
					"box-shadow": "0px 5px 35px #ff6b66"
				});
			}
		},
		mouseleave: function() {
			if ($("#baby_cover").css("display") == "none") {
				$(this).find("b").css({
					"-webkit-transform": "scale(1)",
					"-moz-transform": "scale(1)",
					"-ms-transform": "scale(1)",
					"-o-transform": "scale(1)",
					"transform": "scale(1)"
				});
				
				$(this).css({
					"-webkit-box-shadow": "0px 0px 10px #ff8480",
					"-moz-box-shadow": "0px 0px 10px #ff8480",
					"box-shadow": "0px 0px 10px #ff8480"
				});
			}
		}
	});
});

function resetVariables() {
	active_id = null;
	active_width = null;
	active_height = null;
	active_top = null;
	active_left = null;
	active_html = null;
}


