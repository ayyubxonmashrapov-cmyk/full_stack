function arrayRotation(arr, n){
    if (arr.length < n){
        let k = n / arr.length;
        k -= k % 1; 
        n -= arr.length * k;
    }
    
    for(let i = 0; i < n; i++){
        arr.unshift(arr.pop())
    }
    
    return arr;
}

console.log(arrayRotation([1,2,3,4,5], 23))