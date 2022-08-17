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
        for(let i = 0; i<num; i++){
        let index = pHand.findIndex (object => {
            return object.blank === true;
        });

        if (index === -1){
            return
        } else {
        pHand[index] = this.gameDeck[0]
        this.gameDeck.splice(0,1)
        let cardDraw = document.querySelector(`#card${index} .cardInfo`)
        cardDraw.appendChild(document.createElement(`img`))
        cardDraw.children[0].classList.add(`cardsInPlay`)
        cardDraw.children[0].src = `${pHand[index].src}`
        document.querySelector(`.deck`).innerHTML = this.gameDeck.length
        }
    }
    }

    discardCard(card, index, playArea){
        this.discardDeck.push(card);
        playArea[index] = {blank:true};
        document.querySelector(`#pCard${index}`).removeChild(document.querySelector(`#pCard${index} img`));
        document.querySelector(`.discard-pile`).innerHTML = this.discardDeck.length
    }

    recoverCards(num){
        this.shuffleCards(this.discardDeck);
        for (let i=0;i<num; i++){
            if (this.discardDeck.length !== 0){
            this.gameDeck.push(this.discardDeck[0]);
            this.discardDeck.splice(0,1);
            document.querySelector(`.deck`).innerHTML = this.gameDeck.length
            document.querySelector(`.discard-pile`).innerHTML = this.discardDeck.length
            }
        }
    }
 }

class EnemyRules {
    constructor(Jacks, Queens, Kings){
    this.enemyJacks = Jacks;
    this.enemyQueens = Queens;
    this.enemyKings = Kings;
    this.currentEnemy
    }

    drawEnemy(){
        
        // console.log(`test?`)
        if (this.enemyJacks.length !== 0){
            this.currentEnemy = this.enemyJacks[0];
            this.enemyJacks.splice(0,1);
        } else if (this.enemyQueens.length !== 0){
            this.currentEnemy = this.enemyQueens[0];
            this.enemyQueens.splice(0,1);
        } else if (this.enemyKings.length !== 0){
            this.currentEnemy = this.enemyKings[0];
            this.enemyKings.splice(0,1);
        } else if (this.enemyKings.length === 0){
            return alert(`YOU WON HOLY SHIT!!!`)
        }
        // console.log(array[0].health);
        document.querySelector(`#enemyHealth .statusNum`).innerHTML = this.currentEnemy.health;
        document.querySelector(`#enemyStrength .statusNum`).innerHTML = this.currentEnemy.strength;
        document.querySelector(`#enemyImage img`).src = this.currentEnemy.src;
    }

    Attack(attacknum, playArea,pHand,gameClass){
        let suitesInPlay = []
        let enemySuite = this.currentEnemy.type;
        let enemyImage = this.currentEnemy.src;
        let sheildDmg = 0;
        // console.log(attacknum);

        for (let i = 0; i < 4; i++){
            if(`blank` in playArea[i]){
            } else {
                suitesInPlay.push(playArea[i].type);
                gameClass.discardCard(playArea[i], i, playArea);
            }
        };

            //Condition for Clubs (Double Damage)
        if(enemySuite !== 'Spades' && suitesInPlay.includes(`Spades`)){
            sheildDmg = attacknum
        } 
            //Condition for Hearts (put cards from discard to draw pile)
        if (enemySuite !== 'Hearts' && suitesInPlay.includes(`Hearts`)){
            gameClass.recoverCards(attacknum)
        }
            //Condition for Diamonds (put cards from deck to hand)
        if (enemySuite !== 'Diamonds' && suitesInPlay.includes(`Diamonds`)){
            gameClass.drawCards(attacknum, pHand)
        }
            //Condition for Clubs (double damage)
        if (enemySuite !== 'Clubs' && suitesInPlay.includes(`Clubs`)){
            attacknum *= 2
    };

    this.currentEnemy.health -= attacknum
    document.querySelector(`#enemyHealth .statusNum`).innerHTML = this.currentEnemy.health;
    this.currentEnemy.strength -= sheildDmg
    document.querySelector(`#enemyStrength .statusNum`).innerHTML = this.currentEnemy.strength;

    this.enemyStatus(gameClass,enemySuite,enemyImage)

    
}

