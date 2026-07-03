class Character {
    constructor(name){
        this.name = name;
    }
}

class Warrior extends Character {
    constructor(name, damage){
        super(name);
        this.damage = damage;
    }

    getDamageAmount(){
        return this.damage
    }
}

const user = new Mage("aoao", 120);

console.log(book.getDamageAmount())