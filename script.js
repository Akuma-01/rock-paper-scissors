let humanScore = 0;
let computerScore = 0;

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
    let inp;
    while (inp != "scissors" || inp != "rock" || inp != "paper")
    {
        inp = (prompt("What do you want to choose? ")).toLowerCase();
    }
    
    return inp;
}

function playRound(humanChoice, computerChoice) 
{
    
}