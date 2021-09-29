const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-quiz");
const outputEl = document.querySelector("#output-el");

const correctAns = [ "90°", "Right Angled", "60°", "Equal", "Isosceles triangle"]; 
let score = 0;

function calculateScore(){

    const data = new FormData(quizForm);
    
    let index = 0;

    for(let value of data.values()){
        console.log(value);
        if(value===correctAns[index]){
            score = score+1;
        }
        index = index+1;
    }
    outputEl.innerText = "Your Score is: " +score;
    submitButton.disabled = true;
}

submitButton.addEventListener('click', calculateScore);