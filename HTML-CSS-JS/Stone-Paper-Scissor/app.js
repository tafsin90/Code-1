let userScore = 0;
let botScore = 0;
let drawScore = 0;
const userScorePara = document.querySelector("#player-score");
const botScorePara = document.querySelector("#bot-score");
const drawScorePara = document.querySelector("#draw-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const resetBtn = document.querySelector("#reset-btn");



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});


const genBotChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const playgame = (userChoice) => {
    console.log(userChoice);
    const botChoice = genBotChoice();
    console.log(botChoice);

    if(userChoice === botChoice){
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            if(botChoice === "paper"){
                userWin = false;
            }
        }
        else if(userChoice === "paper"){
            if(botChoice === "scissor"){
                userWin = false;
            }
        }
        else if(userChoice === "scissor"){
            if(botChoice === "rock"){
                userWin = false;
            }
        }
        showWinner(userWin);
    }
}


const drawGame= () => {
    drawScore++;
    console.log("Game was draw");
    msg.innerText = "Game was draw"
    msg.style.backgroundColor="#8d99ae";
    drawScorePara.innerText = drawScore;
}

const showWinner = (userWin) => {
    if(userWin){
        userScore++;
        console.log("You win");
        msg.innerText = "You Win!"
        msg.style.backgroundColor="green";
        userScorePara.innerText = userScore;
    }
    else{
        botScore++;
        console.log("You lose");
        msg.innerText = "You Lose!"
        msg.style.backgroundColor="red";
        botScorePara.innerText = botScore;
    }
}


const resetGame = () => {
    userScore=0;
    botScore=0;
    drawScore=0;
    userScorePara.innerText = userScore;
    botScorePara.innerText = botScore;
    drawScorePara.innerText = drawScore;

    msg.innerText = "Play your move";
    msg.style.backgroundColor = "#8d99ae";
}
resetBtn.addEventListener("click",resetGame);