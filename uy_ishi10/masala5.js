class Student {
    #grades = [];
    static maxGrade = 100;

    cosntructor(name, age){
        this.name = name;
        this.age = age;
        this.#grades;
    }
    
    set addGrade(score){
        if (0 <= score <= Student.maxGrade)
        this.#grades.push(score);
    }
    
    get getAverage(){
        return (this.#grades.reduce((a,b) => a += b) / this.#grades.length).toFixed(2);
    }
    
    
    
}

const ayyub = new Student("Ayyub", 19);

ayyub.addGrade = 100;
ayyub.addGrade = 99;
ayyub.addGrade = 100;

console.log(ayyub.getAverage)