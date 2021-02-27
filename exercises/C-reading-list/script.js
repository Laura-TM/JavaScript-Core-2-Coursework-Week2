function readingList(books) {
  let container = document.querySelector("#content");
  let list = document.createElement("ul");
  container.appendChild(list);
  // Iterated through the array of books
  for (let book of books) {
    let bulletPoints = document.createElement("li");
    bulletPoints.style.listStyle = "none";
    list.appendChild(bulletPoints);
    let wrapper = document.createElement("p");
    wrapper.textContent = `${book.title}: ${book.author}`;
    wrapper.appendChild(bulletPoints);
    wrapper.style.width = "350px";
    if (book.alreadyRead) {
      wrapper.style.backgroundColor = "#32CD32";
    } else {
      wrapper.style.backgroundColor = "#ff5349";
    }
    let image = document.createElement("img");
    image.src = `${book.bookCover}`;
    image.alt = `${book.title}: ${book.author}`;
    image.style.margin = "20px";
    image.style.height = "50%";
    container.appendChild(wrapper);
    wrapper.appendChild(image);
  }
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCover:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442460745l/840._SY475_.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCover:
      "https://images-na.ssl-images-amazon.com/images/I/41P3uDj55yL._SX319_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCover: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

readingList(books);
