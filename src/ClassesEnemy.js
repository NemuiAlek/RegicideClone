class EnemyRules {
    constructor(Jacks, Queens, Kings){
    this.enemyJacks = Jacks;
    this.enemyQueens = Queens;
    this.enemyKings = Kings;
    this.currentEnemy;
    this.enemyAttackValue = 0;
    this.kingsMusicPlaying = false
    }

    drawEnemy(styleClass){
    
        if (this.enemyJacks.length !== 0){
            this.currentEnemy = this.enemyJacks[0];
            this.enemyJacks.splice(0,1);
            this.showEnemyinQueue(this.enemyJacks);

        } else if (this.enemyQueens.length !== 0){
            this.currentEnemy = this.enemyQueens[0];
            this.enemyQueens.splice(0,1);
            this.showEnemyinQueue(this.enemyQueens);

        } else if (this.enemyKings.length !== 0){

            if(this.kingsMusicPlaying === false){
                styleClass.pause(jacksQueensMusic);
                styleClass.play(kingsMusic);
                this.kingsMusicPlaying = true;
            }
            
            this.currentEnemy = this.enemyKings[0];
            this.enemyKings.splice(0,1);
            this.showEnemyinQueue(this.enemyKings);

        } else if (this.enemyKings.length === 0){
            document.getElementById(`modalWin`).style.display = `block`;
            setTimeout(() => {
                document.getElementById("modalWin").classList.toggle('holdWin');
            }, 1499);
            styleClass.pause(kingsMusic);
            styleClass.play(winMusic);      
        }
        // console.log(array[0].health);
        document.querySelector(`#enemyHealth .statusNum`).innerHTML = this.currentEnemy.health;
        document.querySelector(`#enemyStrength .statusNum`).innerHTML = this.currentEnemy.strength;
        document.querySelector(`#enemyImage img`).src = this.currentEnemy.src;
    };

    showEnemyinQueue(array){
        let html = ''
        array.forEach((enemy) =>{
            html += `<img class="enemyPending" src=${enemy.src}>`
        })
        document.getElementById(`enemiesInQueue`).innerHTML = html
    }

    Attack(attacknum, playArea,pHand,gameClass,styleClass){

        let suitesInPlay = []
        let enemySuite = this.currentEnemy.type;
        let enemyImage = this.currentEnemy.src;
        let sheildDmg = 0; 

        for (let i = 0; i < 4; i++){
            if(`blank` in playArea[i]){
            } else {
                suitesInPlay.push(playArea[i].type);
                gameClass.discardCard(playArea[i], i, playArea, 0);
            }
        };

            //Condition for Clubs (Double Damage)
        if(enemySuite !== 'Spades' && suitesInPlay.includes(`Spades`)){
            sheildDmg = attacknum
        } 
            //Condition for Hearts (put cards from discard to draw pile)
        if (enemySuite !== 'Hearts' && suitesInPlay.includes(`Hearts`)){
            gameClass.recoverCards(attacknum)
        }
            //Condition for Diamonds (put cards from deck to hand)
        if (enemySuite !== 'Diamonds' && suitesInPlay.includes(`Diamonds`)){
            gameClass.drawCards(attacknum, pHand)
        }
            //Condition for Clubs (double damage)
        if (enemySuite !== 'Clubs' && suitesInPlay.includes(`Clubs`)){
            attacknum *= 2
    };

    if(attacknum < 10){
        styleClass.play(regularHit)
        document.querySelector(`#container`).classList.toggle(`apply-shake-weak`)
        setTimeout(() => {
        document.querySelector(`#container`).classList.toggle(`apply-shake-weak`)
        }, 700);
    } else if (attacknum < 20){
        styleClass.play(midHit)
        document.querySelector(`#container`).classList.toggle(`apply-shake-mid`)
        setTimeout(() => {
            document.querySelector(`#container`).classList.toggle(`apply-shake-mid`)
        }, 900);
    } else{
        styleClass.play(critHit)
        document.querySelector(`#container`).classList.toggle(`apply-shake-strong`)
        setTimeout(() => {
            document.querySelector(`#container`).classList.toggle(`apply-shake-strong`)
        }, 1200);
    }

    this.currentEnemy.health -= attacknum
    document.querySelector(`#enemyHealth .statusNum`).innerHTML = this.currentEnemy.health;
    this.currentEnemy.strength -= sheildDmg
    if(this.currentEnemy.strength <= 0){
        this.currentEnemy.strength = 0
    } 
    document.querySelector(`#enemyStrength .statusNum`).innerHTML = this.currentEnemy.strength;
    document.querySelector(`.statNum`).innerHTML = 0; 

    if(this.currentEnemy.health > 0 && this.currentEnemy.strength !== 0){
        gameClass.CurrentTurn = `Enemy`
        this.enemyAttackValue = this.currentEnemy.strength
        document.querySelector(`.statNum`).innerHTML = `(${this.enemyAttackValue})` ;

        document.querySelector(`.action`).innerText = `RECIEVE DAMAGE!`
        document.getElementById(`actionButton`).style.pointerEvents = 'none';
        document.getElementById(`actionButton`).style.opacity = 0.5;
            document.getElementById("statActualBox").classList.toggle('enemy');
            document.getElementById("playArea").classList.toggle('enemy');

    }

    this.enemyStatus(gameClass,enemySuite,enemyImage,styleClass) 

}

    EnemyAttack(enemyStr, areaSum, playArea, gameClass, styleClass){
        
        // console.log(enemyStr)

        if(enemyStr > areaSum){
            this.enemyAttackValue -= areaSum
        } else if (enemyStr <= areaSum){
            gameClass.CurrentTurn = `Player`   
            document.querySelector(`.action`).innerText = `CONFIRM ATTACK!`;
            document.getElementById(`actionButton`).style.pointerEvents = 'none'; 
            document.getElementById(`actionButton`).style.opacity = 0.5; 
            document.getElementById("statActualBox").classList.toggle('enemy');
            document.getElementById("playArea").classList.toggle('enemy');
            document.querySelector(`.statNum`).innerHTML = 0; 
            }

        if(areaSum <= 10){
            styleClass.play(regularDmg)
        } else if (areaSum <= 15){
            styleClass.play(midDmg)
        } else {
            styleClass.play(critDmg)
        }

    for(let i = 0; i < 4; i++){
        if(`blank` in playArea[i]){
        } else {
            gameClass.discardCard(playArea[i], i, playArea, 0)
        }

        }
}

    enemyStatus(gameClass, enemySuite, enemyImage,styleClass){
        let enemyLabel = this.currentEnemy.enemyLabel 

        if(this.currentEnemy.health > 0){
            return
        } else if (this.currentEnemy.health === 0){
            if(enemyLabel === `Jack`){gameClass.gameDeck.unshift(new Card(enemySuite, enemyImage, 10))}
            else if (enemyLabel === `Queen`){gameClass.gameDeck.unshift(new Card(enemySuite, enemyImage, 15))}
            else if (enemyLabel === `King`){gameClass.gameDeck.unshift(new Card(enemySuite, enemyImage, 20))}
            this.drawEnemy(styleClass)
            document.querySelector(`.deck`).innerHTML = gameClass.gameDeck.length
            console.log(gameClass.gameDeck)
        } else if (this.currentEnemy.health < 0) {
            this.drawEnemy(styleClass)
        }
    }

}