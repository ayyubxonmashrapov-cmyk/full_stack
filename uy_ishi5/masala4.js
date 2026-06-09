function juftToq(arr){
    const arr1 = [];
    for (let i of arr){
        (i % 2) ? arr1.push("to,q") : arr1.push("juft")
    }

    return arr1
}

console.log(juftToq([1,2,3,4,5]))