function unical(arr){
    const count = {};
    let result = []
    for (let i of arr){
        if (i in count) ++count[i];
        else count[i] = 1;
    }

    for (let i in count){
        if (count[i] === 1) result.push(+i) 
    }

    return result
}



const arr = [1, 2, 2, 3, 4, 4, 5];

console.log(unical(arr))