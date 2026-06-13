const book = { 
    maosh: 0,

    set setMaosh(n){
        if (n < 0) return false
        else this.maosh = n
        return true
    }
}


book.setMaosh = 100;

console.log(book)
