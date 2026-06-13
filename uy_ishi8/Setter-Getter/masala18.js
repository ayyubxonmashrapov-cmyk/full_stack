const book = { 
    year: 0,

    set setYear(n){
        if (n < 1900) return false
        this.year = n
        return true
    }
}


book.setYear = 2004;

console.log(book)
