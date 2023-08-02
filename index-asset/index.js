

//global variables
let quizDiv = document.querySelector("#quiz");
let questionsText = document.querySelector("h1")
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let correctAnswer = document.querySelector("#correct-answer")
let timerEl = document.querySelector("#timer")
let answers = document.querySelector("button")

// main format for sellecting answers and moving on to the next 


let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let timer = 90;
    // localStorage.setItem("pastHighScores", JSON.stringify([{"initals": "dre", "score": 80}]));


let timerId = setInterval(function(){

    timer -=1
    timerEl.textContent = timer;

}, 1000);

let currentQuestion = 0;


//Use this to clear the timer once quiz ends
// clearInterval(timerId);

//have multiple questions
let questions = [{question: "Who was the first president of the United States of America?", answers:["George Washington", "John Adams", "Ulysses S. Grant", "Abraham Lincoln"], correctAnswer: "George Washington" },
                {question: "Which president is known as the Father of the Constitution?", answers:["Abraham Lincoln", "James Madison", "John Quicny Adams", "James Monroe"], correctAnswer: "James Madison" },
                {question: "Who was the first president to appear on television?", answers:["Grover Cleveland", "Woodrow Wilson", "Dwight D. Eisenhower", "Franklin Delano Roosevelt"], correctAnswer: "Franklin Delano Roosevelt" },
                {question: "What was President Theodore Rooselvelt's nickname?", answers:["Teddy", "Ted", "Bear", "John"], correctAnswer: "Teddy" },
                {question: "Which president got a $20 speeding ticket for riding his horse and buggy too quickly?", answers:["Abraham Lincoln", "Warren G. Harding", "George Washington", "Ulysess S. Grant"], correctAnswer: "Ulysess S. Grant" },
                {question: "Which president had the longest retirement?", answers:["Franklin Pierce", "Jimmy Carter", "Benjamin Harrison", "Calvin Coolidge"], correctAnswer: "Jimmy Carter" },
                {question: "Who was the first president to live in the whitehouse.?", answers:["John Adams", "Woodrow Wilson", "George Washington", "Thomas Jefferson"], correctAnswer: "John Adams" },
                {question: "Which president was left-handed?", answers:["James Garfield", "William Henry Harris", "John Tyler", "Millard Filmore"], correctAnswer: "James Garfield" },
                {question: "Who was the first president to be impeached?", answers:["Chester A. Arthur", "James K. Polk", "Andrew Johnson", "William Howard Taft"], correctAnswer: "Andrew Johnson" },
                {question: "Which president is related to King John of England?", answers:["George Washington", "Barack Obama", "Donald John Trump", "All of the above"], correctAnswer: "All of the above" },]


timerEl.textContent = "Timer: " + timer;


renderQuestion();

function renderQuestion() {

    questionsText.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0]
    questionButton2.textContent = questions[currentQuestion].answers[1]
    questionButton3.textContent = questions[currentQuestion].answers[2]
    questionButton4.textContent = questions[currentQuestion].answers[3]
    questions[currentQuestion].correctAnswer
    
        quizDiv.addEventListener("click", function(event) {

            

            if( event.target.matches("button")){
                
                
                
                

            }  
            currentQuestion++;
            renderQuestion()
        })}
          