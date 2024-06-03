let humanScore = 0;
let computerScore = 0;

const humanChoices = document.querySelectorAll(".choices");
const announce = document.querySelector("#announce");
let liveHumanScore = document.querySelector("#humanScore");
let liveCompScore = document.querySelector("#compScore");
let start = document.querySelector("#reset")

humanChoices.forEach((humanChoice) => {
    humanChoice.addEventListener("click", (event) => {
        let target = event.target;
        switch (target.id)
        {
            case 'rock':
                playRound("rock", getComputerChoice());
                break;
            case 'paper':
                playRound("paper", getComputerChoice());
                break;
            case 'scissors':
                playRound("scissors", getComputerChoice());
                break;
        }
        conclusion();
    })
})

function getComputerChoice()    
{
    let compChoice = Math.round(Math.random() * 100);

    if (compChoice % 3 === 0) 
    {
        return "rock";
    }
    else if (compChoice % 2 === 0)
    {
        return "paper";
    }
    else 
    {
        return "scissors";
    }
}

function declareWinner()
{
    if (humanScore > computerScore)
    {
        announce.textContent = "Congratulations! You are the Winner";
    }
    else if (humanScore < computerScore)
    {
        announce.textContent = "Loser! You Lost";
    }
    else
    {
        announce.textContent = "Its a Draw!";
    }
}

function playRound(humanChoice, computerChoice) 
{

    if (( humanChoice === "rock" && computerChoice === "scissors" ) || ( humanChoice === "paper" && computerChoice ==="rock" ) || ( humanChoice === "scissors" && computerChoice ==="paper" ))
    {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        liveHumanScore.textContent = humanScore;
    }
    else if (humanChoice == computerChoice)
    {
        console.log("Its a draw");
    }
    else
    {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        liveCompScore.textContent = computerScore;        
    }
}

const conclusion = () => {
    if (humanScore === 5 || computerScore === 5)
    {
        liveHumanScore.textContent = humanScore;
        liveCompScore.textContent = computerScore;
        declareWinner();      
        alert("If you want to play again. Press RESET!");  
    }
}

start.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    liveCompScore.textContent = 0;
    liveHumanScore.textContent = 0;
    announce.textContent = "";
})

