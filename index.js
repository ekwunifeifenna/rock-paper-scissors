function getComputerChoice(){
    //math.floor returns the largest integer less than or equal to the given number
    //Math.random returns a number between 0 and 1
    /* 
    I have 3 choices here rock paper and scisssors which i want to index 0 to 2. To do that
    I would need to do math.random *3 to make the highest possible number to be 2.9, and then the 
    math.floor rounds it down to he largst integer less than or equal, so the highest number will be 2.
    Then I will use switch for the implemantation */
    
    const choice = Math.floor(Math.random()*3);

    switch(choice){
        case 0:
            return `Rock`;
        
        case 1:
            return `Paper`;
        
        case 2:
            return `scissors`;
    }


}



// function playRound(playerSelection, computerSelection){
//     if(playerSelection === computerSelection){
//         return `Tie game, you both picked ${computerSelection}`;
//     } else if(playerSelection.ignoreCase == `rock` && computerSelection.ignoreCase == `Paper`){
//         return `You Lose, ${computerSelection} beats ${playerSelection}`;
//     }
    

// }