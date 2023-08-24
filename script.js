function validateForm() {
  var fullName = document.getElementById("full-name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;
  
  var errorMessage = "";

  if (fullName.length < 5) {
      errorMessage += "Name must be at least 5 characters long.\n";
  }

  if (!email.includes("@")) {
      errorMessage += "Enter a valid email address.\n";
  }

  if (phone === "123456789" || phone.length !== 10) {
      errorMessage += "Enter a valid 10-digit phone number.\n";
  }

  if (password === "password" || password === fullName || password.length < 8) {
      errorMessage += "Password is not strong.\n";
  }

  if (password !== confirmPassword) {
      errorMessage += "Passwords do not match.\n";
  }

  if (errorMessage !== "") {
      document.getElementById("error-message").textContent = errorMessage;
      return false;
  }

  return true;
}

  