
var questions = [
    {
        prompt: "The condition in and if / else statement is enclosed with _______________.\n(a) quotes\n(b) curly brackets\n(c) parenthesis\n(d) square brackets",
        answer: "b"
    },
    {
        prompt: "A very useful tool used during development and debugging for printing content to the debugger is:\n(a) JavaScript\n(b) terminal/bash\n(c) for loops\n(d) console.log",
        answer: "d" 
    },
    {
        prompt: "String values must be enclosed with ______________ when being assigned to variables.\n(a) commas\n(b) curly brackets\n(c) quotes\n(d) parenthesis",
        answer: "d"
    },
    {   prompt: "Commonly used data types DO NOT include:\n(a) strings\n(b) booleans\n(c) alerts\n(d) numbers",
        answer: "d"
    },
    {
        prompt: "Arrays in JavaScript can be used to store ______________.\n(a) numbers and strings\n(b) others arrays\n(c) booleans\n(d) all of the above",
        answer: "d"
    },
]
var score = 0;

for(var i=0; i< questions.length; i++){
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer){
        score++;
        alert("Correct!");
    } else {
        alert("Wrong!");
    }
}
alert ("Your high score is  " + score);