// Store a list of the possible hand shapes
//   (should prob be an object but havent dealt with those yet)
const shapes = [
  `✊ Rock`,
  `✋ Paper`,
  `✌ Scissors`
];

// Ask the player for an input
function getPlayerChoice(){
  let playerChoice
  do {
    playerChoice = prompt(`Please type in the name of a hand shape
    ✊ Rock
    ✋ Paper
    ✌ Scissors
    `)
    playerChoice = validateInput(playerChoice)
    // If invalid ask again
  } while (!playerChoice)
  return playerChoice
}

// Check the input against the list:
function validateInput(input){
  if (!input) {
    alert (`Please type in a value`)
    return false
  }
  input.trim()
  shapeName = input.toLowerCase()
  switch (shapeName) {
    case `rock`:
    return shapes[0];
    case `paper`:
    return shapes[1];
    case `scissors`:
    return shapes[2];
    default:
    alert(`"${input}" is not a valid shape`)
    return false;
  }
}

// Pick a random shape from the list (Computer "choice")
function getRandomInt(min, maxExluded){
  return Math.floor(Math.random() * (maxExluded - min) + min)
}

function getComputerChoice(){
  return shapes[getRandomInt(0,shapes.length)]
}

// Game: Repeat round until one of the players points is > 1/2 of rounds
function playGame(){
  // rounds length has to be odd to ensure a zero-sum game
  const rounds = new Array(5).fill(' ')
  let playerScore = 0
  let computerScore = 0
  for (i = 0; i < rounds.length; i++) {
    do {
    // computer fixed to stone for testing purposes, tie for random
    rounds[i] = playRound(getPlayerChoice(), shapes[0])
      logRound(rounds[i])
    } while (rounds[i].result == `Tie`);
    if (playerScore > (rounds.length/2)) {
      console.log(`You Win!`);
      return `You Win!`;
    };
    if (computerScore > rounds.length/2) {
      console.log(`You lose.`);
      return `You lose.`;
    };
  }

  // Compare the player's and the machine's choice to determine winner
  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
      let message = `It's a Tie! You both played ${playerSelection}\nTry again`;
      console.log(message);
      alert(message);
      return playRound(getPlayerChoice(),getComputerChoice());
    };
    switch (true) {
      default:
        ++computerScore
      return {
        result: `Lose`,
        winner: computerSelection,
        loser: playerSelection
      }
      // Matchups that the player wins
      case playerSelection == shapes[0] && computerSelection == shapes[2]:
      case playerSelection == shapes[1] && computerSelection == shapes[0]:
      case playerSelection == shapes[2] && computerSelection == shapes[1]:
        ++playerScore
      return {
      result: `Win`,
        winner: playerSelection,
        loser: computerSelection
      };
    }
  }
}
// Declare winner
function logRound(round){
  let message = `You ${round.result}! `
  switch (round.result){
    case `Tied`:
      message += `You both played ${round.loser}`;
      message += `\nTry again!`;
    break
    default:
      message += `${round.winner} beats ${round.loser}`;
    break
  }
  console.log(message)
}

alert(playGame())
