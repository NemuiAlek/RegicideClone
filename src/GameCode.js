//Shuffle the deck

let gameStart =  new Game (playerCards,enemyJacks,enemyQueens,enemyKings)

gameStart.shuffleCards(playerCards)
gameStart.shuffleCards(enemyJacks)
gameStart.shuffleCards(enemyQueens)
gameStart.shuffleCards(enemyKings)
gameStart.drawCards(12)

console.log(gameStart.playerDeck)
console.log(gameStart.enemyJacks)
console.log(gameStart.enemyQueens)
console.log(gameStart.enemyKings)
console.log(gameStart.playerHand)


window.addEventListener('load', (event) => {
    let html ='';
    gameStart.playerDeck.forEach((pic) => {
        html += `
        <div class = "cards" data-card-name=${pic.type}
        <div class="front" style="background: url(${pic.src}) no-repeat></div>
        </div>
        `;
    });
})
  