function tubSonlar(a, b){
    if (a >= b) return [];

    const arr = [];
    a >= 2 ? arr.push(2) : NaN;
    
    for(let i = 3; i < b; i+=2){
        let check = true
        for(let j = 3; j * j <= i; j+=3){
            if (!(i%j)) check = false
        }
        if(check) arr.push(i)
    }
    return arr
}

console.log(tubSonlar(0, 1)) // [2, 3, 5, 7]
console.log(tubSonlar(10, 20)) // [11, 13, 17, 19]
console.log(tubSonlar(8, 10)) // []