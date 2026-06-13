const book = { 
    username: 0,

    set setUsername(text){
        this.username = text.toLowerCase()
        return true
    }
}


book.setUsername = "AOAO";

console.log(book)
