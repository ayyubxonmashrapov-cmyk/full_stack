const objValuesSum = (obj) => {
    let sum = 0;
    for (let i in obj){
        sum += obj[i]
    }
    return sum;
}

console.log(objValuesSum({a:10,b:20,c:30}))