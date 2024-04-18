let userScore = 0;
let compScore = 0;
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");



const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    
    msg.innerText = "The game was Draw! Play Again";
    msg.style.backgroundColor = "#010217";
}


const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Won ! Your ${userChoice} Beats ${compChoice} `;
        msg.style.backgroundColor = "green";

    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose !  ${compChoice} Beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) => {
  
    //generate comp choice
    const compChoice = genComChoice();


    if (compChoice === userChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        }
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userChoice = choices.getAttribute("id");
        playGame(userChoice);
    })
})