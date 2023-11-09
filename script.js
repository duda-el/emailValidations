const userName = document.getElementById("userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#btn");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const usernameError = document.getElementById("usernameError");
const confirmPassword = document.getElementById("passwordRepeat");
const confirmPasswordError = document.getElementById("confirmPasswordError");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (userName.value.length === 0) {
    usernameError.style.display = "block";
    usernameError.innerHTML = "Input can't be empty";
    userName.style.border = "1px solid red";
  } else {
    usernameError.style.display = "none";
    userName.style.border = "1px solid rgb(186, 186, 186)";
  }

  if (email.value.length == 0) {
    email.nextElementSibling.style.display = "block";
    emailError.innerHTML = "Input can't be empty";
    email.style.border = "1px solid red";
  } else if (!email.validity.valid) {
    email.nextElementSibling.style.display = "block";
    emailError.innerHTML = "Enter correct email";
    email.style.border = "1px solid red";
  } else {
    emailError.style.display = "none";
    email.style.border = "1px solid rgb(186, 186, 186)";
  }

  if (password.value.length === 0) {
    password.nextElementSibling.style.display = "block";
    passwordError.innerHTML = "Input can't be empty";
    password.style.border = "1px solid red";
  } else if (password.value.length > 0 && password.value.length < 8) {
    password.nextElementSibling.style.display = "block";
    passwordError.innerHTML = "Password must be have at least 8 charachters";
    password.style.border = "1px solid red";
  } else {
    passwordError.style.display = "none";
    password.style.border = "1px solid rgb(186, 186, 186)";
  }

  if (password.value !== confirmPassword.value) {
    confirmPassword.nextElementSibling.style.display = "block";
    confirmPasswordError.innerHTML = "Please enter same password";
    confirmPassword.style.border = "1px solid red";
  } else if (password.value === confirmPassword.value) {
    confirmPasswordError.style.display = "none";
    confirmPassword.style.border = "1px solid rgb(186, 186, 186)";
  }
});
