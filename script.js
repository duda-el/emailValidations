const userName = document.getElementById("userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#btn");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const usernameError = document.getElementById("usernameError");

button.addEventListener("click", (event) => {
  event.preventDefault();

  if (userName.value.length === 0) {
    usernameError.style.display = "block";
    usernameError.innerHTML = "Input can't be empty";
    userName.style.border = "1px solid red";
  } else if (userName.value.includes("@")) {
    usernameError.style.display = "block";
    usernameError.innerHTML = "Username cannot contain '@' symbol";
    userName.style.border = "1px solid red";
  } else {
    usernameError.style.display = "none";
    userName.style.border = "1px solid rgb(186, 186, 186)";
  }

  if (email.value.length == 0) {
    email.nextElementSibling.style.display = "block";
    emailError.innerHTML = "Input can't be empty";
    email.style.border = "1px solid red";
  } else if (!email.validity.valid || userName.value.includes("com")) {
    email.nextElementSibling.style.display = "block";
    emailError.innerHTML = "Enter correct email";
    email.style.border = "1px solid red";
  } else {
    emailError.style.display = "none";
    email.style.border = "1px solid rgb(186, 186, 186)";
  }
});
