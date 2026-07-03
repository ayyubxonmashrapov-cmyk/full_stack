class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    constructor(name, age, year){
        super(name, age);
        this.year = year;
    }
}

class GraduateStudent extends Student {
    constructor(name, age, year, totalScore){
        super(name, age, year);
        this.totalScore = totalScore;
    }
}