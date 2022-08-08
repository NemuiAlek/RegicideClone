
// I think we should do an array within an array and then call it this.cards or this.players
// look at the end. That way we can call from that array when randomly shuffling 

//^ this exactly what i was thinking too!! 

const playerSpades = [
     {"type":`s`, "value":1, "src":`../img/cards/Spades/ready/A.png` }
    ,{"type":`s`, "value":2, "src":`../img/cards/Spades/ready/2.png` }
    ,{"type":`s`, "value":3, "src":`../img/cards/Spades/ready/3.png` }
    ,{"type":`s`, "value":4, "src":`../img/cards/Spades/ready/4.png` }
    ,{"type":`s`, "value":5, "src":`../img/cards/Spades/ready/5.png` }
    ,{"type":`s`, "value":6, "src":`../img/cards/Spades/ready/6.png` }
    ,{"type":`s`, "value":7, "src":`../img/cards/Spades/ready/7.png` }
    ,{"type":`s`, "value":8, "src":`../img/cards/Spades/ready/8.png` }
    ,{"type":`s`, "value":9, "src":`../img/cards/Spades/ready/9.png` }
    ,{"type":`s`, "value":10, "src":`../img/cards/Spades/ready/10.png` }
];

const playerClubs = [
    {"type":`c`, "value":1, "src":`../img/cards/Clubs/ready/A.png` }
   ,{"type":`c`, "value":2, "src":`../img/cards/Clubs/ready/2.png` }
   ,{"type":`c`, "value":3, "src":`../img/cards/Clubs/ready/3.png` }
   ,{"type":`c`, "value":4, "src":`../img/cards/Clubs/ready/4.png` }
   ,{"type":`c`, "value":5, "src":`../img/cards/Clubs/ready/5.png` }
   ,{"type":`c`, "value":6, "src":`../img/cards/Clubs/ready/6.png` }
   ,{"type":`c`, "value":7, "src":`../img/cards/Clubs/ready/7.png` }
   ,{"type":`c`, "value":8, "src":`../img/cards/Clubs/ready/8.png` }
   ,{"type":`c`, "value":9, "src":`../img/cards/Clubs/ready/9.png` }
   ,{"type":`c`, "value":10, "src":`../img/cards/Clubs/ready/10.png` }
];

const playerHearts = [
    {"type":`h`, "value":1, "src":`../img/cards/Hearts/ready/A.png` }
   ,{"type":`h`, "value":2, "src":`../img/cards/Hearts/ready/2.png` }
   ,{"type":`h`, "value":3, "src":`../img/cards/Hearts/ready/3.png` }
   ,{"type":`h`, "value":4, "src":`../img/cards/Hearts/ready/4.png` }
   ,{"type":`h`, "value":5, "src":`../img/cards/Hearts/ready/5.png` }
   ,{"type":`h`, "value":6, "src":`../img/cards/Hearts/ready/6.png` }
   ,{"type":`h`, "value":7, "src":`../img/cards/Hearts/ready/7.png` }
   ,{"type":`h`, "value":8, "src":`../img/cards/Hearts/ready/8.png` }
   ,{"type":`h`, "value":9, "src":`../img/cards/Hearts/ready/9.png` }
   ,{"type":`h`, "value":10, "src":`../img/cards/Hearts/ready/10.png` }
];

const playerDiamonds = [
    {"type":`d`, "value":1, "src":`../img/cards/Diamonds/ready/A.png` }
   ,{"type":`d`, "value":2, "src":`../img/cards/Diamonds/ready/2.png` }
   ,{"type":`d`, "value":3, "src":`../img/cards/Diamonds/ready/3.png` }
   ,{"type":`d`, "value":4, "src":`../img/cards/Diamonds/ready/4.png` }
   ,{"type":`d`, "value":5, "src":`../img/cards/Diamonds/ready/5.png` }
   ,{"type":`d`, "value":6, "src":`../img/cards/Diamonds/ready/6.png` }
   ,{"type":`d`, "value":7, "src":`../img/cards/Diamonds/ready/7.png` }
   ,{"type":`d`, "value":8, "src":`../img/cards/Diamonds/ready/8.png` }
   ,{"type":`d`, "value":9, "src":`../img/cards/Diamonds/ready/9.png` }
   ,{"type":`d`, "value":10, "src":`../img/cards/Diamonds/ready/10.png` }
];

const enemyJacks = [
     {"type":`s`, "health":20,"strength":10, "src":`../img/cards/Spades/ready/J.png`}
    ,{"type":`c`, "health":20,"strength":10, "src":`../img/cards/Clubs/ready/J.png`}
    ,{"type":`h`, "health":20,"strength":10, "src":`../img/cards/Hearts/ready/J.png`}
    ,{"type":`d`, "health":20,"strength":10, "src":`../img/cards/Diamonds/ready/J.png`}
];

const enemyQueens = [
    {"type":`s`, "health":30,"strength":15, "src":`../img/cards/Spades/ready/Q.png`}
   ,{"type":`c`, "health":30,"strength":15, "src":`../img/cards/Clubs/ready/Q.png`}
   ,{"type":`h`, "health":30,"strength":15, "src":`../img/cards/Hearts/ready/Q.png`}
   ,{"type":`d`, "health":30,"strength":15, "src":`../img/cards/Diamonds/ready/Q.png`}
];

const enemyKings = [
    {"type":`s`, "health":40,"strength":20, "src":`../img/cards/Spades/ready/K.png`}
   ,{"type":`c`, "health":40,"strength":20, "src":`../img/cards/Clubs/ready/K.png`}
   ,{"type":`h`, "health":40,"strength":20, "src":`../img/cards/Hearts/ready/K.png`}
   ,{"type":`d`, "health":40,"strength":20, "src":`../img/cards/Diamonds/ready/K.png`}
];

let playerCards = [];

playerSpades.forEach((card) => {
    playerCards.push(card)
});
playerClubs.forEach((card) => {
    playerCards.push(card)
});
playerHearts.forEach((card) => {
    playerCards.push(card)
});
playerDiamonds.forEach((card) => {
    playerCards.push(card)
});