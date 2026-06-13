class Character {
    constructor(name){
        this.name = name;
    }
}

class Mage extends Character {
    constructor(name, mana){
        super(name);
        this.mana = mana;
    }

    getSpellPower(){
        return this.mana
    }
}

const user = new Mage("aoao", 120);

console.log(user.getSpellPower())