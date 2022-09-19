const todolist = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");

const todos = [];

const TODOS_KEY = "todos";

if (localStorage.getItem("username") === null) {
  todoForm.classList.add(HIDDEN_CLASSNAME);
} else {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function deleteTodoItem(event) {
  const deleteTarget = event.target.parentElement;
  deleteTarget.remove();
}

function saveTodos(newTodo) {
  todos.push(newTodo);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function createTodoItem(newTodo) {
  const todo_li = document.createElement("li");
  const todo_span = document.createElement("span");
  const todo_btn = document.createElement("button");
  todo_btn.innerText = "X";
  todo_btn.addEventListener("click", deleteTodoItem);
  todo_span.innerText = newTodo;
  todo_li.appendChild(todo_span);
  todo_li.appendChild(todo_btn);
  todolist.appendChild(todo_li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  saveTodos(newTodo);
  createTodoItem(newTodo);
}

todoForm.addEventListener("submit", handleTodoSubmit);

if (localStorage.getItem(TODOS_KEY) !== null) {
  const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
  savedTodos.forEach((item) => createTodoItem(item));
}
