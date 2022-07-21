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
  input = input.trim()
  shapeName = input.toLowerCase()
  switch (shapeName) {
    case `rock`:
    return shapes[0];
    case `paper`:
    return shapes[1];
    case `scissors`:
    return shapes[2];
    default:
    alert(`${input} is not a valid shape`)
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

// Compare the player's and the machine's choice to determine winner
//  the player picks first to prevent cheating using Dev tools
function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    let message = `It's a Tie! You both played ${playerSelection}\nTry again`;
    console.log(message);
    alert(message);
    return playRound(getPlayerChoice(),getComputerChoice());
  };
  switch (true) {
    default:
      message = `You lose! ${computerSelection} Beats ${playerSelection}`;
      console.log(message);
      alert(message);
      return false;
      // Matchups that the player wins
    case playerSelection == shapes[0] && computerSelection == shapes[2]:
    case playerSelection == shapes[1] && computerSelection == shapes[0]:
    case playerSelection == shapes[2] && computerSelection == shapes[1]:
      message = `You win! ${playerSelection} Beats ${computerSelection}`;
      console.log(message);
      alert(message);
      return true;
  }
}

// Game: Repeat round until one of the players points is > 1/2 of rounds
// rounds length has to be odd to ensure a zero-sum game
const rounds = new Array(5).fill(' ')
function playGame(){
  let playerScore = 0
  let computerScore = 0
  for (i = 0; i < rounds.length; i++) {
    rounds[i] = playRound(getPlayerChoice(), shapes[0])
    if (rounds[i]) {
      ++playerScore;
    if (rounds[i] == false) ++computerScore;
    if (playerScore > (rounds.length/2)) {
      console.log(`You Win!`);
      return `You Win!`;
    };
    if (computerScore > rounds.length/2) {
      console.log(`You lose.`);
      return `You lose.`;
    };
  }
}
// Declare winner
alert(playGame())
