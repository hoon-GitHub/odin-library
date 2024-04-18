const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`);
    };
}

function addBookToLibrary() {
    
}

function displayAllBooks() {

}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkein', 295, false);
theHobbit.info();