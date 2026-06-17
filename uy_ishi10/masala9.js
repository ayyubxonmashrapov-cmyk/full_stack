class LibraryBook {
    #isBorrowed = false;
    
    static totalBooks = 0;
    
    constructor(title){
        ++LibraryBook.totalBooks;
        this.title = title;
        this.#isBorrowed;
    }
    checkBook(){
        return this.#isBorrowed;
    }
    
    borrow(){
        this.#isBorrowed = true;
    }

    returnBook(){
        this.#isBorrowed = false;
    }
}

const book1 = new LibraryBook("title");
const book2 = new LibraryBook("title");
const book3 = new LibraryBook("title");

book1.borrow()

console.log(book1.checkBook())

console.log(book2.checkBook())

console.log(LibraryBook.totalBooks)