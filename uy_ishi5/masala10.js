const avg = function(arr){
    return arr.reduce((acc, item) => acc += item) / arr.length
}

console.log(avg([1,2,4,5,3]))