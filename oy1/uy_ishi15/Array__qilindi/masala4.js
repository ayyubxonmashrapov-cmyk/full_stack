function reverseArr(arr){
    const arr1  = [];
    for (let i = arr.length; i > 0; i--) {
        arr1.push(i);
    }

    return arr1
}

console.log(reverseArr([1, 2, 3, 4]))