const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector(".greeting");
const savedUsername = localStorage.getItem("username");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME = "username";

function createGreeting(value) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${value}!`;
}

function handleSubmitForm(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME, username);
  createGreeting(username);
}

if (savedUsername === null) {
  loginForm.addEventListener("submit", handleSubmitForm);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  createGreeting(savedUsername);
}
