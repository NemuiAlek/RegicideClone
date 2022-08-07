class Enenmy {
    constructor(type) {
        this.type = type;
        this.health = 0;
        this.strength = 0;
    }

    receiveDamage = function () {
        return 
    }

}

class King extends Enenmy {
    constructor(type){
        super(type);
        this.health = 40;
        this.strength = 20;
    }
}

class Queen extends Enenmy {
    constructor(type){
    super(type);
    this.health = 30;
    this.strength = 15;
    }
}

class Jack extends Enenmy {
    constructor(type){
    super(type);
    this.health = 20;
    this.strength = 10;
    }
} 


let test1 = new King("s")
let test2 = new Jack("s")
let test3 = new Queen("s")

console.log(test1)
console.log(test2)
console.log(test3)

class Game{
    constructor(Spades, Clubs, Hearts, Diamonds, Jacks, Queens, Kings){
        this.deck = []
    }


    shuffleCards() {
        let cCard, zRandomIndex
          for (let i=this.cards.length - 1; i>0; i--){
            zRandomIndex = Math.floor(Math.random()*(i+1));
             cCard = this.cards[i];
             this.cards[i] = this.cards[zRandomIndex];
             this.cards[zRandomIndex] = cCard;
          }
          return this.cards
      }
}