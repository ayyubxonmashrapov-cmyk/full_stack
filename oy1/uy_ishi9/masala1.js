class Animal {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Dog extends Animal {
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;
    }
    getInfo(){
        return `${this.name}, ${this.age}, ${this.breed}`;
    }
}

const dog1 = new Dog("bobik", 2, "alabay");

console.log(dog1.getInfo())