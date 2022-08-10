//Shuffle the deck

let gameClass =  new GameRules (gameCards)
let enemyClass =  new  EnemyRules(enemyJacks,enemyQueens,enemyKings)
let playerClass =  new PlayerRules ()


gameClass.shuffleCards(enemyClass.enemyJacks)
gameClass.shuffleCards(enemyClass.enemyQueens)
gameClass.shuffleCards(enemyClass.enemyKings)
gameClass.shuffleCards(gameClass.gameDeck)
gameClass.drawCards(8,playerClass.playerHand)

console.log(gameClass.gameDeck)
console.log(enemyClass.enemyJacks)
console.log(enemyClass.enemyQueens)
console.log(enemyClass.enemyKings)
console.log(playerClass.playerHand)


// window.addEventListener('load', (event) => {
//     let html ='';
//     let newRow;
//     gameStart.playerHand.forEach((pic) => {
//         html += `
//         <div class = "cards" data-card-name=${pic.type}>
//         <div class="front">
//         <img src=${pic.src} alt="test">
//         </div>
//         </div>
//         `;
//         newRow = document.createElement("div");
//         // newRow.setAttribute(`id`,`cards`)
//         newRow.classList.add("playercards");
//         newRow.innerHTML = html;
//         console.log(newRow)
//         // document.getElementById(`container`).appendChild(newRow);
    
//     });
// })
  