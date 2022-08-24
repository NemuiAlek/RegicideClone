class Deck {
    constructor() {
        this.gameCards = [];
        this.enemyJacks = [];
        this.enemyQueens = [];
        this.enemyKings = [];
        this.suites = ['Spades','Clubs','Hearts','Diamonds']
        this.cardValues = [1]//,2,3,4,5,6,7,8,9,10]
        this.enemyStats = {jack: {health:20,str:10}, queen: {health:30,str:15}, king: {health:40,str:20}}
    }

    generateDecks() {
        this.suites.forEach((suite) =>{
        
            this.cardValues.forEach((num)=>{
                this.gameCards.push(new Card(suite, `./img/cards/${suite}/ready/${num}.png`, num))
            })
        
            this.enemyJacks.push(new Enemy(suite, `./img/cards/${suite}/ready/J.png`,  this.enemyStats.jack.health,  this.enemyStats.jack.str, `Jack`))
            this.enemyQueens.push(new Enemy(suite, `./img/cards/${suite}/ready/Q.png`, this.enemyStats.queen.health,  this.enemyStats.queen.str, `Queen`))
            this.enemyKings.push(new Enemy(suite, `./img/cards/${suite}/ready/K.png`, this.enemyStats.king.health,  this.enemyStats.king.str, `King`))
        
        });
    }
};

let cardAsset = new Deck

cardAsset.generateDecks();

// console.log(cardAsset.gameCards)
// console.log(cardAsset.enemyJacks)
// console.log(cardAsset.enemyQueens)
// console.log(cardAsset.enemyKings)









