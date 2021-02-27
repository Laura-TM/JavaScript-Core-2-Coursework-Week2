function highlightWords(paragraph, colours) {
  let container = document.querySelector("#content");
  let paragraphElement = document.createElement("p");
  container.appendChild(paragraphElement);
  let selectElement = document.createElement("select");
  container.appendChild(selectElement);
  for (let colour of colours) {
    let optionElement = document.createElement("option");
    optionElement.textContent = colour;
    selectElement.appendChild(optionElement);
    let myParagraphArray = paragraph.split(" ");
    // Iterated through the array of words
    for (let i = 0; i < myParagraphArray.length; i++) {
      let spanElement = document.createElement("span");
      spanElement.innerHTML = `${myParagraphArray[i]} `;
      paragraphElement.appendChild(spanElement);
      let checkSelect = function () {
        let selectedColor = document.getElementsByTagName("select")[0].value;
        if (selectedColor != "none") {
          spanElement.style.backgroundColor = selectedColor;
        } else {
          spanElement.style.backgroundColor = "";
        }
      };
      spanElement.addEventListener("click", checkSelect);
    }
  }
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["none", "yellow", "green", "blue"];

highlightWords(paragraph, colours);
