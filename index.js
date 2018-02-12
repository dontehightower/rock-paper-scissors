const rockPaperScissors = {
 score: {
    playerScore: 0,
    computerScore: 0
  },
  playerWins: undefined,

  getPlayerSelection: function(){
    return prompt("Choose your weapon. Rock, Paper, or Scissors?");
  },

  computerPlay: function(){
    let generator = (Math.random() * 10).toFixed();
    if (generator <= 3) {
      return 'rock';
    } else if (generator <= 6){
      return 'scissors';
    } else if (generator <= 10) {
      return 'paper';
    }
  },

  playRound: function(playerSelection, computerSelection){
    if(playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissors"){
      if (playerSelection === "paper" && computerSelection === "rock") {
        this.playerWins = true;
        console.log( "You Win! Paper beats Rock");
      } else if (playerSelection === "rock" && computerSelection === "paper"){
        this.playerWins = false;
        console.log( "You Lose! Paper beats Rock");
      } else if (playerSelection === "scissors" && computerSelection === "paper"){
        this.playerWins = true;
        console.log( "You Win! Scissors beats Paper!");
      } else if (playerSelection === "paper" && computerSelection === "scissors"){
        this.playerWins = false;
        console.log( "You Lose! Scissors beats Paper!");
      } else if (playerSelection === "rock" && computerSelection === "scissors"){
        this.playerWins = true;
        console.log( "You Win! Rock beats Scissors!");
      } else if (playerSelection === "scissors" && computerSelection ==="rock"){
        this.playerWins = false; 
        console.log("You Lose! Rock Beats Scissors!");
      } else {
        this.playerWins = undefined;
        console.log("It's a tie!")
      }
    } else {
      playerSelection = prompt("Invalid Choice, please select rock, paper, or scissors");
    }
  },

  keepScore: function() {
    if(this.playerWins === true){
      this.score.playerScore++;
    } else if (this.playerWins === false){
      this.score.computerScore++;
    }
    console.log(this.score);
  },

  fiveRoundGame: function(){
    //play a 5 round game
    for(let i = 0; i < 5; i++){
      this.playRound(this.getPlayerSelection().toLowerCase(), this.computerPlay())
      this.keepScore();
    }
  }
}
rockPaperScissors.fiveRoundGame();