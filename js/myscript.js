// Jquery ready method will trigger when document get ready
$(document).ready(function() {
	var param1var = getQueryVariable("g-recaptcha-response");
	var param1var2 = getQueryVariable("validation");
	if (param1var2 == "false") {
		window.history.back();
	} else if (param1var == "") {
		alert("Please Choose Captcha");
		window.history.back();
	} else {
		window.open("resume/resume.pdf", "_self");
	}
	// function to check the parameter values from form
	function getQueryVariable(variable) {
		var query = window.location.search.substring(1);
		var vars = query.split("&");
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0] == variable) {
				return pair[1];
			}
		}
		alert('Query Variable ' + variable + ' not found');
	}

});