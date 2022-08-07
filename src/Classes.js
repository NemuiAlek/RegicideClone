class Enenmy {
    constructor(type) {
        this.type = type;
        this.health = 0;
        this.strength = 0;
    }
    // this would be to reduce the health 
    receiveDamage = function () {
        return 
    }
    // this would be to reduce the strength after we do certain attacks to the enemey 
    strengthDecrease = function () {
        return 
    }
    

}
// I told you we needed the constructor in the extended classes lol 
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

    // Did you take this from the hero shufflecards?
    // We need to shuffle from the deck of players and then randomly disperse and unhide 8 cards
    
    //yea, i just copied an pasted the code lol, was going to fix it later tonight.
    // also, card limit is 7, not 8!
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