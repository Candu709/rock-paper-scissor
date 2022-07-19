// Store a list of the possible hand shapes
//   (should prob be an of object but havent dealt with those yet)
const shapes = [
  `✊ Rock`,
  `✋ Paper`,
  `✌ Scissors`
];
// Ask the player for an input
// Check the input against the list:
// If invalid ask again

// Pick a random shape from the list (Computer "choice")
function getComputerChoice(){
  return shapes[Math.floor(Math.random()*shapes.length)]
}
for (let i = 0; i < 10; i++) {
  console.log(getComputerChoice());

}
let a = shapes.length
console.log(`-> ${a}`)
// Compare the player choice and the machine choice to determine winner
//  the player picks first to prevent cheating using Dev tools
  // Add point to the winner

const rounds = 5;
// Game: Repeat round until one of the players points is > 1/2 of rounds

  // Declare winner
