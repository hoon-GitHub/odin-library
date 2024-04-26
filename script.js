const myLibrary = [];
const contents = document.querySelector('.contents');
const addDialog = document.querySelector('dialog');
const addButton = document.getElementById('addBookButton');
const confirmAddBtn = document.querySelector("#confirmAdd");

// class constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`);
    };
}

// add book to myLibrary[]
function addBookToLibrary(book) {
    book.info();
    myLibrary.push(book);
}

// clear the contents for reload
function clearAllBooks() {
    while (contents.firstChild) {
        contents.firstChild.remove();
    };
}

// display all books in myLibrary[]
function displayAllBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        contents.appendChild(card);

        const title = document.createElement('h3');
        title.classList.add('title');
        title.innerText = myLibrary[i].title;
        card.appendChild(title);

        const author = document.createElement('h4');
        author.classList.add('author');
        author.innerText = myLibrary[i].author;
        card.appendChild(author);

        const pages = document.createElement('h6');
        pages.classList.add('pages');
        pages.innerText = "Pages: " + myLibrary[i].pages;
        card.appendChild(pages);

        const read = document.createElement('h6');
        read.classList.add('read');
        read.innerText = "Read: " + (myLibrary[i].read ? "Yes" : "No");
        card.appendChild(read);
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, false);
const theHobbit2 = new Book('The Hobbit 2', 'J.R.R. Tolkein', 295, false);
const theHobbit3 = new Book('The Hobbit 3', 'J.R.R. Tolkein', 295, true);
const theHobbit4 = new Book('The Hobbit 4', 'J.R.R. Tolkein', 295, false);
const theHobbit5 = new Book('The Hobbit 5', 'J.R.R. Tolkein', 295, false);
const theHobbit6 = new Book('The Hobbit 6', 'J.R.R. Tolkein', 295, true);
const theHobbit7 = new Book('The Hobbit 7', 'J.R.R. Tolkein', 295, true);
const theHobbit8 = new Book('The Hobbit 8', 'J.R.R. Tolkein', 295, false);
const theHobbit9 = new Book('The Hobbit 9', 'J.R.R. Tolkein', 295, true);
const theHobbit10 = new Book('The Hobbit 10', 'J.R.R. Tolkein', 295, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);
addBookToLibrary(theHobbit3);
addBookToLibrary(theHobbit4);
addBookToLibrary(theHobbit5);
addBookToLibrary(theHobbit6);
addBookToLibrary(theHobbit7);
addBookToLibrary(theHobbit8);
addBookToLibrary(theHobbit9);
addBookToLibrary(theHobbit10);

displayAllBooks();

// display dialog
addButton.addEventListener("click", () => {
    addDialog.showModal();
});

// add book
confirmAddBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent form from submitting to server
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const newBook = new Book(title, author, pages, false);
    addBookToLibrary(newBook);
    addDialog.close();

    // reload contents
    clearAllBooks();
    displayAllBooks();
});