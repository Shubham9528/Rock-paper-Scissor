let data = ["rock", "paper", "scissor"];
let userScore=0;
let compScore=0;
const choices = document.querySelectorAll(".card-Img");


choices.forEach((choice) => {
    
    choice.addEventListener("click", () => {

        document.querySelector(".userTxt").innerHTML=userScore;
    document.querySelector(".compTxt").innerHTML=compScore;
        const userChoice=choice.getAttribute("id");
        //console.log("choice was clicked"+choiceId);
       
        let compChoice=data[Math.floor(Math.random()*data.length)];

        if(compChoice==userChoice){
            document.querySelector(".btn").innerHTML="Draw"
            document.querySelector(".btn").style.backgroundColor="white"

        }
        else if(compChoice=='rock' && userChoice=='paper'){
            document.querySelector(".btn").innerHTML="Your choice is "+userChoice+" Computer choice is "+compChoice+" You Win";
            document.querySelector(".btn").style.backgroundColor="green"
            userScore++;
        }
        else if(compChoice=='rock' && userChoice=='scissor'){
            document.querySelector(".btn").innerHTML="Your choice is "+userChoice+" Computer choice is "+compChoice+" You Lose";
            document.querySelector(".btn").style.backgroundColor="red"
            compScore++;
        }
        else if(compChoice=='paper' && userChoice=='scissor'){
            document.querySelector(".btn").innerHTML="Your choice is "+userChoice+" Computer choice is "+compChoice+" You Win";
            document.querySelector(".btn").style.backgroundColor="green"
            userScore++;
        }
        else if(compChoice=='paper' && userChoice=='rock'){
            document.querySelector(".btn").innerHTML="Your choice is "+userChoice+" Computer choice is "+compChoice+" You Lose";
            document.querySelector(".btn").style.backgroundColor="red"
            compScore++;

        }
        else if(compChoice=='scissor' && userChoice=='rock'){
            document.querySelector(".btn").innerHTML="Your choice is "+userChoice+" Computer choice is "+compChoice+" You Win"
            document.querySelector(".btn").style.backgroundColor="green"
            userScore++;
        }
        else if(compChoice=='scissor' && userChoice=='paper'){
            document.querySelector(".btn").innerHTML="Your choice is "+userChoice+" Computer choice is "+compChoice+" You Lose"
            document.querySelector(".btn").style.backgroundColor="red"
            compScore++;
        }

         
        
    })
})



