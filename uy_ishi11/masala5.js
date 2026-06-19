class BankAccount {
    #balans = 0;
    
    constructor(balans){
        this.balans = balans;
    }
    
    deposit(amount){
        if (amount <= 0){
            throw new Error("Amount' not correct")
        this.balans += amount;
    }    
}

    withdraw(amount){
        if (this.balans < amount){
            throw new Error("Balance' not enough funds")
        }
        this.balans -= amount
    }
    
    getBalance(amount){
        return this.balans;
    }
}

try{
    const acc = new BankAccount(100);
    acc.deposit(50);
    acc.withdraw(200);
} catch(err){
    console.log(err)
}