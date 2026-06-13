const book = {
    title: "title",
    author: "author",

    get description(){
        const result = [];
        for (let i in this){
            result.push(Object.getOwnPropertyDescriptor(this, i));
        }
        return result
    }
}

console.log(book.description)
