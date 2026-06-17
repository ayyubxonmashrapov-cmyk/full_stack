class Calculator {
    static operationCount = 0;
    
    static getStats(){
        return Calculator.operationCount
    }
    
    add(a, b){
        ++Calculator.operationCount;
        return a+b;
    };
    subtract(a, b){
       ++Calculator.operationCount;
       return a-b;
    };
    multiply(a, b){
        ++Calculator.operationCount;
        return a*b;
    };
    divide(a, b){
        ++Calculator.operationCount;
        return +(a/b).toFixed(2);
    };
}

const user1 = new Calculator();
const user2 = new Calculator();

console.log(Calculator.getStats());

console.log(user1.add(2,4));
console.log(user1.subtract(2,4));

console.log("====", Calculator.getStats());

console.log(user2.multiply(2,4));
console.log(user2.divide(2,4));

console.log("=====", Calculator.getStats());
