class Car {
    static maxSpeed = 300;
    
    #speed = 0;
    
    constructor(brand){
        this.brand = brand;
        this.#speed;
    }
    
    set accelerate(value){
        this.#speed += value;
        
        if (this.#speed > Car.maxSpeed) this.#speed = 300;
        
    }    
    
    set brake(value){
        this.#speed -= value;
        
        if (this.#speed < 0) this.#speed = 0;
    }
    
    get getSpeed(){
        return this.#speed;
    }
}

const car1 = new Car();

car1.accelerate = 100;

console.log(car1.getSpeed);

car1.accelerate = 150;

console.log(car1.getSpeed);

car1.accelerate = 100;

console.log(car1.getSpeed)

car1.brake = 250;

console.log(car1.getSpeed)

car1.brake = 100;

console.log(car1.getSpeed)
