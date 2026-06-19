const firstUnique = function(arr){
    const obj = {};
    for (let i of arr){
        if (i in obj){
            obj[i] += 1;
        } else {
            obj[i] = 1;
        }
    }
    
    for (let i in obj)
        if (obj[i] == 1)
            return i;
    
    return null;
}

console.log(firstUnique([1, 2, 2, 3, 1, 4]));
console.log(firstUnique(["a", "b", "a", "b"]));
