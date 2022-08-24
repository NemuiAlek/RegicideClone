class GameRules{
    constructor(gameCards){
        this.gameDeck = cardAsset.gameCards;
        this.discardDeck = [];
        this.deadDeck = [];
        this.CurrentTurn = 'Player'
        this.jokerAvailable = [true,true]
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
        if (num > this.gameDeck.length){
            num = this.gameDeck.length
        }

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

    discardCard(card, index, handSection, hand){
        this.discardDeck.push(card);
        handSection[index] = {blank:true};

        if (hand === 0){
            document.querySelector(`#pCard${index}`).removeChild(document.querySelector(`#pCard${index} img`));
        } else if (hand === 1) {
            document.querySelector(`#card${index} .cardInfo`).removeChild(document.querySelector(`#card${index} .cardInfo img`))
        }

        document.querySelector(`.discard-pile`).innerHTML = this.discardDeck.length
    }

    recoverCards(num){
        this.shuffleCards(this.discardDeck);
        for (let i=0;i<num; i++){
            if (this.discardDeck.length !== 0){
            this.gameDeck.push(this.discardDeck[0])
            this.discardDeck.splice(0,1);
            document.querySelector(`.deck`).innerHTML = this.gameDeck.length
            document.querySelector(`.discard-pile`).innerHTML = this.discardDeck.length
            }
        }
    }

    playJoker(index, pHand){
        for(let i = 0; i < 8; i++){
            if(`blank` in pHand[i]){
            } else {
                this.discardCard(pHand[i], i, pHand,1);
            }
        }
        this.jokerAvailable.splice(0,1)
        this.drawCards(8,pHand)
        document.querySelector(`.deck`).innerHTML = this.gameDeck.length
        document.querySelector(`#joker${index}`).classList = `joker taken`
        // console.log(this.jokerAvailable.length)
    }

    checkIfLost(pHand,styleClass){
        if(this.jokerAvailable.length === 0 && pHand.every(obj => obj.hasOwnProperty('blank'))){
            document.getElementById(`modalLose`).style.display = `block`;
            styleClass.pause(jacksQueensMusic)
            styleClass.pause(kingsMusic)
            styleClass.play(loseMusic);
            setTimeout(() => {
                document.getElementById("modalLose").classList.toggle('holdLose');             
            }, 1499);

        }
    }
}






