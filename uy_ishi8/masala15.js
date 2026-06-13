const bankAccount = {
    accountNumber: 123,
    owner: "Ali Valiyev",
    balance: 1200
}

Object.defineProperty(bankAccount, 'accountNumber', {writable: false});
Object.defineProperty(bankAccount, 'accountNumber', {configurable: false});

(function (obj){
    const result = []
    for (let i in obj){
        result.push(Object.getOwnPropertyDescriptor(obj, i))
    }
    console.log(result)
}(bankAccount))