function Book(title, author, pages, read) {
  title: this.title;
  author: this.author;
  pages: this.pages;
  read: this.read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const displayBooks = function () {
  booksSection.innerHTML = "";
  myLibrary.forEach((book) => {
    let card = document.createElement("div");
    card.setAttribute("class", "book-item");
    let title = document.createElement("p");
    title.setAttribute("class", "title");
    title.textContent = book.title;
    let author = document.createElement("p");
    author.setAttribute("class", "author");
    author.textContent = book.author;
    let pages = document.createElement("p");
    pages.setAttribute("class", "pages");
    pages.textContent = book.pages;
    let button = document.createElement("button");
    button.setAttribute("class", "read");
    if (book.read) {
      button.textContent = "read";
    } else {
      button.textContent = "unread";
    }
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(button);
    booksSection.appendChild(card);
  });
};
const myLibrary = [];
const addButton = document.querySelector("#add");
const booksSection = document.querySelector(".grid");
const dialog = document.querySelector("dialog");
const closeButton = document.querySelector("#closeBtn");
const dialogForm = document.querySelector("#dialogForm");
addButton.addEventListener("click", () => {
  dialog.showModal();
});
dialogForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the dialog from closing immediately
  const formData = new FormData(dialogForm);
  const bookData = {
    title: formData.get("title"),
    author: formData.get("author"),
    pages: formData.get("pages"),
    read: formData.get("read") === "true",
  };
  console.log(bookData);
  addBookToLibrary(bookData); // Call your function to add the book to the library
  displayBooks();
  dialog.close();
});

closeButton.addEventListener("click", (e) => {
  e.preventDefault();
  dialog.close();
});
