const secondMaxNum = (arr) => {
    return [...new Set(arr)].sort((a, b) => b - a)[1]
}

console.log(maxNum([1,2,3,4,5]))