const book = { 
    title: 0,

    set setTitle(text){
        if (!text) return false
        this.title = text
        return true
    }
}


book.setTitle = "2004";

console.log(book)
