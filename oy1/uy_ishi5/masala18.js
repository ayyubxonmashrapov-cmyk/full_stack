function unical(arr){
    const count = {}; 
    let result = []
    for (let i of arr){
        if (i in count) ++count[i];
        else count[i] = 1;
    }

    let maxE = String(arr[0])
    for (let i in count){
        if (count[i] > count[maxE]) maxE = i
    }

    return maxE
}

console.log(unical([1,1,1,12,3,4,4,4,4,2,2,4,1,2]))