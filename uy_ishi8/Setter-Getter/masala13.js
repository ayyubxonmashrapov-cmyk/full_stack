const book = { 
    balance: 10,

    set setBalans(n){
        if (n * -1 > this.balance) return false
        else this.balance += n
        return true
    }
}


book.setMaosh = -9;

console.log(book)
