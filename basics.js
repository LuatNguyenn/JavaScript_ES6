/*
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
*/



//DOM and DOM MANIPULATION 
console.log('THIS IS THE DOM SECTION (GAME)');

var scores, roundScore, activePlayer, dice;
var numberTurn;
numberArray = [];

var x = document.querySelector('#score-0').textContent; // just read the content and store 'x'
scores = [0, 0];
roundScore = 0;
activePlayer = 0; //player 1 = 0 player 2 = 1
document.querySelector('.dice').style.display = 'none';
console.log(dice);
console.log(x);

// can use InnerHTML or textContent but only plain text applied
// document.querySelector('#current-' + activePlayer).textContent = '<em>'; 
// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

function turnOption(playerTurn) {
    let turn = playerTurn == 0 ? activePlayer = 0 : activePlayer = 1;
    gameStart(turn);
    // activePlayer = playerTurn;
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
    dice = Math.floor(Math.random() * 6) + 1;
    let totalScore = 0;
    console.log('this is in event btn roll should be 1', activePlayer)
    document.querySelector('#current-' + activePlayer).textContent = dice;
    numberArray.push(dice);
    document.querySelector('#generatedNumbers-' + activePlayer).innerHTML = numberArray;

    for (let i = 0; i < numberArray.length; i++) {
        totalScore += numberArray[i];
        if (totalScore > 100) {
            alert('Max is 100');
            totalScore = totalScore - numberArray[numberArray.length - 1];
            activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
            turnOption(activePlayer);
        }
        else if (totalScore == 100){
            alert('Congrats');
            activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
            turnOption(activePlayer);
        }
        // if (totalScore > 100) {
        //     totalScore = totalScore - numberArray[numberArray.length - 1];
        //     if (activePlayer === 0) {
        //         activePlayer = 1;
        //         // gameStart(activePlayer);
        //     } else {
        //         activePlayer = 0;
        //         // gameStart(activePlayer);
        //     }
        // }

        console.log(totalScore)
    }
    document.querySelector('#score-' + activePlayer).innerHTML = totalScore;

})





function disableBtn() {
    let btn1 = document.querySelector('#player0');
    let btn2 = document.querySelector('#player1');
    btn2.disabled = true;
    btn1.disabled = true;
}