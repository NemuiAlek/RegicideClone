class Card {
    constructor(type, src, num) {
        this.type = type;
        this.src = src;
        this.num = num
    }
    // this would be to reduce the health 
    attack (){
        return
    }
    // this would be to reduce the strength after we do certain attacks to the enemey 
    strengthDecrease () {
        return
    }
    

}
// I told you we needed the constructor in the extended classes lol 
class Enemy extends Card {
    constructor(type, src, hp, str){
        super(type, src);
        this.health = hp;
        this.strength = str;
    }
    attack(){
        this.health -= this.num
    }
}



// class Queen extends Enenmy {
//     constructor(type){
//     super(type);
//     this.health = 30;
//     this.strength = 15;
//     }
// }

// class Jack extends Enenmy {
//     constructor(type){
//     super(type);
//     this.health = 20;
//     this.strength = 10;
//     }
// } 


// let test1 = new King("s")
// let test2 = new Jack("s")
// let test3 = new Queen("s")

// console.log(test1)
// console.log(test2)
// console.log(test3)

