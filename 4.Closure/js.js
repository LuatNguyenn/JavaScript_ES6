//CLOSURE
// SUMMARY: an inner function always access to the variables and 
// parameters of its outer function, even after the outer function has
// returned. 

function retirement(retirementAge) {
    var a = ' year left until retirement'
    return function (yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66); // retirement age
retirementUS(1990) // year of birth

retirement(66)(1990);

// POWER OF CLOSURE 
function interviewQuestion(job) {
    return function (name) {
        console.log(name + ' ' + job);
    }
}

interviewQuestion('designer')('John');
interviewQuestion('teacher')('Jane');
interviewQuestion('IT')('Luat');