let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const generateComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    let idx=Math.floor(Math.random()*3);
    return options[idx];

}

const draw=()=>{
    console.log("Draw");
    msg.innerText="draw!";
    msg.style.backgroundColor="black";
}
const showWinner=(userwin)=>{
    if(userwin)
    {
        userScore++;
        userscorepara.innerText=userScore;
        console.log("You win!");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorepara.innerText=userScore;
        console.log("Computer win");
        msg.innerText="you lose!";
        msg.style.backgroundColor="red";
    }
}
let playgame=(userchoice)=>{
  console.log("user choice =",userchoice);

  //generate computer choice
  const compchoice=generateComputerChoice();
  console.log("comp choice= ",compchoice);

  if(userchoice===compchoice)
  {
         draw();
  }
  else{
    let userwin=true;
    if(userchoice==="rock")
    {
        userwin=compchoice==="paper"?false:true;

    }
    else if(userchoice==="paper")
    {
        userwin=compchoice==="scissors"?false:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin);
  }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        console.log("choice was clicked and its id is ",userchoice);
        playgame(userchoice);
    })
})