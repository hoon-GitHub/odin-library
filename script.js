const myLibrary = [];
const contents = document.querySelector('.contents');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`);
    };
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayAllBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        myLibrary[i].info();
        const card = document.createElement('div');
        card.classList.add('card');
        contents.appendChild(card);

        const title = document.createElement('h3');
        title.classList.add('title');
        title.innerText = myLibrary[i].title;
        card.appendChild(title);

        const author = document.createElement('h5');
        author.classList.add('author');
        author.innerText = myLibrary[i].author;
        card.appendChild(author);

        const pages = document.createElement('h5');
        pages.classList.add('pages');
        pages.innerText = "Pages: " + myLibrary[i].pages;
        card.appendChild(pages);

        const read = document.createElement('h5');
        read.classList.add('read');
        read.innerText = "Read: " + myLibrary[i].read;
        card.appendChild(read);
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, false);
const theHobbit2 = new Book('The Hobbit2', 'J.R.R. Tolkein', 295, false);
const theHobbit3 = new Book('The Hobbit3', 'J.R.R. Tolkein', 295, false);
const theHobbit4 = new Book('The Hobbit4', 'J.R.R. Tolkein', 295, false);
const theHobbit5 = new Book('The Hobbit5', 'J.R.R. Tolkein', 295, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theHobbit2);
addBookToLibrary(theHobbit3);
addBookToLibrary(theHobbit4);
addBookToLibrary(theHobbit5);