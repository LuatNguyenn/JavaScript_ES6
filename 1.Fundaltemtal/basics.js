
//function expression 

var whatyoudo = function (job, name) {
    switch (job) {
        case 'teacher':
            return name + ' teacher';
        default:
            return 'default name'
    }
}
console.log(whatyoudo('teacher', 'nguyen'));


//arrays
//mutate array
var names = ['sadf', 'dsfg', 111, 'ertert'];
names[names.length] = 'last one' // add to the last one
names.unshift('add to 1st element of arr');
names.pop(); // remove the last element
names.shift(); // remove the first element
console.log(names);
console.log(names.indexOf(1111)); // return 2 else -1

var years = new Array(222, 3, 4, 5, 222);
years.push(2222); // add to last one
console.log(years)


//object and array
var John = {
    firstname: 'John',
    lastName: 'Nguyen',
    birthday: '22-22-3333',
    family: ['hoang','dung','phap'],
    job:'teacher',
    isMarried: true
}

console.log(John.firstname);
console.log(John.family[0]);

var x = 'lastName';
console.log(John[x]); // return John

John.job = 'Dev' //=> changed job
John['isMarried'] = false;

// create new object 
var jane = new Object();
jane.fname = 'jane';
jane.byear = '1997';
jane['lastname'] = 'Smith'
console.log(jane);

// object and method 
var John = {
    firstname: 'John',
    lastName: 'Nguyen',
    birthday: 1997,
    family: ['hoang','dung','phap'],
    job:'teacher',
    isMarried: true,
    calAge: function(){
        // return 2020 - this.birthday;
        this.age = 2020 - this.birthday; // add age attr
    }
}
John.calAge()
console.log(John);




//DOM and DOM MANIPULATION 
console.log('THIS IS THE DOM SECTION (GAME)');
var scores;
numberArray0 = [], numberArray1 = [];

var x = document.querySelector('#score-0').textContent; // just read the content and store 'x'
var scores = [0, 0];
var activePlayer = 0; //player 1 = 0 player 2 = 1
document.querySelector('.dice').style.display = 'none';
console.log(x);

// can use InnerHTML or textContent but only plain text applied
// document.querySelector('#current-' + activePlayer).textContent = '<em>'; 
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

function turnOption(playerTurn) {
    // let activePlayer;
    gameStart(playerTurn);
    this.activePlayer = playerTurn;
}

function gameStart(active) {
    console.log(active)
    if (active === 0) {
        disableElement(1);
    } else {
        disableElement(0)
    }
    document.querySelector('.player-' + active + '-panel').style.background = '#f7f7f7';
    document.querySelector('.player-' + active + '-panel').classList.add('active');
    // switchTurn(active);
    disableBtn();
}

function disableElement(turn) {
    document.querySelector('.player-' + turn + '-panel').style.background = 'white';
    document.querySelector('.player-' + turn + '-panel').classList.remove('active');
}


document.querySelector('.btn-roll').addEventListener('click', () => {
    console.log('this is outside scope' + this.activePlayer);
    document.querySelector('.dice').style.display = 'block';

    if (activePlayer == 0) {
        let totalScore0 = 0;
        let dice = 0;
        dice = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        document.querySelector('#current-' + activePlayer).textContent = dice;
        numberArray0.push(dice);
        document.querySelector('#generatedNumbers-' + activePlayer).innerHTML = numberArray0;

        for (let i = 0; i < numberArray0.length; i++) {

            totalScore0 += numberArray0[i];
            document.querySelector('#score-' + activePlayer).innerHTML = totalScore0;
            if (totalScore0 > 6) {
                document.querySelector('#score-' + activePlayer).innerHTML = 'LOSE';
                if (activePlayer === 0) {
                    turnOption(1);
                } else {
                    turnOption(0);
                }
            } else if (totalScore0 == 6) {
                document.querySelector('#score-' + activePlayer).innerHTML = 'HIGHEST SCORE';
                if (activePlayer === 0) {
                    turnOption(1);
                } else {
                    turnOption(0);
                }
            }
        }
        scores[0] = document.getElementById('score-0').textContent;

    } else if (activePlayer == 1) {
        let totalScore1 = 0;

        console.log('should be 1', activePlayer);
        let dice2 = 0;
        dice2 = Math.floor(Math.random() * 6) + 1;
        document.querySelector('.dice').src = 'dice-' + dice2 + '.png';

        document.querySelector('#current-' + activePlayer).textContent = dice2;
        numberArray1.push(dice2);
        document.querySelector('#generatedNumbers-' + activePlayer).innerHTML = numberArray1;

        for (let i = 0; i < numberArray1.length; i++) {
            totalScore1 += numberArray1[i];
            document.querySelector('#score-' + activePlayer).innerHTML = totalScore1;
            if (totalScore1 > 6) {
                document.querySelector('#score-' + activePlayer).innerHTML = 'LOSE';
                changeTurn(activePlayer);
            } else if (totalScore1 == 6) {
                document.querySelector('#score-' + activePlayer).innerHTML = 'HIGHEST SCORE';
                changeTurn(activePlayer);
            }
        }
        scores[1] = document.getElementById('score-1').textContent;
    }
    console.log(scores);
    // compareResult(totalScore0,totalScore1);
})


document.querySelector('.btn-hold').addEventListener('click', () => {
    console.log('this hold', scores[0]);
    console.log('this hold', scores[1]);
    // changeTurn(activePlayer);
    if(scores[0] != 0 && scores[1] != 0){
        compareResult(scores[0], scores[1]);
    }
    else if(scores[0] == 0 || scores[1] == 0){
        changeTurn(activePlayer);
    }
})


function changeTurn(recentTurn) {
    if (recentTurn === 0) {
        turnOption(1);
    } else {
        turnOption(0);
    }
}

function compareResult(result0, result1) {
    console.log('compare', result0,result1);
    document.querySelector('.dice').style.display = 'none';
    if(result0 > result1 && result0 <=6){
        document.querySelector('.informResult').innerHTML = '<em>Player 1 won!</em>'
    }
    else if(result0 < result1 && result0 > 6){
        document.querySelector('.informResult').innerHTML = '<em>Player 2 won!</em>'
    }
    else {
        document.querySelector('.informResult').innerHTML = '<em>Tie!</em>'
    }
}

function newGame(){
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

function disableBtn() {
    let btn1 = document.querySelector('#player0');
    let btn2 = document.querySelector('#player1');
    btn2.disabled = true;
    btn1.disabled = true;
}

function enableBtn() {
    let btn1 = document.querySelector('#player0');
    let btn2 = document.querySelector('#player1');
    btn2.disabled = false;
    btn1.disabled = false;
}

