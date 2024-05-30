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

function getHumanChoice() 
{
    let inp = prompt("What do you want to choose? ");

    while (inp != "scissors" && inp != "rock" && inp != "paper")
    {
        inp = prompt("What do you want to choose? ");
    }

    return inp.toLowerCase();
}


function playGame() 
{
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) 
    {
        if (( humanChoice === "rock" && computerChoice === "scissors" ) || ( humanChoice === "paper" && computerChoice ==="rock" ) || ( humanChoice === "scissors" && computerChoice ==="paper" ))
        {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        }
        else if (humanChoice == computerChoice)
        {
            console.log("Its a draw");
        }
        else
        {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);        
        }
    }

    
    for (let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
}

playGame();