    enemyStatus(gameClass, enemySuite, enemyImage){
        let enemyLabel = this.currentEnemy.enemyLabel 

        if(this.currentEnemy.health > 0){
            return
        } else if (this.currentEnemy.health === 0){
            if(enemyLabel = `Jack`){gameClass.gameDeck.unshift(new Card(enemySuite, enemyImage, 10))}
            else if (enemyLabel = `Queen`){gameClass.gameDeck.unshift(new Card(enemySuite, enemyImage, 15))}
            else if (enemyLabel = `King`){gameClass.gameDeck.unshift(new Card(enemySuite, enemyImage, 20))}
            
            this.drawEnemy()
            console.log(gameClass.gameDeck)
        } else if (this.currentEnemy.health < 0) {
            this.drawEnemy()
        }
    }

}

class PlayerRules{
    constructor(){
    this.playerHand = [{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true}];
    this.playArea = [{blank:true},{blank:true},{blank:true},{blank:true}];
    this.playValue = 0 ;
    }

    intoPlayArea(index){
    let inPlay = this.playArea.findIndex (object => {return object.blank === true;});
    let onField = this.playArea.findIndex (object => {return object.blank !== true;});
    // this.playArea.forEach((x) => {playValue += x.value});
    //   console.log(inPlay); 

        if (this.playerHand[index].blank === true){
            return
        }
            //if this is the first card selected
        else if (inPlay === 0 && onField === -1) {
            this.pushPlay(index)
            } 
            //if this is the second card and you're choosing an Ace
        else if (this.playerHand[index].value === 1 && this.playArea[onField].value !== 1) {
            // console.log(this.playerHand[index].value)
            this.pushPlay(index)
            } 
            //if this is the second card and the first card was an Ace
         else if (this.playArea[onField].value === 1 && this.playerHand[index].value !== 1) {
            this.pushPlay(index)
            } 
            
            //If this is not the first card and you are playing a card of the same value as the first one and the total sum is less than 10 (you also cant use Aces if you Fast Play)
        else if (this.playArea[onField].value !== 1 && this.playerHand[index].value !== 1 &&
                 this.playArea[onField].value === this.playerHand[index].value && this.playValue + this.playerHand[index].value <= 10){
            this.pushPlay(index)
            }
        
    };

    pushPlay(index){

            let areaIndex = this.playArea.findIndex (object => {
                return object.blank === true;
            });

        this.playArea[areaIndex] = this.playerHand[index]
        this.playValue += this.playerHand[index].value

        let cardDraw = document.querySelector(`#pCard${[areaIndex]}`)
         cardDraw.appendChild(document.createElement(`img`))
         cardDraw.children[0].classList.add(`cardsInPlay`)
         cardDraw.children[0].src = `${this.playArea[areaIndex].src}`

        document.querySelector(`#card${index} .cardInfo`).removeChild(document.querySelector(`#card${index} .cardInfo img`))
        this.playerHand[index] = {blank:true}
        
        document.getElementById(`attackButton`).style.pointerEvents = 'auto';
        attackButton.style.opacity = '1';
        attackButton.disabled = false;
        
    }
    
    removePlayArea(index){
            let card = this.playArea[index]
            let handIndex = this.playerHand.findIndex (object => {
                return object.blank === true;
            });
    
            if (handIndex === -1){
                return alert(`glitch has occurred!`)
            } else {


                this.playValue -= this.playArea[index].value

                this.playerHand[handIndex] = card
                this.playArea[index] = {blank:true}

                let cardDraw = document.querySelector(`#card${handIndex} .cardInfo`)
                cardDraw.appendChild(document.createElement(`img`))
                cardDraw.children[0].classList.add(`cardsInPlay`)
                cardDraw.children[0].src = `${card.src}`

                document.querySelector(`#pCard${index}`).removeChild(document.querySelector(`#pCard${index} img`))

                handIndex = this.playArea.findIndex (object => {
                    return object.blank !== true;
                }); 
                console.log(handIndex)
                if (handIndex === -1)
                {
                document.getElementById(`attackButton`).style.pointerEvents = 'none';
                attackButton.style.opacity = '0.5'
                attackButton.disabled = true
                }
            }

    };

}


