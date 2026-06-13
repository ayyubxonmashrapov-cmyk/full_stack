class Employee {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Developer extends Employee {
    constructor(name, age, language, salary){
        super(name, age);
        this.language = language;
        this.salary = salary;
    }

    calculateSalary(){
        return this.salary
    }
}

class Designer extends Employee {
    constructor(name, age, skill, salary){
        super(name, age);
        this.skill = skill;
        this.salary = salary;
    }

    calculateSalary(){
        return this.salary
    }
}

class Manager extends Employee {
    constructor(name, age, experience, salary){
        super(name, age);
        this.experience = experience;
        this.salary = salary;
    }

    calculateSalary(){
        return this.salary
    }

    setBonus(amount){
        this.salary += this.salary * (amount / 100) 
        return true
    }
}


const person1 = new Developer("Eshmat", 25, "JS", 19000000);

const person2 = new Designer("G'ishmat", 21, "something", 140000000);

const person3 = new Manager("Toshmat", 32, "6-year", 21000000);

console.log(person1.calculateSalary())
console.log(person2.calculateSalary())
console.log(person3.calculateSalary())


person3.setBonus(5)

console.log(person3.calculateSalary())
