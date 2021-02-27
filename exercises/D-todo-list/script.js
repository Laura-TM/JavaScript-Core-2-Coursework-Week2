function todoList(todos) {
  let container = document.querySelector("#content");
  let list = document.createElement("ul");
  container.appendChild(list);
  // Iterated through the array of tasks
  for (let task of todos) {
    let bulletPoint = document.createElement("li");
    bulletPoint.style.listStyleType = "none";
    list.appendChild(bulletPoint);
    let button = document.createElement("button");
    button.textContent = `${task.todo}`;
    button.style.backgroundColor = "pink";
    bulletPoint.appendChild(button);
    let onButtonClick = function () {
      let textDecoration = button.style.getPropertyValue("text-decoration");
      // Created an if-else statement
      if (textDecoration == "line-through") {
        button.style.setProperty("text-decoration", "none");
      } else {
        button.style.setProperty("text-decoration", "line-through");
      }
    };
    button.addEventListener("click", onButtonClick);
  }
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
