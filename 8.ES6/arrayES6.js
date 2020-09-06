// Array 

const boxes = document.querySelectorAll('.box');


//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(element) {
    element.style.backgroundColor = 'yellow'
});


//ES6
const boxesArr6 = Array.from(boxes); //convert boxes to an array
boxesArr6.forEach(cur => cur.style.background = 'gray');


//ES5 loop
for(var i = 0; i < boxesArr5.length; i++){
    if(boxesArr5[i].className === 'box blue'){
        continue; //skip this 
        // break
    }
    boxesArr5[i].textContent = 'i changed to blue'
}

//ES6 loop
for (const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'i changed to blue';

}

// ES5
// find all ages which greater than 18 
var ages = [12,33,4,5,6,66,88];
var fullAge = ages.map(function(element){
    return element > 18;
});
console.log(fullAge.indexOf(true)) //index 1
console.log(ages[fullAge.indexOf(true)]); //33


// ES6
console.log(ages.findIndex(cur => cur > 18)); //1
console.log(ages.find(cur => cur > 18)); //33