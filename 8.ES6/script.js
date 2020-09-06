let fname = "John";
let lname = "Nguyen";
let year = "1997";

function calAge(year) {
    return 2020 - year;
}

console.log(`this is ${fname} and ${calAge(year)}`);

const n = `${fname} ${lname}`;
console.log(n.startsWith('j'));

//Arrow func
const years = [1990, 1965, 1982, 1937];

var ages = years.map((el) => el - 1);
console.log(ages);

ages = years.map((el, index) => `Age element ${index + 1}: ${2020-el}`);
console.log(ages);

//more than 1 line of code
ages = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index + 1}: ${2020-el}`;
})
console.log(ages);

//Arrow func 2 
//ES5

var box5 = {
    color: 'green',
    position: 1,
    clickMe: function () {
        // var self = this;

        document.querySelector('.green').addEventListener('click',
            function () {
                var str = 'this is box number ' + this.position +
                    ' and it is ' + this.color; // this.position and this.color is undefined
                //because this.keyword doesn't point to box5 obj ( b/c 2 level of function)
                alert(str);
            })
    }
}
box5.clickMe();

// ES6 to avoud this 

var box6 = {
    color: 'green',
    position: 1,
    clickMe: () => { // undefined b/c this shared the lexical this to global obj
        //nolonger has it's own this keyword
        document.querySelector('.green').addEventListener('click',
            () => { // have access this box6 b/c it shared lexical 
                var str = 'this is box number ' + this.position +
                    ' and it is ' + this.color;
                alert(str);
            })
    }
}
box6.clickMe();


//Contructor 
// var name = 'dsfgdfg';

function Person(name) {
    this.name = name;
}
//ES5
Person.prototype.myFriend5 = function (friends) {
    //right here we will have the access to this.name

    var arr = friends.map(function (el) {
        //right here we dont have access to this.name bc it pointed to global obj
        return this.name + ' is friends with ' + el;
    }.bind(this)); //create copy of this function using bind method, now this keywork is global
    // console.log(arr);
}



//ES6
Person.prototype.myFriend6 =  function(friends){
    var arr6 = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr6);
}

var friends = ['Bob', 'jame', 'mark'];
new Person('John').myFriend6(friends);