const form = document.getElementById("form");
const userName = document.getElementById("userName");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const email = document.getElementById("email");

//This addEventListener is taking 2 things first is the event we want to listen for and a function
form.addEventListener("submit", function (e) {
  e.preventDefault();
//   console.log(userName.value);


if(userName.value === '' ){
    alert('UserName is Required');
}



});
