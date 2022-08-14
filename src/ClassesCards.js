class Card {
    constructor(type, src, num) {
        this.type = type;
        this.src = src;
        this.value = num
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

