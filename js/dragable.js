$(document).ready(function() {
	// enabling draggable options for list
	$("#source li").draggable({
		helper : 'clone'
	});
	// make only drag countries to countries div
	$("#divCountries").droppable({
		accept : 'li[data-value="country"]',
		drop : function(event, ui) {
			$("#countries").append(ui.draggable);
		}
	});
	// make only drag cites to cities div
	$("#divCities").droppable({
		accept : 'li[data-value="city"]',
		drop : function(event, ui) {
			$("#cities").append(ui.draggable);
		}
	});

	// validation when you click on download button
	$("#gragbutton").on("click", function() {
		var countries = $("#countries li").length;
		var cities = $("#cities li").length;
		if (countries == 3 && cities == 3) {
			$("#validation").val(true);
		} else {
			$("#validation").val(false);
		}
		$("#source li").each(function() {
			alert("Drag " + $(this).html() + " from Countries & Cities")
		});
	});

});