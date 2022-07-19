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
function getRandomInt(min,maxExluded){
  return Math.floor(Math.random() * (maxExluded - min) + min)
}

function getComputerChoice(){
  return shapes[getRandomInt(0,shapes.length)]
}

// Compare the player's and the machine's choice to determine winner
//  the player picks first to prevent cheating using Dev tools
// Add point to the winner

const rounds = 5;
// Game: Repeat round until one of the players points is > 1/2 of rounds

// Declare winner
