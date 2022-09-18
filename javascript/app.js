const loginForm = document.querySelector(".login-form")
const loginInput = loginForm.querySelector("input")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

function createGreeting(){
  
}

function handleSubmitForm(event){
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME, username)
}

loginForm.addEventListener("submit", handleSubmitForm)

if(localStorage.getitem(USERNAME))
