const book = {
    brand: "ford",
    model: "jtr",
    year: undefined,

    get getInfo(){
        return `${this.brand}, ${this.model}, ${this.year}`
    }
}

console.log(book.getInfo)