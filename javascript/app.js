const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function handleLoginButtonClick() {
  const value = loginInput.value;
  if (value === "") {
    alert("Please enter your name.");
  } else if (value.length > 20) {
    alert("The name must be shorter than 20 letters");
  } else {
    console.log("Hello " + value + "!");
  }
}

loginButton.addEventListener("click", handleLoginButtonClick);
