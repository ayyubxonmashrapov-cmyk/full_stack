const arrLength = (arr) => {
    let count = 0;
    for (let i of arr) {
        count++;
    }
    return count;
}

console.log(arrLength([1,2,3,4,5]))