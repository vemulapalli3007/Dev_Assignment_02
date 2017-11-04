// Jquery ready method will trigger when document get ready
$(document).ready(function() {
	// Ajax get Method to get json data from data.json
	$.get("./js/data.json", function(result) {
		// display option for user understand
		var options = "<option value=''><--Choose Reason--></option>";
		// each function to repeat the loop over json data
		$.each(result.reasons, function(i, field) {
			options = options + "<option>" + field.reason + "</option>";
		});
		// setting the options to for reason dropdown
		$("#reason").html(options);
	});
});

// validate function will trigger when user submit the form
function validate() {
	// retrieving all user entered values in to java script var variables
	var reason = $("#reason").val();
	var email = $("#email").val();
	var name = $("#name").val();
	var subject = $("#subject").val();
	var message = $("#message").val();
	// validation for reason of contact
	if (reason == "") {
		alert("Please Choose Reason of Contact");
		$("#reason").css("border", "2px solid red");
		$("#reason").focus();
		return false;
	} // validation for Email Address
	else if (!validateEmail(email)) {
		alert("Please Enter Valid Email Address");
		$("#reason").css("border", "1px solid #676B6E");
		$("#email").focus();
		$("#email").css("border", "2px solid red");
		return false;
	} // validation for Name
	else if (name == "") {
		$("#reason").css("border", "1px solid #676B6E");
		$("#email").css("border", "1px solid #676B6E");
		alert("Please Enter Valid Name");
		$("#name").css("border", "2px solid red");
		$("#name").focus();
		return false;
	} // validation for Subject
	else if (subject == "") {
		$("#reason").css("border", "1px solid #676B6E");
		$("#email").css("border", "1px solid #676B6E");
		$("#name").css("border", "1px solid #676B6E");
		alert("Please Enter Subject");
		$("#subject").css("border", "2px solid red");
		$("#subject").focus();
		return false;
	} // validation for Message message length minimum 20 characters.
	else if (message.length < 20) {
		$("#reason").css("border", "1px solid #676B6E");
		$("#email").css("border", "1px solid #676B6E");
		$("#name").css("border", "1px solid #676B6E");
		$("#subject").css("border", "1px solid #676B6E");
		alert("Please Enter Message Minimun 20 Charectors");
		$("#message").css("border", "2px solid red");
		$("#message").focus();
		return false;
	}

}

// Email validation calling this function at email validation
function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}