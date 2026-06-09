function setBer(arr){
    const arr1 = [];
    for (let i of arr){
        if (!(arr1.includes(i))){
            arr1.push(i)
        }
    }
    return arr1
}

console.log(setBer([1,2,3,4,5,6,6,5,4,3]))