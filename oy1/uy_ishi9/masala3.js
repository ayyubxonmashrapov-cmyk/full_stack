class Account{
    constructor(owner, balance){
        this.owner = owner;
        this.balance = balance;
    }
}

class SavingsAccount extends Account {
    constructor(owner, balance, interestRate){
        super(owner, balance);
        this.interestRate = interestRate;
    }

    showBalanceWithPercent(){
        return this.balance + this.balance * (this.interestRate / 100);
    }
}

const acc = new SavingsAccount("someone", 1000, 10);

console.log(acc.showBalanceWithPercent())