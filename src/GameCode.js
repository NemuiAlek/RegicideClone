//Shuffle the deck

let gameClass =  new GameRules (cardAsset.gameCards)
let enemyClass =  new  EnemyRules(cardAsset.enemyJacks,cardAsset.enemyQueens,cardAsset.enemyKings)
let playerClass =  new PlayerRules ()
let styleClass = new Style()

let soloButton = document.getElementById(`soloButton`);
let multiButton = document.getElementById(`multiButton`);
let tutorialButton = document.getElementById(`turtle`);
let actionButton = document.getElementById(`actionButton`);
let menu = document.getElementById(`menu`);
let container = document.getElementById(`container`);
let middle = document.getElementById(`middle`);
let footer = document.getElementById(`footer`);
let titleMusic = document.getElementById(`music1`)
let jacksQueensMusic = document.getElementById(`music2`)
let kingsMusic = document.getElementById(`music3`)
let launchModel = document.getElementById(`modalLaunch`)


gameClass.shuffleCards(enemyClass.enemyJacks)
gameClass.shuffleCards(enemyClass.enemyQueens)
gameClass.shuffleCards(enemyClass.enemyKings)
gameClass.shuffleCards(gameClass.gameDeck)

launchModel.addEventListener(`click`, () =>{
    styleClass.hideModal(launchModel)
    styleClass.play(titleMusic)
});

actionButton.style.display = 'none'
soloButton.addEventListener('click', () => {
    menu.style.display = 'none'
    container.style.display = 'block'
    middle.style.display = 'flex'
    footer.style.display = 'flex'
    actionButton.style.display = 'flex'
    actionButton.disabled = true;

    enemyClass.drawEnemy();
    gameClass.drawCards(12,playerClass.playerHand)

    styleClass.pause(titleMusic)
    styleClass.play(jacksQueensMusic)
    // pause(jacksQueensMusic)

});

  
document.querySelectorAll(`.aCard.Hand`).forEach((card) => {
card.addEventListener(`click`, () =>{
    let index = parseInt(card.getAttribute(`id`).substring(4));
    playerClass.intoPlayArea(index, gameClass.CurrentTurn, enemyClass)
})
})
    
    document.querySelectorAll(`.aCard.Area`).forEach((card) => {
    card.addEventListener(`click`, () =>{
        let index = parseInt(card.getAttribute(`id`).substring(5));
        playerClass.removePlayArea(index, gameClass.CurrentTurn, enemyClass.enemyAttackValue)
    })
    })

    actionButton.addEventListener(`click`, () =>{
        if(gameClass.CurrentTurn === `Player`){
            enemyClass.Attack(playerClass.playValue, playerClass.playArea, playerClass.playerHand, gameClass, styleClass)
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

        let i = 0
        multiButton.addEventListener('click', function (evt) {
            i += evt.detail
            if (i === 3) {
                document.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }   
        })


