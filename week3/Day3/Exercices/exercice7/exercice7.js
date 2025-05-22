const allBooks = [
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://m.media-amazon.com/images/I/81t2CVWEsUL.jpg",
    alreadyRead: true
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    image: "https://m.media-amazon.com/images/I/41-sN-mzwKL._SX374_BO1,204,203,200_.jpg",
    alreadyRead: false
  }
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
  const bookDiv = document.createElement("div");
  bookDiv.style.marginBottom = "20px";

  const text = document.createElement("p");
  text.textContent = `${book.title} written by ${book.author}`;
  if (book.alreadyRead) {
    text.style.color = "black";
  }

  const image = document.createElement("img");
  image.src = book.image;
  image.style.width = "100px";

  bookDiv.appendChild(text);
  bookDiv.appendChild(image);
  section.appendChild(bookDiv);
});
