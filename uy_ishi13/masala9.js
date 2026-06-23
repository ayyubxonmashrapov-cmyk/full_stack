function merge(arr1, arr2){
    return arr1.concat(arr2).sort((a,b) => a-b);
}

console.log(merge([1,3,5], [2,4,6]))