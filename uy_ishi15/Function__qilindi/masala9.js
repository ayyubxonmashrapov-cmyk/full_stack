function numsSum(...nums){
    return nums.reduce((a, b) => a + b)
}

console.log(numsSum(1,2,3,4,5))