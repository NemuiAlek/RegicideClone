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

    intoPlayArea(cValue,index){
    let inPlay = this.playArea.length;
        if ((inPlay === 0) || /*Condition if play area is empty*/
            (inPlay === 1 && cValue === 1 && this.playArea[0].value != 1) || /*Condition to play Ace*/

            (cValue === 5 && inPlay === 1 && this.playArea[0].value === 5) || /*Condtion to fast play (5)*/

            (cValue === 4 && inPlay === 1 && this.playArea[0].value === 4) || /*Condtion to fast play (4)*/
            
            (cValue === 3 && inPlay === 1 && this.playArea[0].value === 3) ||
            (cValue === 3 && inPlay === 2 && this.playArea[1].value === 3) || /*Condtion to fast play (3)*/

            (cValue === 2 && inPlay === 1 && this.playArea[0].value === 2) ||
            (cValue === 2 && inPlay === 2 && this.playArea[1].value === 2) ||
            (cValue === 2 && inPlay === 3 && this.playArea[2].value === 2)  /*Condtion to fast play (2)*/
            ) {
            this.playArea.push(this.playerHand[index])
            this.playerHand.splice(index,1)
            console.log(this.playerHand)
            console.log(this.playArea)
            } else {
                return
            }
    };

    removePlayArea(card){
        this.playArea.splice(card,1)
        this.playerHand.push(card)
    };

}