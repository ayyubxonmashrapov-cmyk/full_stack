function culcSum(obj) {
    let values = []
    for (let value of Object.values(obj)){
        if (!values.includes(value)) values.push(value) 
    }
    return values
}


obj = {
ali: 78,
vali: 95,
sami: 88
}
console.log(culcSum(obj))