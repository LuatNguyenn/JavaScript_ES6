// Destructuring 
// now create an array and store each element of this array to a 
//single variable

// ES5
// var john = ['John','26'];
// var name = john[0];
// var john = john[1];


// ES6
const [name, year] = ['john', 26];
console.log(name)
console.log(year)

const obj = {
    fname: 'John',
    lname: 'Smith'
};

const {fname,lname} = obj;
console.log(fname)
console.log(lname)

const {fname: a, lname: b} = obj;
console.log(a)
console.log(b)

//return dc ca 2 gia tri
function calcAge(year){
    const age = new Date().getFullYear()-year;
    return [age, 65 - age];
}

const [age, retirement] = calcAge(1990);
console.log(age)
console.log(retirement)