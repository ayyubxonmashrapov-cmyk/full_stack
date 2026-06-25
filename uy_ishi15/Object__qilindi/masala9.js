const objKeyValueReverse = function(obj){
    const obj1 = {}
    for (let i in obj){
        obj1[obj[i]] = i
    }
    return obj1
}

const obj = {
    ism: "ali",
    yosh: 12,
    guruh: 2
} 


console.log(objKeyValueReverse(obj))