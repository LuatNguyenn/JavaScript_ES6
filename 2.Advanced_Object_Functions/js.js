var Person = function (name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
}

//Inheritance
// method 
Person.prototype.calAge = function () {
    console.log(2020 - this.age);
}
// properties
Person.prototype.lastName = 'Nguyen';

var john = new Person('luat', 'IT', 11);
var jane = new Person('luat', 'IT', 12);
var smith = new Person('luat', 'IT', 13);
john.calAge();
jane.calAge();
smith.calAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(smith.lastName);
console.log(smith);

console.log(john.hasOwnProperty('lastName')); // false
// console.log(john instanceOf Person); // true


//CREATE AN OBJECT AND INHERITANCE (OBJECT.CREATE)
var languageProto = {
    calYear: function () {
        console.log(2020 - this.year);
    }
}

var Java = Object.create(languageProto);
Java.name = 'Java';
Java.year = 1990;
Java.calYear();

var PHP = Object.create(languageProto, {
    name: {
        value: 'PHP'
    },
    year: {
        value: 2000
    }
})

// PRIMITIVIVES AND OBJECT 
//primitives 
var a = 10;
var b = 20;
a = 33;
console.log(a); //33
console.log(b) //20

//object 
var obj1 = {
    name:'John',
    age: 28,
}
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age); //30
console.log(obj2.age); //30

//Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
}
function change(a,b){
    a = 30;
    b.city = 'Calgary';
}
change(age,obj);
console.log(age) //27
console.log(obj) // Calgary