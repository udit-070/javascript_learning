console.log("Start the Rock, Paper and Scissors Game");
rockPaperScissorGame ();




function rockPaperScissorGame(){

    // Random Number Generation
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    if(randomNumber ===1 ){
        randomNumber = "rock";
    }
    else if(randomNumber===2){
        randomNumber = "paper";
    }
    else{
        randomNumber = "scissors";
    }
        const compChoice = randomNumber;

    // Input to be taken from User
    let userPromptInput = prompt("Enter your choice");
    const userChoice = userPromptInput.toLowerCase();

    // Print the choices from both parties
    console.log(`The choice made by you is ${userChoice}`);
    console.log(`The choice made by the computer is ${compChoice}`);


    // Logic to choose the winner
    if(
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissors" && compChoice === "paper")
    ){
        console.log("Hurray!! You are the winner");
    }
    
    else if((compChoice === "rock" && userChoice === "scissors") ||
        (compChoice === "paper" && userChoice === "rock")  ||
        (compChoice === "scissors" && userChoice === "paper") 
    ){
        console.log(`Oh no !! You lost`);
    }

    else if (compChoice === userChoice){
        console.log(`Its a tie`);
        
    }
    else{
        console.log(`We are unable to read your input. Please try again`);
        
    }

    let playAgainPrompt = prompt("Do you want to play again?")
    const playAgain = playAgainPrompt.toLowerCase();   
    
    if(playAgain ==="yes"){
        rockPaperScissorGame();
    }
    if (playAgain ==="no"){
        console.log(`See you later`);
        
    }

}