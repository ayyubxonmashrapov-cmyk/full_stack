function n(arr){
    const result = [];
    for (let i of arr){
        if (i['age'] > 18) result.push(i['name']);
    }

    return result
}



const arr = [
{ name: "Ali", age: 20 },
{ name: "Vali", age: 17 },
{ name: "Sami", age: 25 }
]

console.log(n(arr))