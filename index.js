

//global variables
let quizdiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");

let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

let timer = 90;


let timerId = setInterval(function(){

    timer -=1
    console.log(timer)

}, 1000);

//Use this to clear the timer once quiz ends
clearInterval(timerId);

//have multiple questions
let questions = [{question: "Which pokemon does Ash get at the start of pokemon?", answers:["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: "pikachu" },
                {question: "Which pokemon is able deals fire damage?", answers:["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: "charmander" },
];



// main format for sellecting answers and moving on to the next 
let currentQuestion = 0;

renderQuestion();

function renderQuestion() {

    questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0]
    questionButton2.textContent = questions[currentQuestion].answers[1]
    questionButton3.textContent = questions[currentQuestion].answers[2]
    questionButton4.textContent = questions[currentQuestion].answers[3]
    questions[currentQuestion].correctAnswer

};


//Event listener for clicking in the area of the Div and to render the next question
quizdiv.addEventListener("click", function(event){

    if(event.target.matches("button")){
        console.log("clicked!")
        console.log("value:" +event.target.innerText);
        
        currentQuestion++
        renderQuestion();
    }

})

//create function to start the quiz



//create function to store the highscore in the local storage
//create button to save 
    //startercode for it
    localStorage.setItem("highScores", JSON.stringify([{"initals": "dre", "score": 80}]));
    // let highScores = JSON.parse(localStorage.getItem("highScores")) || [];