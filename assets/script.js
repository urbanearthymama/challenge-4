let startButton = document.querySelector(".start-btn")
let startQuizBox = document.querySelector(".start-quiz-box")
let questionsBox = document.querySelector(".questions-box")

var timeLeft = 75;
var timer = setInterval(() => {
    timeLeft--;
    if (timeLeft <=0) {
        clearInterval(timer);
        quizOver();
    }

    console.log(timeLeft);
}, 1000);

function startQuiz() {
    startQuizBox.classList.add('hide');
    questionsBox.classList.remove('hide');
    startTimer();
    showQuestion();
}

startButton.addEventListener('click',startQuiz)
let question = {
        prompt: 'The condition in an if / else statement is enclosed with _______________.',
        alternatives: ['(a) quotes', '(b) curly brackets', '(c) parenthesis', '(d) square brackets'],
        correctAnswer: 1
};
    // {
    //     prompt: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    //     alternatives: ['(a) JavaScript', '(b) terminal/bash', '(c) for loops', '(d) console.log',
    //     correctAnswer: 3 
    // };
    // {
    //     prompt: 'String values must be enclosed with ______________ when being assigned to variables.',
    //     alternatives: ['(a) commas', '(b) curly brackets', '(c) quotes', '(d) parenthesis'],
    //     correctAnswer: 3
    // },
    // {   prompt: 'Commonly used data types DO NOT include:',
    //     alternatives: ['(a) strings', '(b) booleans, '(c) alerts', '(d) numbers'],
    //     correctAnswer: 3
    // };
    // {
    //     prompt: 'Arrays in JavaScript can be used to store ______________.',
    //     alternatives: ['(a) numbers and strings', '(b) others arrays', '(c) booleans', '(d) all of the above'],
    //     correctAnswer: "3"
    // };

    function showQuestion(q) {
        let promptDiv = document.getElementById('prompt');
        promptDiv.textContent = q.prompt;
        let alts = document.querySelectorAll('.alternative');
        alts.forEach(function(element, index){
            element.textContent = q.alternatives[index];
            element.addEventListener('click', function() {
                if(q.correctAnswer == index) {
                    console.log('Correct Answer');
                }
            })
        });
    }

    showQuestion(question);

    // let btn = document.getElementById('btn')
    // btn.addEventListener('click', function(){
    //     console.log('Clicked!');
    // }); 