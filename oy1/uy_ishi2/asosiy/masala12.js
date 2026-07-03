function culcSum(n) {
    let longest = Object.values(obj).reduce((a, b) =>
    a.length > b.length ? a : b
    );

    return longest
}

obj ={
name: "Ali",
age: "fasfa",
score: "as"
}

console.log(culcSum(obj))