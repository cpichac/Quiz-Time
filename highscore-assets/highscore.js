
//global variables
let quizdiv = document.querySelector("#quiz");
let questionsText = document.querySelector("h1")
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let correctAnswer = document.querySelector("#correct-answer")
let timerEl = document.querySelector("#timer")

// main format for sellecting answers and moving on to the next 
let currentQuestion = 0;

let timer = 90;

let pastHighScores = JSON.parse(localStorage.getItem("highScores")) || [];

let timerId = setInterval(function(){

    timer -=1
    console.log(timer)

}, 1000);

timerEl.textContent = "Timer: " + timer;


