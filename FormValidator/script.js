const form = document.getElementById("form");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("email");

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Checking emails is valid or not
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

//This addEventListener is taking 2 things first is the event we want to listen for and a function
//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  //Validation for userName
  if (userName.value === "") {
    // alert('UserName is Required');
    showError(userName, "Username is required");
  } else {
    showSuccess(userName);
  }

  //Validation for email
  if (email.value === "") {
    showError(email, "email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, "Please enter valid email");
  } else {
    showSuccess(email);
  }

  //Validation for password
  if (password.value === "") {
    showError(password, "password is required");
  } else {
    showSuccess(password);
  }

  //Validation for confirmPassword
  if (confirmPassword.value === "") {
    showError(confirmPassword, "confirmPassword is required");
  } else {
    showSuccess(confirmPassword);
  }
});
