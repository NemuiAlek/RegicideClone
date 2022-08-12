class Card {
    constructor() {
        this.gameCards = [];
        this.enemyJacks = [];
        this.enemyQueens = [];
        this.enemyKings = [];
        this.suites = ['Spades','Clubs','Hearts','Diamonds']
        this.cardValues = [1,2,3,4,5,6,7,8,9,10]
        this.enemyStats = [{health:20,str:10},{health:30,str:15},{health:40,str:20},]
    }
};

let cardAsset = new Card
cardAsset.suites.forEach((suite) =>{

    cardAsset.cardValues.forEach((num)=>{
        cardAsset.gameCards.push({type:suite, value:num, src:`./img/cards/${suite}/ready/${num}.png`})
    })

    cardAsset.enemyJacks.push({type:suite, health:cardAsset.enemyStats[0].health, strength:cardAsset.enemyStats[0].str, src:`./img/cards/${suite}/ready/J.png`})
    cardAsset.enemyQueens.push({type:suite, health:cardAsset.enemyStats[1].health, strength:cardAsset.enemyStats[1].str, src:`./img/cards/${suite}/ready/Q.png`})
    cardAsset.enemyKings.push({type:suite, health:cardAsset.enemyStats[2].health, strength:cardAsset.enemyStats[2].str, src:`./img/cards/${suite}/ready/K.png`})

});

// console.log(cardAsset.gameCards)
// console.log(cardAsset.enemyJacks)
// console.log(cardAsset.enemyQueens)
// console.log(cardAsset.enemyKings)









