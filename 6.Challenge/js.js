var Question = function (questions, answers, correctAnswers) {
<<<<<<< HEAD
    this.question = questions;
    this.answers = answers;
    this.correctAnswers = correctAnswers;
}
//var questionArray = ['ques 1','ques 2','ques 3','ques 4','ques 5'];

 (function() {
    Question.prototype.displayQuestion = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    };
    Question.prototype.checkAnswer = function (ans) {
        if (ans == this.correctAnswers) console.log('correct');
        else if (ans != this.correctAnswers) console.log('Wrong');
    }


    var q1 = new Question('Is JavaScript good ?', ['Yes', 'No'], 0);
    var q2 = new Question('Is Java OOP ?', ['Yes', 'No', 'Dont know'], 0);
    var q3 = new Question('Is HTML a programing language ?', ['Yes', 'No'], 1);
    var questions = [q1, q2, q3];


    function nextQuestion(){
        var n = Math.floor(Math.random() * questions.length);
        console.log(questions[n].displayQuestion());
        console.log(questions[n].correctAnswers);
    
        var answer = parseInt(prompt(
            'Select answer'
        ));
    
        questions[n].checkAnswer(answer);    var inputValue = window.prompt('Enter your correct answer here');
    }
    
    nextQuestion();
});
=======
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
>>>>>>> e35d46ff0728f7c24e7489a309de88d6629fa2e9

