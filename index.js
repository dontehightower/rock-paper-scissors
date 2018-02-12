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
    let generator = (Math.random() * 10).toFixed;
    if (generator < 3) {
      return 'rock';
    } else if (generator > 7){
      return 'scissors';
    } else {
      return 'paper';
    }
  },

    playRound: function(playerSelection, computerSelection){
    if (playerSelection == "paper" && computerSelection == "rock") {
      playerWins = true;
      return "You Win! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "paper"){
      playerWins = false;
      return "You Lose! Paper beats Rock";
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
      playerWins = true;
      return "You Win! Scissors beats Paper!";
    } else if (playerSelection === "paper" && computerSelection === "scissors"){
      playerWins = false;
      return "You Lose! Scissors beats Paper!";
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
      playerWins = true;
      return "You Win! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection ==="rock"){
      playerWins = false; 
      return "You Lose! Rock Beats Scissors!"
    }
  },

  keepScore: function() {
    this.playerWins === true ? this.score.playerScore++ : this.score.computerScore++;
    console.log(this.score);
  },

  fiveRoundGame: function(){
    //play a 5 round game
    for(let i = 0; i < 5; i++){
      this.playRound(this.getPlayerSelection().toLowerCase(), this.computerPlay())
      this.keepScore();
    }
    //report winner or loser at the end
  }
}
rockPaperScissors.fiveRoundGame();