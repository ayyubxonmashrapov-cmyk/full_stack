const obj = {
    ism: "ali",
    yosh: 12,
    guruh: 2
} 

const objProretriesCount = function(obj){
    let count = 0;
    for (let i in obj)
        ++count;

    return count
}

console.log(objProretriesCount(obj))