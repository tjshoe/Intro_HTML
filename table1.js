
function validateFirstName() { //test input for 2-15 allowed characters
	var fName = document.getElementById("firstName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,15}$/;
	
	if (rel.test(fName))  {  //if input is valid, update page to show successful entry
		document.getElementById("firstNamePrompt").style.color = "green";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	else { //if input is invalid, update page to prompt for new input
		document.getElementById("firstNamePrompt").style.color = "Red";
		document.getElementById("firstNamePrompt").innerHTML = "<strong>Enter 2 - 15 characters</strong>";
		return false;
	}
}

	function validateLastName() { //test input for 2-25 allowed characters
	var lName = document.getElementById("lastName").value;
	var rel = /^[a-zA-Z\s\'\-]{2,25}$/;
	
	if (rel.test(lName))  {  //if input is valid, update page to show successful entry
		document.getElementById("lastNamePrompt").style.color = "green";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>valid</strong>";
		return true;
	}
	else {  //if input is invalid, update page to prompt for new input
		document.getElementById("lastNamePrompt").style.color = "Red";
		document.getElementById("lastNamePrompt").innerHTML = "<strong>Enter 2 - 25 characters</strong>";
		return false;
	}
}

function validatePhone() { //test xxx-xxx-xxxx
	var phoneNumber = document.getElementById("phone").value;
	var rel = /^\d{3}-\d{3}-\d{4}$/;
	
	if (rel.test(phoneNumber)) { //if input is valid
		document.getElementById("phonePrompt").style.color = "green";
		document.getElementById("phonePrompt").innerHTML = "<strong>valid</strong>";
		return (true);
	}
		else { //if input is invalid
			document.getElementById("phonePrompt").style.color = "Red";
			document.getElementById("phonePrompt").innerHTML = "<strong>Use xxx-xxx-xxxx</strong>";
			return (false);
		}
}

