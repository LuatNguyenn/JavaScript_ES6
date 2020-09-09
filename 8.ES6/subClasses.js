//conect function constructor in ES5

// var Person5 = function (name, year, job) {
//     this.name = name;
//     this.year = year;
//     this.job = job;
// }

// Person5.prototype.calAge = function () {
//     var age = new Date().getFullYear() - this.year;
//     console.log(age);
// }

// var Athlete5 = function (name, year, job, games, medals) {
//     Person5.call(this, name, year, job); //this will be set to this and an arg
//     this.games = games;
//     this.medals = medals;
// }



// Athlete5.prototype = Object.create(Person5.prototype);

// Athlete5.prototype.wonMedal = function () {
//     this.medals++;
//     console.log(this.medals);
// }

// var johnAthlete = new Athlete5('john', 1999, 'swimmer', 3, 10);
// johnAthlete.calAge();
// johnAthlete.wonMedal();






//Connect function constructor in ES6
class Person6 {
    constructor(name, year, job) {
        this.name = name;
        this.year = year;
        this.job = job;
    }
    calAge() {
        var age = new Date().getFullYear() - this.year;
    }
}

class Athlete6 extends Person6 {
    constructor(name, year, job, games, medals){
        super(name,year,job);
        this.games = games;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++;
        console.log(this.medals);
    }
}

var johnAthlete = new Athlete6('john', 1999, 'swimmer', 3, 10);
johnAthlete.wonMedal();
johnAthlete.calAge();