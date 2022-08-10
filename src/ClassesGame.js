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
            if(pHand.length === 7){
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

    intoPlayArea(card){
        this.playArea.push(card)
        this.playerHand.splice(card,1)
    };

    removePlayArea(card){
        this.playArea.splice(card,1)
        this.playerHand.push(card)
    };

}