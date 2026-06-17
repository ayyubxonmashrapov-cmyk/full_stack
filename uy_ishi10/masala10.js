class Phone {
    static maxBattery = 100;
    static minBattery = 0;
    #battery = 0;
    
    charge(amount){
        this.#battery += amount;
        if (this.#battery > Phone.maxBattery) this.#battery = 100;
    }
    
    use(amount){
        this.#battery -= amount;
        if (this.#battery < Phone.minBattery) this.#battery = 0;
    }
    
    get getBattery(){
        return this.#battery;
    }
}

const p1 = new Phone();

p1.charge(120);
console.log(p1.getBattery);

p1.use(130);
console.log(p1.getBattery);

