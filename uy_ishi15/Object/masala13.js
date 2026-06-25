const objValueBormi = function(obj , value){
    for (let i in obj){
        if (obj[i] == value){
            return i
        }
    }
}

console.log(objValueBormi({a:5,b:9}, 7))