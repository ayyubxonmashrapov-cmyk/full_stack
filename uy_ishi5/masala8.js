const arrow = (arr) => {
    let count = 0;
    for (let i of arr){
        if (i >= 0) ++count; 
    }
    return count;
}

console.log(arrow([1,2,4,5,3,-1,-3,-1]))