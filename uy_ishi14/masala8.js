const noyob = function(arr){
    return [... new Set(arr)]
}



console.log(noyob([1, 2, 2, 3, 3, 3])) // [1, 2, 3]
console.log(noyob([5, 5, 5])) // [5]
console.log(noyob([1, 2, 3])) // [1, 2, 3]