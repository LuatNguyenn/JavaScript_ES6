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

ages = years.map((el,index) => `Age element ${index + 1}: ${2020-el}`);
console.log(ages);

//more than 1 line of code
ages = years.map((el,index) => {
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
    clickMe:function(){
        var self = this;


        var draftObj = {
            color:'color 2',
            position:1,
        }


        document.querySelector('.green').addEventListener('click',
        function(){

            var str = 'this is box number ' + draftObj.position + 
            ' and it is ' + draftObj.color; // this.position and this.color is undefined
            //because this.keyword doesn't point to box5 obj
            alert(str);
        })
    }
}
box5.clickMe();

// ES6

var box6 = {
    color: 'green',
    position: 1,
    clickMe:function(){
        document.querySelector('.green').addEventListener('click',
        ()=>{
            var str = 'this is box number ' + this.position + 
            ' and it is ' + this.color;
            // alert(str);
        })
    }
}
box6.clickMe();