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
function checkEmail(input) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(re.test(input.value.trim())){
    showSuccess(input);

  }
  else {
    showError(input,"Email is not valid");
  }
}

//Check Required field
function checkRequired(inputArr){
inputArr.forEach( function(input) {
// console.log(input.value );
if(input.value.trim() === ''){
showError(input, `${getFieldName(input)} is required`);
}
else{
  showSuccess(input);
}
});
}

//checking input lengths 
function checkLength (input,min,max){
  if(input.value.length < min ){
    showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
  }
  else if(input.value.length > max ){
    showError(input,`${getFieldName(input)}  not be greater than ${max} characters`);
  }
  else {
    showSuccess(input);
  }

}


//Checking passwords
function checkPasswordsMatch(input1,input2){
  if(input1.value !== input2.value){
    showError(input2,"Passwords should match");
  }

}





//getFieldName
function getFieldName(input){
// return input.id.toUpperCase();
return input.id.charAt(0).toUpperCase() + input.id.slice(1);

}










//This addEventListener is taking 2 things first is the event we want to listen for and a function
//Event Listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([userName,email,password,confirmPassword]);
  checkLength(userName, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password,confirmPassword);
 


  //Validation for userName
  // if (userName.value === "") {
  //   // alert('UserName is Required');
  //   showError(userName, "Username is required");
  // } else {
  //   showSuccess(userName);
  // }

  //Validation for email
  // if (email.value === "") {
  //   showError(email, "email is required");
  // } else if (!isValidEmail(email.value)) {
  //   showError(email, "Please enter valid email");
  // } else {
  //   showSuccess(email);
  // }

  //Validation for password
  // if (password.value === "") {
  //   showError(password, "password is required");
  // } else {
  //   showSuccess(password);
  // }

  //Validation for confirmPassword
  // if (confirmPassword.value === "") {
  //   showError(confirmPassword, "confirmPassword is required");
  // } else {
  //   showSuccess(confirmPassword);
  // }
});
