//Shuffle the deck

let gameClass =  new GameRules (cardAsset.gameCards)
let enemyClass =  new  EnemyRules(cardAsset.enemyJacks,cardAsset.enemyQueens,cardAsset.enemyKings)
let playerClass =  new PlayerRules ()


gameClass.shuffleCards(enemyClass.enemyJacks)
gameClass.shuffleCards(enemyClass.enemyQueens)
gameClass.shuffleCards(enemyClass.enemyKings)
gameClass.shuffleCards(gameClass.gameDeck)
gameClass.drawCards(12,playerClass.playerHand)

// console.log(gameClass.gameDeck)
// console.log(enemyClass.enemyJacks)
// console.log(enemyClass.enemyQueens)
// console.log(enemyClass.enemyKings)
// console.log(playerClass.playerHand)

let enemy = document.getElementById('currentEnemy')


window.addEventListener('load', (event) => {
    let html ='';
    let i = 0;
    playerClass.playerHand.forEach((pic) => {
        html = `
        <div data-card-type=${pic.type} data-card-value = ${pic.value}>
        <img src=${pic.src} alt="test">
        </div>
        `;
        document.getElementById(`card${i}`).innerHTML = html;
        i ++;
    });
    enemy.innerHTML = cardAsset.enemyJacks
    console.log(enemy)
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
    // console.log(playerClass.playerHand)
    console.log(playerClass.playArea)
})
})
}, 10);

document.getElementById('playArea').innerHTML = playerClass.playArea


