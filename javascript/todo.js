const todolist = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");
const todoInput = todoForm.querySelector("input");

let todos = [];

const TODOS_KEY = "todos";

if (localStorage.getItem("username") === null) {
  todoForm.classList.add(HIDDEN_CLASSNAME);
} else {
  todoForm.classList.remove(HIDDEN_CLASSNAME);
}

function deleteTodoItem(event) {
  const deleteTarget = event.target.parentElement;
  alert(deleteTarget.id);
  deleteTarget.remove();
}

function saveTodos(newTodoObj) {
  todos.push(newTodoObj);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function createTodoItem(newTodoObj) {
  const todo_li = document.createElement("li");
  const todo_span = document.createElement("span");
  const todo_btn = document.createElement("button");

  todo_btn.innerText = "X";
  todo_btn.addEventListener("click", deleteTodoItem);

  todo_span.innerText = newTodoObj.text;
  todo_li.id = newTodoObj.id;

  todo_li.appendChild(todo_span);
  todo_li.appendChild(todo_btn);
  todolist.appendChild(todo_li);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  saveTodos(newTodoObj);
  createTodoItem(newTodoObj);
  todoInput.value = "";
}

todoForm.addEventListener("submit", handleTodoSubmit);

if (localStorage.getItem(TODOS_KEY) !== null) {
  const savedTodos = JSON.parse(localStorage.getItem(TODOS_KEY));
  todos = savedTodos;
  savedTodos.forEach(createTodoItem);
}
