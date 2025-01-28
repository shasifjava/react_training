const usernameField = document.getElementById("usernameField");
const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("passwordField");
const confirmPasswordField = document.getElementById("confirmPasswordField");

function showError(element, message) {
  element.innerHTML = message;
}

function validateForm() {
  showError(usernameField.querySelector(".err"), "");
  showError(emailField.querySelector(".err"), "");
  showError(passwordField.querySelector(".err"), "");
  showError(confirmPasswordField.querySelector(".err"), "");
  let isValid = true;

  // validate username
  const username = usernameField.querySelector("#username").value;
  if (username == undefined || username == "") {
    showError(
      usernameField.querySelector(".err"),
      "Please enter valid username"
    );
    isValid = false;
  }

  // validate email
  const email = emailField.querySelector("#email").value;
  if (email == undefined || email == "") {
    showError(emailField.querySelector(".err"), "Please enter valid email");
    isValid = false;
  }

  // validate password
  const password = passwordField.querySelector("#password").value;
  if (password == undefined || password == "") {
    showError(passwordField.querySelector(".err"), "Please enter password");
    isValid = false;
  }

  // validate confirm password
  const confirmPw = confirmPasswordField.querySelector("#confirmpw").value;
  if (password !== confirmPw) {
    showError(
      confirmPasswordField.querySelector(".err"),
      "password dosn't match"
    );
    isValid = false;
  }
  if (isValid) {
    alert("form submitted");
  }
  return isValid;
}
