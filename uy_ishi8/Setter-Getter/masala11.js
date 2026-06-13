const temperature = { 
    firstName: "",
    lastName: "",

    set fullName(text){
        full = text.split(" ");
        this.firstName = full[0];
        this.lastName = full[1]
    }
}


temperature.fullName = "Ali Valiyev"

console.log(temperature)
