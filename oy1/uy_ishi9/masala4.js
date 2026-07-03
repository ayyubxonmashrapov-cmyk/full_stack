class Person {
    construstor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Teacher extends Person {
    constructor(name, age, subject, experience){
        super(name, age);
        this.subject = subject;
        this.experience = experience;
    }

    isSenior(){
        return (this.experience >= 5) ? "Senior Teacher" : "not Senior Teacher";
    }
}

const fizik = new Teacher("Ali", 31, "fizika", 7);

console.log(fizik.isSenior())
console.log(fizik)
