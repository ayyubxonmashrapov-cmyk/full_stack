const book = { 
    price: 0,

    set setPrice(n){
        if (typeof n == typeof "") return false
        this.price = n
        return true
    }
}


book.setPrice = 12;

console.log(book)
