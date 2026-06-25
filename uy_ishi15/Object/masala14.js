function saveObjNumValues(obj){
    for (let i in obj){
        if (typeof obj[i] != "number"){
            delete obj[i]
        }
    }

    return obj
}

console.log(saveObjNumValues({a:1,b:'x',c:3}))