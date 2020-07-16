var Question = function (questions, answers, correctAnswers) {
    this.questions = questions;
    this.answers = answers;
    this.correctAnswers = correctAnswers;
}
var questionArray = ['ques 1','ques 2','ques 3','ques 4','ques 5'];

(function generateQuestion() {
    let randomQuestion = pickRandomQuestion();
    let question = new Question(questionArray[randomQuestion], inputValue, 'Luat');
    console.log(question.questions);
    var inputValue = window.prompt('Enter your correct answer here');

})();

function pickRandomQuestion() {
    var randomNumber = Math.floor(Math.random() * 5 + 1);
    console.log(randomNumber);
    return randomNumber;
}

