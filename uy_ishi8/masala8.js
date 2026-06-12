const user = {};

Object.defineProperties(user, {
    name: {
        value: "Ayyub",
        writable: false,
        configurable: false,
        enumerable: true
    },
    age: {
        value: 19,
        writable: false,
        configurable: false,
        enumerable: true
    },
    id: {
        value: 1,
        writable: false,
        configurable: false,
        enumerable: true
    }
});

delete user.id
user.name = "Ali"

console.log(user);