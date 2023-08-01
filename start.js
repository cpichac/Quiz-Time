
//global variables
let quizdiv = document.querySelector("#quiz");
let questionsText = document.querySelector("h1")
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let correctAnswer = document.querySelector("#correct-answer");
let timerEl = document.querySelector("#timer");
let startButton = document.querySelector("start-btn");

// main format for sellecting answers and moving on to the next 
let currentQuestion = 0;

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let timer = 90;

timerEl.textContent = "Timer: " + timer;



