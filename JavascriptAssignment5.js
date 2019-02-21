function validateform()
{
var first = document.forms["GregsForm"]["firstname"].value;
var last = document.forms["GregsForm"]["Lastname"].value;
if (first == "") 
{
alert("Please Enter your First Name");
return false;
}
else if (last == "")
{
	alert("Please Enter Your Last Name");
	return false;
}
}

function ValidateEmail(inputText)
{
	var email = document.forms["GregsForm"]["Email"].value;
	var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(inputText.value.match(emailformat))
	{
document.GregsForm.Email.focus();
return true;
	}
else
{
alert("You have entered an invalid email address");
document.GregsForm.Email.focus();
return false;
}


}

