let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#message");
let user_score=document.querySelector("#your-score");
let comp_score=document.querySelector("#comp-score");

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    let userChoice=choice.getAttribute("id");
    playGame(userChoice);
    })
})

const genCompChoice=()=>{
    let options=["stone","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice)=>{
    let compChoice=genCompChoice();
    if(userChoice==compChoice){
        msg.innerText="Game Draw! Play again!";
    }
    else{
        let userWin=true;
        if(userChoice=="stone"){
            userWin=compChoice=="paper"?false:true;
        }
        else if(userChoice=="paper"){
            userWin=compChoice=="scissors"?false:true;
        }
        else{
            userWin=compChoice=="stone"?false:true;
        }
        checkWinner(userWin,userChoice,compChoice);
    }
}
const checkWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        user_score.innerText=userScore;
    }
    else{
        compScore++;
        msg.innerText=`Computer Won! Computer ${compChoice} beats ${userChoice}`;
        comp_score.innerText=compScore;  
    }
}
              