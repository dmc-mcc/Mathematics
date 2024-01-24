/*
wait fpr the page/DOM to load
add event listeners
*/

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
                //alert("You clicked submit");
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

/**
 * Check the users answer against correct answer
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Well Done, Correct.");
        incrementScore();
    } else {
        alert( `oh well ..  ${userAnswer} Wrong!!!! the correct answer is ${calculatedAnswer[0]}`)
        incrementWrongAnswer();
    }

}

/**
 * Read the operands and operator from the DOM
 * Calculate the answer
 */
function calculateCorrectAnswer() {
    let a = parseInt(document.getElementById("operand1").innerText);
    let b = parseInt(document.getElementById("operand2").innerText);
    let operator = document.getElementById("operator").innerText;

    if(operator === "+"){
        return [a + b, "addition"];
    } else {
        alert(`unimplemented operator ${operator}`);
        throw `unimplemented operator ${operator}, abort.`;
    }
}
/**
 * get current score count from DOM and increment it
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
}

/**
 * get current incorrect score count from DOM and increment it
 */

function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;

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