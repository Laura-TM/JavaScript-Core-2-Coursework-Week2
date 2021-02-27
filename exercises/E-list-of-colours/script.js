function listOfColours(colours) {
  let container = document.querySelector("#content");
  let selectionList = document.createElement("select");
  container.appendChild(selectionList);
  let sentence = document.createElement("p");
  container.appendChild(sentence);
  // Iterated through the array of colours
  for (let colour of colours) {
    let option = document.createElement("option");
    option.textContent = colour;
    selectionList.appendChild(option);
    let updateColors = function () {
      sentence.textContent = `You have picked: ${colour}`;
      sentence.style.color = `${colour}`;
    };
    option.addEventListener("click", updateColors);
  }
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
