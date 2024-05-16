function validateEmail(email) {
	var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return emailRegex.test(email);
}

function validatePassword(password) {
	var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
	return passwordRegex.test(password);
}

function login() {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var emailError = document.getElementById("emailError");
	var passwordError = document.getElementById("passwordError");



	emailError.textContent = "";
	passwordError.textContent = "";
	// email = null;
	if (email == "") {
		emailError.textContent = "Enter the email";
		return;
	}

	if (!password) {
		passwordError.textContent = "Enter the password";
		return;
	}




	if (!validateEmail(email)) {
		emailError.textContent = "Invalid email address";
		return;

	}

	if (!validatePassword(password)) {
		passwordError.textContent = "Invalid password. Password must be at least 8 characters long .";
		return;
	}
	validate()


	// If both email and password are valid, proceed with login process
	//alert("Login successful!");
	// You can add code here to perform further actions such as sending the data to a server for authentication.
}
function validate(){
	console.log("tttttttttttttttttttt")
    var password = document.getElementById("password");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        //alert("Login Succesfull");
		//file:///home/abhinesh/nodeproject/new%20website/newpage.html
        window.location.replace("newpage.html");
        return false;
    }
    else{
        alert("Login Failed");
    }
}



































