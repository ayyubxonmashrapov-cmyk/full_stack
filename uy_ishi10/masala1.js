class BankAccount {
    #balance = 0;
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    
    set deposit(amount){
        this.#balance += amount;
    };
    
    set withdraw(amount){
        if (this.#balance > amount){
            this.#balance -= amount;
            console.log(`your ${amount} money`)
        } else console.log(`not enough`)
    }
    
    get getBalance(){
        return this.#balance
    }
}

const acc = new BankAccount();

console.log(acc.getBalance);

acc.deposit = 1100;

console.log(acc.getBalance);

acc.withdraw = 1200;

acc.withdraw = 500;

console.log(acc.getBalance)
