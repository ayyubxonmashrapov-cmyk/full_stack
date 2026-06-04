function moreProperty(obj, obj1) {
    return Object.entries(obj).length > Object.entries(obj1).length ? obj : obj1  
}

obj = {
math: 85,
physics: 90,
english: 78
}
obj1 = {
name: "Ali",
age: 20,
score: 95,
something: 12 
}

console.log(moreProperty(obj, obj1))