// var years = [1990,1999,2000,2020,2222];
// function arrayCal(arr, fn){ //generic function
//     var arrRes = [];
//     for(var i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i])); //callback function
//     }
//     console.log('this is new array', arrRes);
//     return arrRes;
// }

// function calAge(el){
//     return 2020 - el;
// }

// function isFullAge(el){
//     return el >= 18;
// }

// function maxHeartRate(el){
//     if(el >= 18 && el <=81){
//         return Math.round(206.9 - (0/67 * el));
//     }
//     else{
//         return -1;
//     }
// }

// var ages = arrayCal(years,calAge);
// var fullAges = arrayCal(ages,isFullAge);
// var calRate = arrayCal(ages, maxHeartRate);
// console.log(ages);
// console.log(fullAges);
// console.log(calRate);

// FUNCTIONS RETURNING FUNCTIONS
// function interviewQuestion(job){
//     if(job === 'designer'){
//         return function(name){
//             console.log(name + ', designer')
//         }
//     }
//     else if(job === 'teacher'){
//         return function(name){
//             console.log(name + ', teacher');
//         }
//     }
//     else{
//         return function(name){
//             console.log('hello' + name);
//         }
//     }
// }

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('John');
// teacherQuestion('Mark');

// interviewQuestion('teacher')('Jane');

//THIS FUNCTION DOESN'T NEED TO HAVE NAME AND IT'S AUTOMATICALLY CALLED
(function (goodLuck){
    var score = Math.random() * 10;
    console.log(goodLuck);
    console.log(score > 5 - goodLuck); // score > 5 - 5
})(5);
// console.log(score);


