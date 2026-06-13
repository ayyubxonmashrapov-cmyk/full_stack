const temperature = { 
    salary: 1200,
    bonus: 200,

    get totalIncome(){
        return this.salary + this.bonus;
    }
}

console.log(temperature.totalIncome)
