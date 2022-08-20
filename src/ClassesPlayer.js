class PlayerRules{
    constructor(){
    this.playerHand = [{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true},{blank:true}];
    this.playArea = [{blank:true},{blank:true},{blank:true},{blank:true}];
    this.playValue = 0 ;
    }

    intoPlayArea(index, currentTurn, enemyAttack){
    let inPlay = this.playArea.findIndex (object => {return object.blank === true;});
    let onField = this.playArea.findIndex (object => {return object.blank !== true;});

    /*Prevent player from playing multiple aces*/
    let acePlayed = false
    for (let i = 0; i < 4; i++){
        if (`blank` in this.playArea[i]){
        } else if (this.playArea[i].value === 1){
            acePlayed = true
        }
    }
 
        if (this.playerHand[index].blank === true){
            return
        }
        else if (currentTurn === `Enemy`){
            this.pushPlay(index, currentTurn, enemyClass)
        }
            //if this is the first card selected
        else if (inPlay === 0 && onField === -1) {
            this.pushPlay(index, currentTurn, enemyClass)
            } 
            //if this is the second card and you're choosing an Ace
        else if (this.playerHand[index].value === 1 && this.playArea[onField].value !== 1 && acePlayed !== true && inPlay === 1) {
            // console.log(this.playerHand[index].value)
            this.pushPlay(index, currentTurn, enemyClass)
            } 
            //if this is the second card and the first card was an Ace
         else if (this.playArea[onField].value === 1 && this.playerHand[index].value !== 1 && inPlay === 1) {
            this.pushPlay(index, currentTurn, enemyClass)
            } 
            
            //If this is not the first card and you are playing a card of the same value as the first one and the total sum is less than 10 (you also cant use Aces if you Fast Play)
        else if (this.playArea[onField].value !== 1 && this.playerHand[index].value !== 1 &&
                 this.playArea[onField].value === this.playerHand[index].value && this.playValue + this.playerHand[index].value <= 10){
            this.pushPlay(index, currentTurn, enemyClass)
            }
        
    };

    pushPlay(index, currentTurn, enemyClass){

            let areaIndex = this.playArea.findIndex (object => {
                return object.blank === true;
            });

            if (areaIndex === -1){return}

        this.playArea[areaIndex] = this.playerHand[index]
        this.playValue += this.playerHand[index].value

        let cardDraw = document.querySelector(`#pCard${[areaIndex]}`)
         cardDraw.appendChild(document.createElement(`img`))
         cardDraw.children[0].classList.add(`cardsInPlay`)
         cardDraw.children[0].src = `${this.playArea[areaIndex].src}`

        document.querySelector(`#card${index} .cardInfo`).removeChild(document.querySelector(`#card${index} .cardInfo img`))
        
        let attack = enemyClass.enemyAttackValue;
        if(currentTurn===`Player`){

            let totalDmg = 0
            let enemySuite = enemyClass.currentEnemy.type;
            let suitesInPlay = [];

            for (let i = 0; i < 4; i++){
                if(`blank` in this.playArea[i]){
                } else {
                    suitesInPlay.push(this.playArea[i].type);
                }
            };

            if (enemySuite !== 'Clubs' && suitesInPlay.includes(`Clubs`)){
                totalDmg = this.playValue * 2
            } else {
                totalDmg = this.playValue
            }

        document.querySelector(`.statNum`).innerHTML = totalDmg

        } else if (currentTurn===`Enemy`){
            
            attack -= this.playValue
            if (attack < 0){attack = 0}            
        document.querySelector(`.statNum`).innerHTML = `(${attack})`

        }
        this.playerHand[index] = {blank:true}
        
        document.getElementById(`actionButton`).style.pointerEvents = 'auto';
        actionButton.style.opacity = '1';
        actionButton.disabled = false;
        
    }
    
    removePlayArea(index, currentTurn, enemyAttack){
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

                if(currentTurn===`Player`){

                    document.querySelector(`.statNum`).innerHTML = this.playValue

                    } else if (currentTurn===`Enemy`){
                        
                        enemyAttack -= this.playValue
                        if (enemyAttack < 0){enemyAttack = 0}
                    document.querySelector(`.statNum`).innerHTML = `(${enemyAttack})`

                    }

                handIndex = this.playArea.findIndex (object => {
                    return object.blank !== true;
                }); 
                //     (handIndex)
                if (handIndex === -1)
                {
                document.getElementById(`actionButton`).style.pointerEvents = 'none';
                actionButton.style.opacity = '0.5'
                actionButton.disabled = true
                }
            }

    };

}