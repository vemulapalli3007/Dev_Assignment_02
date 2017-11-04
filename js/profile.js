$(document).ready(function() {
	// contact details zoom in using animate function while mouse enter
	$(".topContent").on("mouseover", function() {
		$(this).animate({
			zoom : '150%'
		}, "slow");
	});

	// contact details zoom out using animate function while mouse leave
	$(".topContent").on("mouseleave", function() {
		$(this).animate({
			zoom : '100%'
		}, "fast");
	});

	// html() implementation for change 10th class to SSC
	$("#ssc").on("mouseover", function() {
		$(this).html("S S C");
	});
	// html() implementation for change SSC to 10th class
	$("#ssc").on("mouseleave", function() {
		$(this).html("10th Class");
	});

});
