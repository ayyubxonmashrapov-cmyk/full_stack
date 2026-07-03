class User {
    cunstructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Customer extends User {
    constructor(name, age, ordersCount){
        super(name, age);
        this.ordersCount = ordersCount;
    }

    isVip(){
        return this.ordersCount > 20;
    }
}

const cust1 = new Customer("Ayyub", 19, 6);

console.log(cust1.isVip())