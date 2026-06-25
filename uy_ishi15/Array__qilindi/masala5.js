const bormi = (arr, n) => {
    for (let i of arr){
        if (i === n){
            return true
        }
    }
    return false
}

console.log(bormi([1,2,3,4,5], 9))