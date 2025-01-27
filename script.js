const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPw = document.getElementById("confirmpw");
const form = document.getElementById("form");
const unErr = document.getElementById("errUN");
const emErr = document.getElementById("errEMAIL");
const pwErr = document.getElementById("errPW");
const cpwErr = document.getElementById("errCPW");


function validateForm() {
    unErr.innerHTML = "";
    emErr.innerHTML = "";
    pwErr.innerHTML = "";
    cpwErr.innerHTML = "";
  if (username.value == undefined || username.value == "") {
    unErr.innerHTML = "Please enter valid username";

    return false;
  }
  console.log(email.value)
  if (email.value == undefined || email.value == "") {
    emErr.innerHTML = "Please enter valid email";

    return false;
  }
  console.log(password.value)
  if (password.value == undefined || password.value == "") {
    pwErr.innerHTML = "Please enter valid password";

    return false;
  }
  console.log(confirmPw.value)
  if (password.value !== confirmPw.value) {
    cpwErr.innerHTML = "password don't match try again";

    return false;
  }

}
