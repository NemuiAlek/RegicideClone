class GameRules{
    constructor(gameCards){
        this.gameDeck = gameCards;
        this.discardDeck = [];
        this.deadDeck = [];
    }

    shuffleCards(shuffleDeck) {
        let cCard, zRandomIndex
          for (let i=shuffleDeck.length - 1; i>0; i--){
            zRandomIndex = Math.floor(Math.random()*(i+1));
             cCard = shuffleDeck[i];
             shuffleDeck[i] = shuffleDeck[zRandomIndex];
             shuffleDeck[zRandomIndex] = cCard;
          }
          return shuffleDeck
      }

    drawCards(num, pHand){
        num --;
        for(let i = num; i>=0; i--){
            if(pHand.length === 8){
                return
            } else {
            pHand.push(this.gameDeck[i]);
            this.gameDeck.splice(i,1)
            }
        }
    };
}

class EnemyRules {
    constructor(Jacks, Queens, Kings){
    this.enemyJacks = Jacks;
    this.enemyQueens = Queens;
    this.enemyKings = Kings;
    }

    Attack(enemy){

    };
}

class PlayerRules{
    constructor(){
    this.playerHand = [];
    this.playArea = [];
    }

    intoPlayArea(index){
    let inPlay = this.playArea.length;
        if (inPlay >= 0) {
            this.playArea.push(this.playerHand[index])
            this.playerHand.splice(index,1)
            // console.log(this.playerHand)
            // console.log(this.playArea)
            } else {
                return
            }
    };
3
    removePlayArea(card){
        this.playArea.splice(card,1)
        this.playerHand.push(card)
    };

}

// class Card {
//     constructor(suite, value) {
//         this.suite = suite;
//         this.value = value;
//         this.cardImage = ""
//     }

//     setCardImage () {
//         this.cardImage = ``
//     }
// }
// let S1 = new Card("s", 1)
// let S2 = new Card("s", 2)
// let S3 = new Card("s", 3)
// let S4 = new Card("s", 4)
// let S5 = new Card("s", 5)
// let S6 = new Card("s", 6)
// let S7 = new Card("s", 7)
// let S8 = new Card("s", 8)
// let S9 = new Card("s", 9)
// let S10 = new Card("s", 10)

// let C1 = new Card("c", 1)
// let C2 = new Card("c", 2)
// let C3 = new Card("c", 3)
// let C4 = new Card("c", 4)
// let C5 = new Card("c", 5)
// let C6 = new Card("c", 6)
// let C7 = new Card("c", 7)
// let C8 = new Card("c", 8)
// let C9 = new Card("c", 9)
// let C10 = new Card("c", 10)

// let H1 = new Card("h", 1)
// let H2 = new Card("h", 2)
// let H3 = new Card("h", 3)
// let H4 = new Card("h", 4)
// let H5 = new Card("h", 5)
// let H6 = new Card("h", 6)
// let H7 = new Card("h", 7)
// let H8 = new Card("h", 8)
// let H9 = new Card("h", 9)
// let H10 = new Card("h", 10)

// let D1 = new Card("d", 1)
// let D2 = new Card("d", 2)
// let D3 = new Card("d", 3)
// let D4 = new Card("d", 4)
// let D5 = new Card("d", 5)
// let D6 = new Card("d", 6)
// let D7 = new Card("d", 7)
// let D8 = new Card("d", 8)
// let D9 = new Card("d", 9)
// let D10 = new Card("d", 10)
// // console.log(S1)

// // console.log(S1.value)
// // console.log(S1.suite)
// // console.log(S10.value)