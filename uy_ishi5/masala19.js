function flatSum(arr){
    return arr.flat(Infinity).reduce((a,b) => a += b)
}

console.log(flatSum([[1, 2], [3, 4], [5]]))