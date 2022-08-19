//Shuffle the deck

let gameClass =  new GameRules (cardAsset.gameCards)
let enemyClass =  new  EnemyRules(cardAsset.enemyJacks,cardAsset.enemyQueens,cardAsset.enemyKings)
let playerClass =  new PlayerRules ()

let soloButton = document.getElementById(`soloButton`)
let multiButton = document.getElementById(`soloButton`)
let tutorialButton = document.getElementById(`turtle`)


gameClass.shuffleCards(enemyClass.enemyJacks)
gameClass.shuffleCards(enemyClass.enemyQueens)
gameClass.shuffleCards(enemyClass.enemyKings)
gameClass.shuffleCards(gameClass.gameDeck)


// let enemy = document.getElementById('currentEnemy')
let actionButton = document.getElementById(`actionButton`);

actionButton.style.display = 'none'
soloButton.addEventListener('click', () => {
    document.getElementById(`menu`).style.display = 'none'
    document.getElementById(`container`).style.display = 'block'
    document.getElementById(`playArea`).style.display = 'flex'
    document.getElementById(`jokers`).style.display = 'flex'
    actionButton.style.display = 'flex'
    actionButton.disabled = true;

    enemyClass.drawEnemy();
    gameClass.drawCards(12,playerClass.playerHand)
})

  
document.querySelectorAll(`.aCard.Hand`).forEach((card) => {
card.addEventListener(`click`, () =>{
    let index = parseInt(card.getAttribute(`id`).substring(4));
    playerClass.intoPlayArea(index, gameClass.CurrentTurn)
})
})
    
    document.querySelectorAll(`.aCard.Area`).forEach((card) => {
    card.addEventListener(`click`, () =>{
        let index = parseInt(card.getAttribute(`id`).substring(5));
        playerClass.removePlayArea(index)
    })
    })

    actionButton.addEventListener(`click`, () =>{
        if(gameClass.CurrentTurn === `Player`){
            enemyClass.Attack(playerClass.playValue, playerClass.playArea, playerClass.playerHand, gameClass)
            playerClass.playValue = 0;
        } else if (gameClass.CurrentTurn === `Enemy`){
            enemyClass.EnemyAttack(enemyClass.enemyAttackValue, playerClass.playValue, playerClass.playArea, gameClass)
            playerClass.playValue = 0;
        }

        gameClass.checkIfLost(playerClass.playerHand)
        // console.log(gameClass.CurrentTurn)
    })

    document.querySelectorAll(`.joker.free`).forEach((card) => {
        card.addEventListener(`click`, () =>{
            let index = parseInt(card.getAttribute(`id`).substring(5));

            if(card.classList.contains(`taken`)){return}
            else{gameClass.playJoker(index, playerClass.playerHand)}
            
        })
        })



