let user = 0;
let comp = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreBoardDiv = document.querySelector(".score");
const resultp = document.querySelector(".result > h2");
const rockDiv = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");


function getCompChoice(){
    const choices = ["rock", "paper", "scissors"]
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
(getCompChoice());

function win(userChoice, compChoice){
    const colorSelect = document.getElementById(userChoice);
    user++;
    userScoreSpan.innerHTML = user;
    compScoreSpan.innerHTML = comp;
    resultp.innerHTML = `${userChoice} beat ${compChoice} you win!`;
    colorSelect.classList.add("green");
    setTimeout(() => {colorSelect.classList.remove("green")}, 500);

}

function lose(userChoice,compChoice){
    const colorSelect = document.getElementById(userChoice);
    comp++;
    userScoreSpan.innerHTML = user;
    compScoreSpan.innerHTML = comp;
    resultp.innerHTML = `${userChoice} loses to ${compChoice} you lost, computer wins!`;
    colorSelect.classList.add("red");
    setTimeout(() => { colorSelect.classList.remove("red"); }, 500);
    
}

function tie(userChoice, compChoice){
    const colorSelect = document.getElementById(userChoice);
    userScoreSpan.innerHTML = user;
    compScoreSpan.innerHTML = comp;
    resultp.innerHTML = `${userChoice} equals ${compChoice} It's a tie!`;
    colorSelect.classList.add("grey");
    setTimeout(() => {colorSelect.classList.remove("grey")}, 500);
}

function game(userChoice){
    const compChoice = getCompChoice();
    switch(userChoice + compChoice){
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        win(userChoice, compChoice);
        break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissors":
        tie(userChoice,compChoice);
        break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        lose(userChoice,compChoice);
        break;
    }
}
  function main(){
   rockDiv.addEventListener("click", () => game("rock"));
   scissors.addEventListener("click", () => game("scissors"));
   paper.addEventListener("click", () => game("paper"));
  }
main();
