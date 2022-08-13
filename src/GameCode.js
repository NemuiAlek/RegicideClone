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

// console.log(gameClass.gameDeck)
// console.log(enemyClass.enemyJacks)
// console.log(enemyClass.enemyQueens)
// console.log(enemyClass.enemyKings)
// console.log(playerClass.playerHand)

// let enemy = document.getElementById('currentEnemy')

soloButton.addEventListener('click', () => {
    document.getElementById(`menu`).style.display = 'none'
    document.getElementById(`container`).style.display = 'block'

    let html ='';
    let i = 0;
    playerClass.playerHand.forEach((pic) => {
        html = `
        <div class="cardInfo" data-card-type=${pic.type} data-card-value = ${pic.value}>
        </div>
        `;
        // <img src=${pic.src} alt="Card${pic.type,pic.value}">
        document.getElementById(`card${i}`).innerHTML = html;
        i ++;
    });
    enemyClass.drawEnemy();
    gameClass.drawCards(12,playerClass.playerHand)
})

  
setTimeout(() => {
document.querySelectorAll(`.aCard`).forEach((card) => {
    //  console.log(card)
card.addEventListener(`click`, () =>{
    let index = parseInt(card.getAttribute(`id`).substring(4));
    // let cValue = parseInt(card.childNodes[1].getAttribute(`data-card-value`))
    // console.log(index)
    // console.log(cValue)
    playerClass.intoPlayArea(index)
    console.log(playerClass.playerHand)
    console.log(playerClass.playArea)
})
})
}, 10);
    
    




