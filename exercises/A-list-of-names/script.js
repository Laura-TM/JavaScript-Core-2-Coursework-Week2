function listOfNames(arrayOfPeople) {
  let content = document.querySelector("#content");
  // Iterated through the array of people
  for (let person of arrayOfPeople) {
    let heading = document.createElement("h1");
    heading.textContent = person.name;
    content.appendChild(heading);
    let subheading = document.createElement("h2");
    subheading.textContent = person.job;
    content.appendChild(subheading);
  }
}

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" },
];

listOfNames(people);
