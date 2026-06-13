class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    getInfo(){
        const info = []
        for (let i in this){
            // if (typeof i !== typeof function(){})
            info.push(this[i])
        }
        return info
    }
};

class Doctor extends Person {
    constructor(name, age, yonalish){
        super(name, age);
        this.yonalish = yonalish;
    }
};

class Patient extends Person {
    constructor(name, age, shikoyat){
        super(name, age);
        this.shikoyat = shikoyat;
    }
};

const odam1 = new Doctor("Ali", 35, "LOR");
const odam2 = new Patient("Vsli", 31, "rinit");

console.log(odam1.getInfo())
console.log(odam2.getInfo())
