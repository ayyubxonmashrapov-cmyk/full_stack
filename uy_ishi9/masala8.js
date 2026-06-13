class Course {
    constructor(name){
        this.name = name;
    }
}

class ProgrammingCourse extends Course {
    constructor(name, language, studentsCount){
        super(name);
        this.language = language;
        this.studentsCount = studentsCount;
    }

    getStudentsCount(){
        return this.studentsCount;
    }
}

const java = new ProgrammingCourse("something", "Java", 14);

console.log(java.getStudentsCount())