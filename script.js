
let humanScore = 0;
let computerScore = 0;
let result = ''
let humanSelection = getHumanChoice().toLowerCase();
let computerSelection = getComputerChoice().toLowerCase();

function getComputerChoice() {
  let randomNumber = Math.random();
  let computerChoice = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3 ) {
    computerChoice = 'rock';
  } else if ( randomNumber >= 1 / 3 && randomNumber < 2 / 3 ) {
    computerChoice = 'paper';
  } else if ( randomNumber >= 2 / 3 && randomNumber < 1 ) {
    computerChoice = 'scissors';
  }

  return computerChoice;

};

function getHumanChoice() {
  let humanChoice = prompt('Pick a weapon');
  return humanChoice;
}


function playRound(humanChoice, computerChoice) {

  if (humanSelection === 'rock'){
    if (computerSelection === 'rock') {
      result = 'Tie';
    } else if (computerSelection === 'paper') {
      result = 'You lose';
      // computerScore += 1;
    } else if (computerSelection === 'scissors') {
      result = 'You win';
      // humanScore +=1;
    };
  };

  if (humanSelection === 'paper'){
    if (computerSelection === 'rock') {
      result = 'You win';
      // humanScore +=1;
    } else if (computerSelection === 'paper') {
      result = 'Tie';
    } else if (computerSelection === 'scissors') {
      result = 'You lose';
      // computerScore += 1;
    };
  };

  if (humanSelection === 'scissors'){
    if (computerSelection === 'rock') {
      result = 'You lose';
      // computerScore += 1;
    } else if (computerSelection === 'paper') {
      result = 'You win';

    } else if (computerSelection === 'scissors') {
      result = 'Tie';
    };
  };

return result;

};


playRound()

// console.log(`CURRENT SCORE: ${humanScore ++}  ${computerScore ++}. This is round ${roundNumber}`)
