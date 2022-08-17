class Card {
    constructor(type, src, num) {
        this.type = type;
        this.src = src;
        this.value = num
    }
}

class Enemy extends Card {
    constructor(type, src, hp, str, label){
        super(type, src);
        this.health = hp;
        this.strength = str;
        this.enemyLabel = label
    }
}
