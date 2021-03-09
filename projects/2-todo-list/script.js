let spanElement;
let binButton;
let tickButton;
let addButton;

function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  for (let todo of todos) {
    let liElement = document.createElement("li");
    liElement.innerHTML = `${todo.task}`;
    liElement.style.backgroundColor = "white";
    liElement.style.listStyleType = "none";
    liElement.className =
      "list-group-item d-flex justify-content-between align-items-center";

    spanElement = document.createElement("span");
    spanElement.className = "badge bg-primary rounded-pill";

    tickButton = document.createElement("i");
    tickButton.className = "fa fa-check";
    tickButton.setAttribute("aria-hidden", "true");

    binButton = document.createElement("i");
    binButton.className = "fa fa-trash";
    binButton.setAttribute("aria-hidden", "true");

    spanElement.appendChild(tickButton);
    spanElement.appendChild(binButton);
    liElement.appendChild(spanElement);
    list.appendChild(liElement);

    function strikeAction() {
      if (liElement.style.textDecoration === "") {
        liElement.style.textDecoration = "line-through";
      } else if (liElement.style.textDecoration === "line-through") {
        liElement.style.textDecoration = "";
      }
    }
    tickButton.addEventListener("click", strikeAction);

    function deleteAction(e) {
      let getLiParent = e.target.parentElement.parentElement;
      getLiParent.remove();
    }
    binButton.addEventListener("click", deleteAction);
  }
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
  { task: "Clean the surfaces", completed: false },
  { task: "Sweep the floor", completed: false },
];

populateTodoList(todos);

// I had help with this function

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list.
// These new todos will need the completed and delete buttons adding like normal.
function addNewTodo() {
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  let inputElement = document.querySelector("#todoInput");

  if (inputElement.value !== "") {
    let newTodo = {};
    newTodo.task = inputElement.value;
    newTodo.completed = false;
    todos.push(newTodo);
    let addedTodo = todos.slice(todos.length - 1);
    populateTodoList(addedTodo);
    inputElement.value = "";
  }
}

// I had help with this function

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  let container = document.querySelector(".card-body");
  let deleteAllTasks = document.createElement("button");
  deleteAllTasks.textContent = "Delete All Completed Tasks";
  deleteAllTasks.className = "btn btn-info btn-sm btn-block mb-3";
  container.appendChild(deleteAllTasks);
  function deleteAll() {
    let allLiElements = document.getElementsByTagName("li");
    console.log(allLiElements);
    let i = 0;
    while (allLiElements.length > 0) {
      allLiElements[i].remove();
    }
  }
  deleteAllTasks.addEventListener("click", deleteAll);
}
deleteAllCompletedTodos();
