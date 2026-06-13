const object = {
    salary: true
}


Object.defineProperty(object, 'salary', {writable: false});
Object.defineProperty(object, 'salary', {enumerable: false});
Object.defineProperty(object, 'salary', {configurable: false});

delete object.salary
object.salary = "Ali"

console.log(object);