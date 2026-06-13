class Payment {
    constructor(amount){
        this.amount = amount;
    }
}

class CardPayment extends Payment {
    constructor(amount, cardNumber){
        super(amount);
        this.cardNumber = cardNumber;
    }
}

class UzCardPaymant extends CardPayment {
    constructor(amount, cardNumber, owner){
        super(amount, cardNumber);
        this.owner = owner;
    }
}

const pay1 = new UzCardPaymant(100, 1234, "ali valiyev")

console.log(pay1)