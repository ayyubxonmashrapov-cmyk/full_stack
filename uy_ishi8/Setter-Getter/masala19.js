const book = { 
    radius: 0,

    set setRadius(n){
        if (n < 0) return false
        this.radius = n
        return true
    }
}


book.setRadius = 2004;

console.log(book)
