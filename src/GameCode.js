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
