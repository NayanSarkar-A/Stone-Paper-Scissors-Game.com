
let userScore=document.querySelector("#user-score");
let comouterScore=document.querySelector("#comp-score");
let drowScore=document.querySelector("#drow-score");
let choiceDiv=document.querySelectorAll(".choice-div");
let msgBox=document.querySelector("#msg");
let msgContaner= document.querySelector(".msg-contaner")
let  userCo =0;
let comsCo=0;
let drowSo=0;



choiceDiv.forEach((div)=>{
    div.addEventListener("click",()=>{
        const userVal=div.getAttribute("id");
        playGame(userVal)
    })
})



const genaretCompChoice= ()=>{
    let gamepattan=["Rock" ,"Paper","Scissors"];
    let randIdx= Math.floor(Math.random()*3); // Produces computer raldom number .
    return gamepattan[randIdx];
}



const drowGame= ()=>{
    drowSo++;
    drowScore.innerText=drowSo;
    console.log("Game was drow");
    msgBox.innerHTML="The Game Was Drow .. Play Again !"
    msgBox.style.backgroundColor="#081b31";
}



const playGame =(userVal)=>{
    console.log(`User choice is : ${userVal}`);
    const comChoice=genaretCompChoice();
    console.log(`Computer choice is  : ${comChoice}`);
    if (userVal === comChoice){
        drowGame();
    } else{
        userWin=true;
        if(userVal==="Rock"){
            // scissors , paper 
            userWin= comChoice==="Scissors" ? true : false ;
        }
        else if (userVal==="Paper "){
            // rock , scissors
            userWin= comChoice==="Scissors" ? false : true ;
        }
        else if (userVal==="Scissors"){
            // rock , paper
            userWin=comChoice==="Rock" ? false : true
        }
        showwinner( userWin , comChoice , userVal);
    }
}



const showwinner=(win , comChoice , userVal)=>{
    if(win){
        userCo++;
        let colorScore=userScore.innerText=userCo;
        console.log(`you lose`);
        msgBox.innerText=`You Win !  Your ${userVal} Beats ${comChoice}`;
        msgBox.style.backgroundColor="green";
        colorScore.style.backgroundColor="green";
    }
    else{
        comsCo++;
        comouterScore.innerText=comsCo;
        console.log("you lase");
        msgBox.innerText=`You Lose !  ${comChoice} Beats  Your ${userVal}`;
        msgBox.style.backgroundColor="red";
    }
}