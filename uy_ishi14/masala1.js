function tubmi(num){
    if (num < 2) return false
    if ([2, 3].includes(num)) return true
    for(let i = 5; i <= num/2+1; i+=2){
        if(!(num%i)) return false
    }
    return true
}

console.log(tubmi(7)) // true
console.log(tubmi(10)) // false
console.log(tubmi(1)) // false