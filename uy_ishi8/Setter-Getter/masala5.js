const book = {
    math: 5,
    english: 3,
    physics: 4,

    get avarage(){
        return (this.math + this.english + this.physics) / 3
    }
}

console.log(book.avarage)