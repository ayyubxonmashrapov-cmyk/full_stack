class Book {
    cosntructor(title, author){
        this.title = title;
        this.author = author;
    }
}

class EBook extends Book {
    constructor(title, author, fileSize){
        super(title, author);
        this.fileSize = fileSize;
    }

    showSize(){
        return this.fileSize + " Mb";
    }
}

const book1 = new EBook("something", "someone", 2.3);

console.log(book1.showSize())