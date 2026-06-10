const hmm = function(arr){
    const set1 = new Set(arr);
    const result = [];

    for (let i of set1){
        let count = 0;
        while (arr.includes(i)){
            ++count;
            arr.splice(arr.indexOf(i), 1)
        }
        if (count == 1){
            result.push(i)
        }
    } 

    return result
}

console.log(hmm([1,2,3,4,5,2,3,4,5,5,43,2,3,5,4,9,0]))