const book = {
    radius: 3,
    get getDiameter(){
        return this.radius * 2;
    }
}

console.log(book.getDiameter)