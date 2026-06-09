const arrow = (arr) => {
    return arr.flat(Infinity)
}

console.log(arrow([1,2,3,[[[[3,3]]]]]))