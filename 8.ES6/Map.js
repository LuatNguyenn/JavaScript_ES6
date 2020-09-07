// MAPS 
const question = new Map();
question.set('question', 'what is this language?'); //key => value
question.set(1,'ES6');
question.set(2,'ES5');
question.set(3,'ES7');
question.set(4,'ES8');
question.set('correct', 2);
question.set(true,'correct');
question.set(false,'wrong');

// retrieve value from map using get 
console.log(question.get('question'));
console.log(question.size);

if(question.has(4)) console.log('yes'); //delete key
// question.clear();


question.forEach((element,key) => {
    console.log(`this is ${element} at ${key}`);
});


for(let [key,value] of question.entries()){
    if(typeof(key) === 'number'){
        console.log(`answer ${key}: ${value}`);
    }
}


const ans = parseInt(prompt('Enter number'));
console.log(question.get(ans === question.get('correct')));



    














