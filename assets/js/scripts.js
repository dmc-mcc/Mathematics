/*
wait fpr the page/DOM to load
add event listeners
*/

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType)
                //alert(`You clicked ${gameType}`);
            }
        })
    }
    runGame("addition")
})

/**
 * Main Game Loop
 */
function runGame(gameType) {
    let num1 = Math.ceil(Math.random()*25);
    let num2 = Math.ceil(Math.random()*25);

    if(gameType === "addition"){
        displayAdditionQuestion(num1,num2);
    } else {
        alert(`unknown game ${gameType}`);
        throw `unknown game ${gameType}. Abort, Abort`;
    }

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion( op1, op2) {
    document.getElementById("operand1").textContent = op1;
    document.getElementById("operand2").textContent = op2;
    document.getElementById("operator").textContent = '+';

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}