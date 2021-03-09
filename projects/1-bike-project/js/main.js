/* PART ONE */

let blueButton = document.querySelector("#blueBtn");
let orangeButton = document.querySelector("#orangeBtn");
let greenButton = document.querySelector("#greenBtn");

let jumbotronElement = document.querySelector(".jumbotron");
let donateElement = document.querySelectorAll(".buttons a")[0];
let volunteerElement = document.querySelectorAll(".buttons a")[1];

let applyBlueButton = function () {
  jumbotronElement.style.backgroundColor = "#588fbd";
  donateElement.style.backgroundColor = "#ffa500";
  volunteerElement.style.backgroundColor = "#000000";
  volunteerElement.style.color = "#ffffff";
};
blueButton.addEventListener("click", applyBlueButton);

let applyOrangeButton = function () {
  jumbotronElement.style.backgroundColor = "#f0ad4e";
  donateElement.style.backgroundColor = "#5751fd";
  volunteerElement.style.backgroundColor = "#31b0d5";
  volunteerElement.style.color = "#ffffff";
};
orangeButton.addEventListener("click", applyOrangeButton);

let applyGreenButton = function () {
  jumbotronElement.style.backgroundColor = "#87ca8a";
  donateElement.style.backgroundColor = "#000000";
  volunteerElement.style.backgroundColor = "#8c9c08";
};
greenButton.addEventListener("click", applyGreenButton);

/* PART TWO */

let name = document.querySelector("#example-text-input");
let email = document.getElementsByTagName("input")[0];
let description = document.querySelector("#exampleTextarea");
let submitButton = document.getElementsByClassName("submit")[0];

function isEmailValid() {
  if (email.value.length == 0 || !email.value.includes("@")) {
    email.style.backgroundColor = "#ff6961";
    return false;
  } else {
    email.style.backgroundColor = "transparent";
    return true;
  }
}

function isNameValid() {
  if (name.value.length == 0) {
    name.style.backgroundColor = "#ff6961";
    return false;
  } else {
    name.style.backgroundColor = "transparent";
    return true;
  }
}

function isDescriptionValid() {
  if (description.value.length == 0) {
    description.style.backgroundColor = "#ff6961";
    return false;
  } else {
    description.style.backgroundColor = "transparent";
    return true;
  }
}

function clearFields() {
  email.value = "";
  name.value = "";
  description.value = "";
}

let isValid = function () {
  event.preventDefault();
  let emailIsValid = isEmailValid();
  let nameIsValid = isNameValid();
  let descriptionIsValid = isDescriptionValid();
  if (emailIsValid && nameIsValid && descriptionIsValid) {
    alert("Thank you for filling out the form!");
    clearFields();
  }
};

submitButton.addEventListener("click", isValid);
