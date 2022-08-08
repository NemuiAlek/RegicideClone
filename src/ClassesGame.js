class Game{
    constructor(playerCards, Jacks, Queens, Kings){
        this.playerDeck = playerCards;
        this.enemyJacks = Jacks;
        this.enemyQueens = Queens;
        this.enemyKings = Kings;
        this.discardDeck = [];
        this.deadDeck = [];
        this.playerHand = [];
        this.playArea = [];
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

    drawCards(num){
        num --;
        for(let i = num; i>=0; i--){
            if(this.playerHand.length === 7){
                return
            } else {
            this.playerHand.push(this.playerDeck[i]);
            this.playerDeck.splice(i,1)
            }
        }
    };

    intoPlayArea(card){
        this.playArea.push(card)
        this.playerHand.splice(card,1)
    };

    removePlayArea(card){
        this.playArea.splice(card,1)
        this.playerHand.push(card)
    };

    Attack(enemy){

    };
    
}