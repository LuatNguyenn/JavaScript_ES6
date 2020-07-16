//BIND CALL AND APPLY
var john = {
    name: 'John',
    age: 20,
    job: 'Web dev',
    presentation: function (style, timeofDay) {
        if (style === 'formal') {
            console.log('Good ' + timeofDay + ' ladies and gentleman! I\'m' +
                this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old')
        } else if (style === 'friendly') {
            console.log('Hey! ' + timeofDay + ' ladies and gentleman! I\'m' +
                this.name + ' and I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old')
        }
    }
}

john.presentation('formal', '8:00');

//create new Object
var emily = {
    name: 'Emily',
    age: 20,
    job: 'Web testing',
}
//this method will borrow the function of John 
john.presentation.call(emily, 'friendly', '9:00');

//this method is similar to call method but it receives an array as arg 
// john.presentation.apply(emily,['friendly','9:00']) // not working

//this bind method will change the property
// it help resets arg 
var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

// ex 
var years = [1990, 1999, 2000, 2020, 2222];

function arrayCal(arr, fn) { //generic function
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i])); //callback function
    }
    console.log('this is new array', arrRes);
    return arrRes;
}

function calAge(el) {
    return 2020 - el;
}

function isFullAge(limit, el) {
    return el >= 18;
}

var ages = arrayCal(years, calAge);
var japan = arrayCal(ages, isFullAge.bind(this, 20));
console.log(ages); //[30, 21, 20, 0, -202]
console.log(japan); // [true, true, true, false, false]