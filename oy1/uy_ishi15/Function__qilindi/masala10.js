const powTwo = function(n){
    return n ** 2;
}

const myMap = (arr, callback) => {
    for (let i = 0; i < arr.length; i++){
        arr[i] = callback(arr[i])
    }
    return arr;
}

console.log(myMap([1,2,3,4,5], powTwo))