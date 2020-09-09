//ES5

var Person5 = function (name, year, job) {
    this.name = name;
    this.year = year;
    this.job = job;
}

Person5.prototype.calAge = function () {
    var age = new Date().getFullYear - this.year;
    console.log(age);
}

var john = new Person5('john', 1990, 'teacher');


// ES6 
class Person6 {
    constructor(name, year, job) {
        this.name = name;
        this.year = year;
        this.job = job;
    }
    calAge() {
        var age = new Date().getFullYear - this.year;
        // console.log(age);
    }

    static greeting(){
        console.log('this is static method which is not inheritace') //Error
    }

}

var john6 = new Person6('john6', 1990, 'teacher');
john6.calAge();
Person6.greeting();
