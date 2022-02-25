const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

let isPlaying = false;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", () => {
    play(ROCK);
});
paperBtn.addEventListener("click", () => {
    play(PAPER);
});
scissorsBtn.addEventListener("click", () => {
    play(SCISSORS);
});

function play(userOption) {
    if (isPlaying) return;

    isPlaying = true;

    userImg.src = "img/" + userOption + ".svg";

    resultText.innerHTML = "Jugando!";

    const interval = setInterval(function() {
        const machineOption = calcMachineOption();
        machineImg.src = "img/" + machineOption + ".svg";
    }, 200);

    setTimeout(function() {

        clearInterval(interval);

        const machineOption = calcMachineOption();
        const result = calcResult(userOption, machineOption);

        machineImg.src = "img/" + machineOption + ".svg";

        switch (result) {
            case EMPATE:
                resultText.innerHTML = "Empate!";
                break;
            case GANASTE:
                resultText.innerHTML = "Ganaste!";
                break;
            case PERDISTE:
                resultText.innerHTML = "Perdiste!";
                break;
        }
        isPlaying = false;
    }, 2000);
}

function calcMachineOption() {
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2:
            return SCISSORS;
    }
}

function calcResult(userOption, machineOption) {
    if (userOption === machineOption) {
        return EMPATE;

    } else if (userOption === ROCK) {

        if (machineOption === PAPER) return PERDISTE;
        if (machineOption === SCISSORS) return GANASTE;

    } else if (userOption === PAPER) {

        if (machineOption === SCISSORS) return PERDISTE;
        if (machineOption === ROCK) return GANASTE;

    } else if (userOption === SCISSORS) {

        if (machineOption === ROCK) return PERDISTE;
        if (machineOption === PAPER) return GANASTE;

    }
}