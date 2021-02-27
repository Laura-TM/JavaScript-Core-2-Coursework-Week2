function shoppingList(arrayOfProducts) {
  let container = document.querySelector("#content");
  let list = document.createElement("ul");
  container.appendChild(list);
  // Iterated through the array of products
  for (let product of arrayOfProducts) {
    let bulletPoint = document.createElement("li");
    bulletPoint.textContent = product;
    list.appendChild(bulletPoint);
  }
}

let shopping = ["Milk", "Bread", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

shoppingList(shopping);
