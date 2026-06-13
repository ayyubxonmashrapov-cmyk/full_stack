const book = {
    isbn: true
}

Object.defineProperty(book, 'isbn', {writable: false});
Object.defineProperty(book, 'isbn', {configurable: false});

console.log(Object.getOwnPropertyDescriptor(book, 'isbn'))