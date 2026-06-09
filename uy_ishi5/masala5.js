const sum = function(arr){
    return arr.reduce((acc, item) => acc *= item);
}

console.log(sum([1,2,3,4,5]))