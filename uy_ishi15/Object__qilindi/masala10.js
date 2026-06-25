function obj1(obj1){
    return function(obj2){
        for (let i in obj2){
            if (!(i in obj1)){
                obj1[i] = obj2[i]
            }
        }
        return obj1
    }
}

const object1 = {
    ism: "ali",
    yosh: 12,
} 

const object2 = {
    yosh: 12,
    guruh: 2
}

const o1 = obj1(object1);
console.log(o1(object2))
