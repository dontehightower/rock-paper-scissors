const rock     = document.getElementById('rock'),
      paper    = document.getElementById('paper'),
      scissors = document.getElementById('scissors'),
      messages = document.getElementById('messages'),
      p = document.createElement('p');
const rockPaperScissors = {
 score: {
    playerScore: 0,
    computerScore: 0
  },
  playerWins: undefined,
  message: undefined,
  // getPlayerSelection: function(){
  //   return prompt("Choose your weapon. Rock, Paper, or Scissors?");
  // },

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
        this.message = "You Win! Paper beats Rock";
        p.textContent = this.message;
        messages.appendChild(p)
      } else if (playerSelection === "rock" && computerSelection === "paper"){
        this.playerWins = false;
        this.message = "You Lose! Paper beats Rock";
        p.textContent = this.message;
        messages.appendChild(p)
      } else if (playerSelection === "scissors" && computerSelection === "paper"){
        this.playerWins = true;
        this.message = "You Win! Scissors beats Paper!";
        p.textContent = this.message;
        messages.appendChild(p)
      } else if (playerSelection === "paper" && computerSelection === "scissors"){
        this.playerWins = false;
        this.message = "You Lose! Scissors beats Paper!";
        p.textContent = this.message;
        messages.appendChild(p)
      } else if (playerSelection === "rock" && computerSelection === "scissors"){
        this.playerWins = true;
        this.message = "You Win! Rock beats Scissors!";
        p.textContent = this.message;
        messages.appendChild(p)
      } else if (playerSelection === "scissors" && computerSelection ==="rock"){
        this.playerWins = false; 
        this.message = "You Lose! Rock Beats Scissors!";
        p.textContent = this.message;
        messages.appendChild(p)
      } else {
        this.playerWins = undefined;
        this.message = "It's a tie!";
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

scissors.addEventListener('click', function(event) {
  rockPaperScissors.playRound('scissors', rockPaperScissors.computerPlay());
});
paper.addEventListener('click', function(event){
  rockPaperScissors.playRound('paper', rockPaperScissors.computerPlay());
});
rock.addEventListener('click', function(event){
  rockPaperScissors.playRound('rock', rockPaperScissors.computerPlay());
});