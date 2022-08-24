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
let launchModel = document.getElementById(`modalLaunch`);
let showHelpModal = document.getElementById(`showHelpModal`)
let helpModal = document.getElementById(`modalHelp`)

let titleMusic = document.getElementById(`titleMusic`);
let jacksQueensMusic = document.getElementById(`mainMusic`);
let kingsMusic = document.getElementById(`bossMusic`);

let loseMusic = document.getElementById(`loseMusic`);
let winMusic = document.getElementById(`winMusic`);

let critHit = document.getElementById(`critHit`);
let midHit = document.getElementById(`midHit`);
let regularHit = document.getElementById(`regularHit`);

let critDmg = document.getElementById(`critDmg`)
let midDmg = document.getElementById(`midDmg`)
let regularDmg = document.getElementById(`regularDmg`)

let jackDeath = document.getElementById(`JackDeath`)
let queenDeath = document.getElementById(`QueenDeath`)
let kingDeath = document.getElementById(`KingDeath`)
let easterEgg1 = document.getElementById(`easterEgg1`)

let footStep1 = document.getElementById(`footStep1`)
let footStep2 = document.getElementById(`footStep2`)
let footStep3 = document.getElementById(`footStep3`)


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
    showHelpModal.style.display = `block`
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
        playerClass.removePlayArea(index, gameClass.CurrentTurn, enemyClass.enemyAttackValue, enemyClass.currentEnemy.type)
    })
    })

    actionButton.addEventListener(`click`, () =>{
        if(gameClass.CurrentTurn === `Player`){
            enemyClass.Attack(playerClass.playValue, playerClass.playArea, playerClass.playerHand, gameClass, styleClass)
            playerClass.playValue = 0;
        } else if (gameClass.CurrentTurn === `Enemy`){
            enemyClass.EnemyAttack(enemyClass.enemyAttackValue, playerClass.playValue, playerClass.playArea, gameClass, styleClass)
            playerClass.playValue = 0;
        }

        gameClass.checkIfLost(playerClass.playerHand,styleClass)
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
        multiButton.addEventListener('click', (evt) => {
            i += evt.detail
            if (i === 3) {
                document.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
            }   
        })

    showHelpModal.addEventListener('mouseover',() => {
        
        if(helpModal.classList.contains(`holdHelp`)){
            helpModal.classList.remove(`holdHelp`)
        }

        helpModal.style.display=`block`
        helpModal.classList.toggle(`opacityShow`) //on
        
        setTimeout(() => {
            helpModal.classList.toggle(`holdHelp`) //on
            helpModal.classList.toggle(`opacityShow`) //off
        }, 500);
    })

        helpModal.addEventListener('mouseleave',() => {

            helpModal.classList.toggle(`opacityHide`) //off

            setTimeout(() => {
                helpModal.style.display=`none`
                helpModal.classList.toggle(`holdHelp`) //off
                helpModal.classList.toggle(`opacityHide`)
            }, 500);

        })    




