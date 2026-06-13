function showPropertyDescriptors(obj){
    const result = []
    for (let i in obj){
        result.push(Object.getOwnPropertyDescriptor(obj, i))
    }
    return result
}

const user = {
    id: 1,
    username: "name",
    password: "parol123"    
};

Object.defineProperty(user, 'password', {enumerable: false});


console.log(showPropertyDescriptors(user))
