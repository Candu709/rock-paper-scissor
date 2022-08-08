const shapes = [
  `✊ Rock`,
  `✋ Paper`,
  `✌ Scissors`
]

function getPlayerChoice(){
  let playerChoice
  do {
    playerChoice = prompt(`Please type in the name of a hand shape
    ✊ Rock
    ✋ Paper
    ✌ Scissors
    `)
    playerChoice = validateInput(playerChoice)
  } while (!playerChoice)
  return playerChoice
}

function validateInput(input){
  if (!input) {
    alert (`Please type in a value`)
    return false
  }
  input.trim()
  shapeName = input.toLowerCase()
  switch (shapeName) {
    case `rock`:
    return shapes[0]
    case `paper`:
    return shapes[1]
    case `scissors`:
    return shapes[2]
    default:
    alert(`"${input}" is not a valid shape`)
    return false
  }
}
// returns a random int between minimum included and maximum excluded
function getRandomInt(min, maxExcluded){
  return Math.floor(Math.random() * (maxExcluded - min) + min)
}

function getComputerChoice(){
  return shapes[getRandomInt(0,shapes.length)]
}

function playGame(){
  // rounds length has to be odd to ensure a zero-sum game
  const rounds = new Array(5).fill(' ')
  let playerScore = 0
  let computerScore = 0
  for (i = 0; i < rounds.length; i++) {
    do {
      rounds[i] = playRound(getPlayerChoice(), getComputerChoice())
      logRound(rounds[i])
    } while (rounds[i].result == `Tie`)
    if (playerScore > (rounds.length/2)) {
      console.log(`You Win!`)
      return `You Win!`
    }
    if (computerScore > rounds.length/2) {
      console.log(`You lose.`)
      return `You lose.`
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) return {
      result: `Tied`,
      winner: playerSelection,
      loser: computerSelection
    }
    switch (true) {
      default:
      ++computerScore
      return {
        result: `Lose`,
        winner: computerSelection,
        loser: playerSelection
      }
      
      case playerSelection == shapes[0] && computerSelection == shapes[2]:
      case playerSelection == shapes[1] && computerSelection == shapes[0]:
      case playerSelection == shapes[2] && computerSelection == shapes[1]:
        ++playerScore
      return {
        result: `Win`,
        winner: playerSelection,
        loser: computerSelection
      }
    }
  }
}

function logRound(round){
  let message = `You ${round.result}! `
  switch (round.result){
    case `Tied`:
      message += `You both played ${round.loser}`
      message += `\nTry again!`
      break
    default:
     message += `${round.winner} beats ${round.loser}`
     break
  }
  console.log(message)
}

alert(playGame())
