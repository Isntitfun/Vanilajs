const todolist = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");

if (localStorage.getItem("username") === null) {
  todoForm.classList.add(HIDDEN_CLASSNAME);
} else {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function createTodoItem(newTodo) {
  const todo_li = document.createElement("li");
  const todo_span = document.createElement("span");
  todo_span.innerText = newTodo;
  todo_li.appendChild(todo_span);
  todolist.appendChild(todo_li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  createTodoItem(newTodo);
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleTodoSubmit);
