

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

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let timer = 90;


let timerId = setInterval(function(){

    timer -=1
    console.log(timer)

}, 1000);

//Use this to clear the timer once quiz ends
clearInterval(timerId);

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
                {question: "Which president is related to King John of England?", answers:["George Washington", "Barack Obama", "Donald John Trump", "All of the above"], correctAnswer: "All of the above" },


            

            ]




// renderQuestion();

function renderQuestion() {

    questionsText.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0]
    questionButton2.textContent = questions[currentQuestion].answers[1]
    questionButton3.textContent = questions[currentQuestion].answers[2]
    questionButton4.textContent = questions[currentQuestion].answers[3]
    questions[currentQuestion].correctAnswer
        
    
        quizdiv.addEventListener("click", function(event){

            

            if(event.target.matches("button") == questions[currentQuestion].correctAnswer ){
                // console.log("clicked!")
                // console.log("value:" +event.target.innerText);
                
                correctAnswer.textContent = questions[currentQuestion].correctAnswer + " was correct!"
                
            }
            else{
                correctAnswer.textContent = "Previous answer was wrong!"
            }

            currentQuestion++
            renderQuestion();
        })
};

startScreen()

function startScreen(){

    questionsText.textContent = "Welcome for the presidential funifact quiz. "
    questionButton1.textContent = "Start";
    questionButton2.parentElement.remove;
    questionButton3.parentElement.remove;
    questionButton4.parentElement.remove;

    questionButton1.addEventListener("click", function(event){

        renderQuestion();

    } )

}


//Event listener for clicking in the area of the Div and to render the next question


//create function to start the quiz



//create function to store the highscore in the local storage
//create button to save 
    //startercode for it
    localStorage.setItem("highScores", JSON.stringify([{"initals": "dre", "score": 80}]));
    // let highScores = JSON.parse(localStorage.getItem("highScores")) || [];