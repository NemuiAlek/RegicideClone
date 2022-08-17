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
let attackButton = document.getElementById(`attackButton`);

attackButton.style.display = 'none'
soloButton.addEventListener('click', () => {
    document.getElementById(`menu`).style.display = 'none'
    document.getElementById(`container`).style.display = 'block'
    document.getElementById(`playArea`).style.display = 'flex'
    attackButton.style.display = 'flex'
    attackButton.disabled = true;

    enemyClass.drawEnemy();
    gameClass.drawCards(12,playerClass.playerHand)
})

  
setTimeout(() => {
document.querySelectorAll(`.aCard.Hand`).forEach((card) => {
card.addEventListener(`click`, () =>{
    let index = parseInt(card.getAttribute(`id`).substring(4));
    playerClass.intoPlayArea(index)
})
})
}, 10);
    
setTimeout(() => {
    document.querySelectorAll(`.aCard.Area`).forEach((card) => {
    card.addEventListener(`click`, () =>{
        let index = parseInt(card.getAttribute(`id`).substring(5));
        playerClass.removePlayArea(index)
    })
    })
    }, 10);

    attackButton.addEventListener(`click`, () =>{
        enemyClass.Attack(playerClass.playValue, playerClass.playArea, playerClass.playerHand, gameClass)
        playerClass.playValue = 0;
    })




