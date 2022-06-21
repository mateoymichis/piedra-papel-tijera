const PIEDRA = "rock";
const PAPEL = "paper";
const TIJERA = "scissors";

const EMPATE = 0;
const GANA = 1;
const PIERDE = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

piedraBtn.addEventListener("click", ()=>{
    play(PIEDRA);
});
papelBtn.addEventListener("click", ()=>{
    play(PAPEL);
});
tijeraBtn.addEventListener("click", ()=>{
    play(TIJERA);
});

function play(userOption) {
    const machineOption = calcMachineOption();

    const result = calcResult(userOption, machineOption);

    userImg.src = "img/"+userOption+".png";
    machineImg.src = "img/"+machineOption+".png";

    switch(result) {
        case EMPATE:
            resultText.innerHTML = "Empate";
            break;
        case GANA:
            resultText.innerHTML = "Ganaste";
            break;
        case PIERDE:
            resultText.innerHTML = "Perdiste";
            break;
    }
}

function calcMachineOption() {
    const number = Math.floor(Math.random()*3);
    switch (number) {
        case 0:
            return PIEDRA;
            break;
        case 1:
            return PAPEL;
            break;
        case 2:
            return TIJERA;
            break;
    }
}

function calcResult (userOption, machineOption) {
    if (userOption === machineOption) {
        return EMPATE;
    } else if (userOption === PIEDRA){
        if (machineOption === PAPEL) { return PIERDE}
        if (machineOption === TIJERA) { return GANA}

    } else if (userOption === PAPEL){
        if (machineOption === TIJERA) { return PIERDE}
        if (machineOption === PIEDRA) { return GANA}

    } else if (userOption === TIJERA){
        if (machineOption === PIEDRA) { return PIERDE}
        if (machineOption === PAPEL) { return GANA}
    }
}