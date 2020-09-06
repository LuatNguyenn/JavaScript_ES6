// Array 

const boxes = document.querySelectorAll('.box');


//ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
// boxesArr5.forEach(function(element) {
//     element.style.backgroundColor = 'yellow'
// });


//ES6
const boxesArr6 = Array.from(boxes); //convert boxes to an array
boxesArr6.forEach(cur => cur.style.background = 'gray');


//ES5 loop
// for(var i = 0; i < boxesArr5.length; i++){
//     if(boxesArr5[i].className === 'box blue'){
//         continue; //skip this 
//         // break
//     }
//     boxesArr5[i].textContent = 'i changed to blue'
// }

//ES6 loop
for (const cur of boxesArr6){
    if(cur.className.includes('blue')){
        continue;
    }
    cur.textContent = 'i changed to blue';

}