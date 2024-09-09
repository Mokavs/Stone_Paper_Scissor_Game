let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userChoicePara=document.querySelector("#user-score");
const compChoicePara=document.querySelector("#comp-score");

const getCompChoice =()=> {
    const options=["rock", "paper", "scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=() =>{
    msg.innerText = "Game was a Draw . Play Again ";
    msg.style.backgroundColor="#081b31";
}
const showWinner=(userWin, userChoice , compChoice) => {
    if (userWin){
        userScore++;
        userChoicePara.innerText= userScore;
        msg.innerText = `You Win ! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compChoicePara.innerText= compScore;
        msg.innerText = `You Lost ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    const compChoice=getCompChoice();
    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice === "paper" ? false : true;
        }
        else if(userChoice ==="paper"){
            userWin=compChoice ==="scissors" ? false :true;
        }else{
            userWin=compChoice=== "rock" ? false : true;
        }
        showWinner(userWin, userChoice ,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id")
        playGame(userChoice);
    });
});