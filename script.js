const myLibrary = [];
const contents = document.querySelector('.contents');
const addDialog = document.querySelector('dialog');
const addButton = document.querySelector('.add');
const confirmAddBtn = document.querySelector("#confirmAdd");

// Rewritten the Book constructor into a class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    // convert the info method to a getter
    get info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`;
    }

    // new setters as utility
    set newTitle(newTitle) {
        this.title = newTitle;
    }
    set newPages(newPages) {
        this.pages = newPages;
    }

}

// add book to myLibrary[]
function addBookToLibrary(book) {
    console.log(book.info);
    myLibrary.push(book);
}

// clear the contents for reload
function clearAllBooks() {
    while (contents.firstChild) {
        contents.firstChild.remove();
    };
}

// display all books in myLibrary[] - create cards
function displayAllBooks() {
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.index = i;
        contents.appendChild(card);

        const title = document.createElement('h3');
        title.classList.add('title');
        title.innerText = myLibrary[i].title;
        card.appendChild(title);

        const author = document.createElement('h5');
        author.classList.add('author');
        author.innerText = myLibrary[i].author;
        card.appendChild(author);

        const pages = document.createElement('h6');
        pages.classList.add('pages');
        pages.innerText = myLibrary[i].pages + " pages";
        card.appendChild(pages);

        // add read button
        const read = document.createElement('button');
        read.classList.add('read');
        myLibrary[i].read ? read.classList.add('yes') : read.classList.add('no');
        read.innerText = "Read: " + (myLibrary[i].read ? "Yes" : "No");
        card.appendChild(read);

        // toggle read button and reload
        read.addEventListener('click', () => {
            myLibrary[i].read = !myLibrary[i].read;
            clearAllBooks();
            displayAllBooks();
        });

        // add remove button
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('remove');
        removeBtn.innerText = "Remove";
        card.appendChild(removeBtn);

        // remove book from library and reload
        removeBtn.addEventListener('click', () => {
            myLibrary.splice(i, 1);
            clearAllBooks();
            displayAllBooks();
        });
    };
}

// create some sample books
const book1 = new Book('The Hobbit', 'J.R.R. Tolkein', 295, false);
const book2 = new Book('Don Quixote', 'Miguel de Cervantes', 150, false);
const book3 = new Book('A Tale of Two Cities', 'Charles Dickens', 300, true);
const book4 = new Book('The Little Prince', 'Antoine de Saint-Exupery', 150, false);
const book5 = new Book('The Alchemist', 'Paulo Coelho', 163, false);
const book6 = new Book('Harry Potter', 'J.K. Rowling', 400, true);
const book7 = new Book('And Then There Were None', 'Agatha Christie', 272, true);
const book8 = new Book('Dream of the Red Chamber', 'Cao Xueqin', 500, false);
const book9 = new Book('The Da Vinci Code', 'Dan Brown', 689, true);
const book10 = new Book('Cosmos', 'Carl Sagan', 365, false);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);
addBookToLibrary(book6);
addBookToLibrary(book7);
addBookToLibrary(book8);
addBookToLibrary(book9);
addBookToLibrary(book10);

// testing setter function
book1.newTitle = 'The Hobbit 2';
book6.newPages = 1000;

displayAllBooks();

// display dialog when add book button is clicked
addButton.addEventListener("click", () => {
    addDialog.showModal();
});

// add new book
confirmAddBtn.addEventListener("click", (e) => {
    e.preventDefault(); // prevent form from submitting to server
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const newBook = new Book(title.value, author.value, pages.value, false);
    if (title !== "") addBookToLibrary(newBook); // if title is empty, do not add book
    addDialog.close();

    // reload contents
    clearAllBooks();
    displayAllBooks();

    // clear out input fields
    title.value = "";
    author.value = "";
    pages.value = "";
});
