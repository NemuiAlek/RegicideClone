class Enenmy {
    constructor(type) {
        this.type = type;
        this.health = 0;
        this.strength = 0;
    }

    receiveDamage () {

    }

}

class King extends Enenmy {
    super(type);
    this.health = 40;
    this.strength = 20;
}

class Queen extends Enenmy {
    super(type);
    this.health = 30;
    this.strength = 15;
}

class Juggernauts extends Enenmy {
    super(type);
    this.health = 20;
    this.strength = 10;
}