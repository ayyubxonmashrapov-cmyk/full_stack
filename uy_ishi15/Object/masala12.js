const obj = {
    ism: "ali",
    yosh: 12,
    guruh: 2
} 

const obj1 = {...obj}
obj1.ism = "vali";

console.log(obj, obj1)