const book = { 
    score: 0,

    set setScore(n){
        if (n < 0 || n > 100) return false
        else this.score = n
        return true
    }
}


book.setMaosh = 100;

console.log(book)
