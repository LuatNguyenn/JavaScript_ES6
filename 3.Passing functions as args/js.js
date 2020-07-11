var years = [1990,1999,2000,2020,2222];
function arrayCal(arr, fn){ //generic function
    var arrRes = [];
    for(var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i])); //callback function
    }
    console.log('this is new array', arrRes);
    return arrRes;
}

function calAge(el){
    return 2020 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <=81){
        return Math.round(206.9 - (0/67 * el));
    }
    else{
        return -1;
    }
}

var ages = arrayCal(years,calAge);
var fullAges = arrayCal(ages,isFullAge);
var calRate = arrayCal(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(calRate);

