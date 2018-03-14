
logo_size = "calc(64px + 2vw)";
logo_delay = 125;

function animateLogos() {
	$("#logos").children("div").each(function(index) {
		$(this).delay(logo_delay * index).queue(function() {
			$(this).find("i").css("font-size", logo_size).dequeue();
		});
	});
	
	setTimeout(function() { //Enable bootstrap tooltips
		$("#logos").children("div").each(function() {
			$(this).tooltip({
				"delay": {show: 25}
			});
		});
	}, logo_delay * $("#logos").children("div").length);
}
