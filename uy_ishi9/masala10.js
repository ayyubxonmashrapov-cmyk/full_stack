class Account {
    constructor(owner){
        this.owner = owner;
        this.balance = 0;
    }

    getBalance(){
        return this.balance;
    }
}

class DepositAccount extends Account {
    constructor(owner, balance){
        super(owner);
        this.balance += balance;
    }

    getBalance(){
        return this.balance;
    }
}

class PremiumDepositAccount extends DepositAccount {
    constructor(owner, balance, interestRate){
        super(owner, balance);
        this.interestRate = interestRate;
    }

    getBalance(){
        return this.balance + this.balance * (this.interestRate / 100)
    }
}

const acc = new Account("he");

const dAcc = new DepositAccount("you", 1000);

const pDAcc = new PremiumDepositAccount("that", 1000, 10);

console.log(acc.getBalance())
console.log(dAcc.getBalance())
console.log(pDAcc.getBalance())