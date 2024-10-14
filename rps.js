let userScore=0;
let compScore=0;
let msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice = ()=>{
const option=["rock","paper","scissors"];
const randId=Math.floor(Math.random()*3);
return option[randId];
};
const drwaGame = () =>{
    console.log("Game was draw");
    msg.innerText="Game Was draw,play again!";
msg.style.backgroundColor=" rgb(7, 1, 32)";
};
const showWiner= (userWin,userChoice,compChoice)=>{
if(userWin){
userScore++;
userScorePara.innerText=userScore;
console.log("you win");
msg.innerText=`You Win!,${userChoice} beats ${compChoice}`;
msg.style.backgroundColor="green";
}else{
compScore++;
compScorePara.innerText=compScore;
console.log("you lose");
msg.innerText=`You Lose!, ${compChoice} beats ${userChoice}`;
msg.style.backgroundColor="red";
}
};
const playGame = (userChoice) =>{
    console.log("User choice = ",userChoice);
    const compChoice=genCompChoice();
    console.log("Computer choice = ",compChoice);
    if(userChoice===compChoice){
    drwaGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin= compChoice==="scissors"?false:true;
        }
        else{
                userWin= compChoice==="rock"?false:true;
        }
        showWiner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice=choice.getAttribute("id");
playGame(userChoice);
    });
});