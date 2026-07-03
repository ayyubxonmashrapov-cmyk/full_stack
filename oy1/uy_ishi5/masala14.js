function tubBormi(arr){
    for (let i of arr){
        let a = true;
        for (let j = 2; j < i; j++){
            if (!(i % j)) a = false 
        }
        if (a && i !== 1) return true
    }
    return false
}

console.log(tubBormi([1,4,6]))
