const book = {
    username: "name",

    get title(){
        return this.username.toUpperCase()
    }
}

console.log(book.title)