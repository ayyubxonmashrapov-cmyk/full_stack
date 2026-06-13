const person = {
    firstName: "Ali",
    lastName: "Valiev",

    get fullName(){
        return this.firstName + " " + this.lastName; 
    }
}

console.log(person.fullName)