const student = {
    accountNumber: 123,
    owner: "Ali Valiyev",
    balance: 1200
}

Object.defineProperty(student, 'accountNumber', {writable: false});
Object.defineProperty(student, 'accountNumber', {configurable: false});

(function (obj){
    const result = []
    for (let i in obj){
        result.push(Object.getOwnPropertyDescriptor(obj, i))
    }
    console.log(result)
}(student))