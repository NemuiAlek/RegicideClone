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
        let cardDraw = document.querySelector(`#card${index} .cardInfo`)
        cardDraw.appendChild(document.createElement(`img`))
        cardDraw.children[0].classList.add(`cardsInPlay`)
        cardDraw.children[0].src = `${pHand[index].src}`
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
    this.currentEnemy = []
    }

    drawEnemy(){
        let array = this.currentEnemy

        // console.log(`test?`)
        if (this.enemyJacks.length !== 0){
            array.push(this.enemyJacks[0]);
            this.enemyJacks.splice(0,1);
        } else if (this.enemyQueens.length !== 0){
            array.push(this.enemyQueens[0]);
            this.enemyQueens.splice(0,1);
        } else if (this.enemyKings.length !== 0){
            array.push(this.enemyKings[0]);
            this.enemyKings.splice(0,1);
        }
        // console.log(array[0].health);
        document.querySelector(`#enemyHealth .statusNum`).innerHTML = array[0].health;
        document.querySelector(`#enemyStrength .statusNum`).innerHTML = array[0].strength;
        document.querySelector(`#enemyImage img`).src = array[0].src;
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
    //  console.log(index); 
    console.log(this.playArea.length)

        if (this.playerHand[index].blank === true){
            return
        }
            //if this is the first card selected
        else if (inPlay === 0) {
            this.pushPlay(index)
            } 
            //if this is the second card and you're choosing an Ace
        else if (inPlay === 1 && this.playerHand[index].value === 1 && this.playArea[0].value !== 1) {
            console.log(this.playerHand[index].value)
            this.pushPlay(index)
            } 
            //if this is the second card and the first card was an Ace
         else if (inPlay === 1 && this.playArea[0].value === 1 && this.playerHand[index].value !== 1) {
            this.pushPlay(index)
            } 
            
            //If this is not the first card and you are playing a card of the same value as the first one and the total sum is less than 10 (you also cant use Aces if you Fast Play)
        else if (this.playArea[0].value !== 1 && this.playerHand[index].value !== 1 &&
                 this.playArea[0].value === this.playerHand[index].value && playValue + this.playerHand[index].value <= 10){
            this.pushPlay(index)
            }
        
        // changes confirm attack button to be fully highlighted and clickable
        // I still need to work on it a little to go back to its origin state once attack is made
        if (inPlay > -1) {
            document.getElementById(`attackButton`).style.pointerEvents = 'auto';
            attackButton.style.opacity = '1';
            attackButton.disabled = false;
        } else if (inPlay === 0 ) {
            attackButton.style.opacity = '0.5'
            attackButton.disabled = true;
        }//have to change innerHTML to  CONFIRM DISCARD once we have to discard cards
        


            
    };

    pushPlay(index){
        this.playArea.push(this.playerHand[index])

        let cardDraw = document.querySelector(`#pCard${this.playArea.length-1}`)
         cardDraw.appendChild(document.createElement(`img`))
         cardDraw.children[0].classList.add(`cardsInPlay`)
         cardDraw.children[0].src = `${this.playArea[this.playArea.length-1].src}`

        document.querySelector(`#card${index} .cardInfo`).removeChild(document.querySelector(`#card${index} .cardInfo img`))
        this.playerHand[index] = {blank:true}
        
    }
    
    removePlayArea(index){
            let card = this.playArea[index]
            let handIndex = this.playerHand.findIndex (object => {
                return object.blank === true;
            });
    
            if (handIndex === -1){
                return alert(`glitch has occurred!`)
            } else {
                console.log(handIndex)
                console.log(card)

                this.playArea.splice(index,1)
                let cardDraw = document.querySelector(`#card${handIndex} .cardInfo`)
                cardDraw.appendChild(document.createElement(`img`))
                cardDraw.children[0].classList.add(`cardsInPlay`)
                cardDraw.children[0].src = `${card.src}`
                // console.log(`${card.src}`);

                document.querySelector(`#pCard${index}`).removeChild(document.querySelector(`#pCard${index} img`))
                console.log(this.playArea.length)
            }

    };

}


