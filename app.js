// Selectors
const todoInput = document.querySelector(".add-task");
const todoButton = document.querySelector(".add-task-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Funtions
function addTodo(event) {
  //   prevent form from submitting
  event.preventDefault();
  //   todo DIV
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //   Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  //   Checkmark Button
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-check"></i>';
  completeButton.classList.add("complete-button");
  todoDiv.appendChild(completeButton);
  //   Trash Button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-button");
  todoDiv.appendChild(trashButton);
  //   Append to List
  todoList.appendChild(todoDiv);
  //   Clear TodoInput Value
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  //   Delete TODO
  if (item.classList[0] === "trash-button") {
    const todo = item.parentElement;
    todo.remove();
  }
}
