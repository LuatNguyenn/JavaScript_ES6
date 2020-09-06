//Spread operator

function addFourAges(a,b,c,d){
    return a + b + c + d;
}

var sum1 = addFourAges(11,22,33,44);
console.log(sum1);

// how to pass entire array into a function 
// ES5 
var ages = [11,22,33,44];
//apply method used to receive an array;
var sum2 = addFourAges.apply(null,ages);
console.log(sum2)

// ES6
const max3 = addFourAges(...ages); //dau 3 cham lay tung phan tu element
console.log(max3);


// joining array
const family1 = ['1','2','3','4'];
const family2 = ['7','8','9','10'];
const bigFamily = [...family1, 5,6,...family2];
console.log(bigFamily);


const boxes = document.querySelectorAll('.box');
const h1 = document.querySelector('h1');
const all = [h1, ...boxes];
console.log(all)

Array.from(all).forEach(el => el.style.color = 'yellow');



//REST PARAMETER
function isFullAge(){
    // console.log(arguments);
    var argArray = Array.prototype.slice.call(arguments);
    argArray.forEach(function(cur){
        console.log((2016- cur) > 10)
    })
}
isFullAge(1990,8163,3322);

// ES6
function isFullAge(...years){//convert to an array
    console.log(years);
    years.forEach(cur=> (2020 - cur) > 10);
}
isFullAge(1111,2222,333,4444) 