const account = {
    balance: 1000
}

Object.defineProperty(account, 'balance', {enumerable: false})

console.log(Object.getOwnPropertyDescriptor(account, 'balance'))