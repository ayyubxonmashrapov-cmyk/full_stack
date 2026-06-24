const anagramma = function(a, b){
    if (typeof a == "string" && typeof b == "string"){
        return a == b.split("").reverse().join("")
    }   
    if (typeof a == "number" && typeof b == "number"){
        return String(a) == String(b).split("").reverse().join("")
    }
}


console.log(anagramma("tom", "mot")) // true
console.log(anagramma("olma", "lamo")) // true
console.log(anagramma(101, 101))// false