class GameRules{
    constructor(gameCards){
        this.gameDeck = cardAsset.gameCards;
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
        /*Replace Blank Draw Method*/
        for(let i = num-1; i>=0; i--){
        let index = pHand.findIndex (object => {
            return object.blank === true;
        });

        if (index === -1){
            return
        } else {
        pHand[index] = this.gameDeck[i]
        this.gameDeck.splice(i,1)
        }
    }

    /* Leaving because this is the push and splice method
        num --;
        for(let i = num; i>=0; i--){
            if(pHand.length === 8){
                return
            } else {
            pHand.push(this.gameDeck[i]);
            this.gameDeck.splice(i,1)
            }
        }
    };*/

    }
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
    this.playerHand = [{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true}];
    this.playArea = [];
    }

    intoPlayArea(index){
    let inPlay = this.playArea.length;
    let playValue = 0
    this.playArea.forEach((x) => {playValue += x.value});
    // console.log(playValue); 

        if (this.playerHand[index].blank === true){
            return
        }
            //if this is the first card selected
        else if (inPlay === 0) {
            this.pushPlay(index)
            } 
            //if this is the second card and you're choosing an Ace
        else if (inPlay === 1 && this.playerHand[index].value === 1) {
            this.pushPlay(index)
            } 
            //if this is the second card and the first card was an Ace
         else if (inPlay === 1 && this.playArea[0].value === 1) {
            this.pushPlay(index)
            } 
            
            //If this is not the first card and you are playing a card of the same value as the first one and the total sum is less than 10 (you also cant use Aces if you Fast Play)
        else if (this.playArea[0].value !== 1 && this.playerHand[index].value !== 1 &&
                 this.playArea[0].value === this.playerHand[index].value && playValue + this.playerHand[index].value <= 10){
            this.pushPlay(index)
            }
            
    };

    pushPlay(index){
        this.playArea.push(this.playerHand[index])
        this.playerHand[index] = {blank:true}
    }
    
    removePlayArea(card){
        this.playArea.splice(card,1)
        this.playerHand.push(card)
    };

}
