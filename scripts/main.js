const shapes = [
  `✊ Rock`,
  `✋ Paper`,
  `✌ Scissors`
]

// rounds length has to be odd to ensure a zero-sum game
const rounds = new Array(5)
let round = 0 // counter for rounds index
let matchPoint = rounds.length
let playerScore = 0
let computerScore = 0
rounds.fill({
  result: '',
  winner: '',
  loser: ''
})

// returns a random int between minimum included and maximum excluded
function getRandomInt(min, maxExcluded) {
  return Math.floor(Math.random() * (maxExcluded - min) + min)
}

function getComputerChoice() {
  return shapes[getRandomInt(0, shapes.length)]
}

function checkWinner() {
  if (playerScore > (rounds.length / 2)) {
    console.log(`You Win!`);
    return `You Win!`;
  }
  if (computerScore > rounds.length / 2) {
    console.log(`You lose.`);
    return `You lose.`;
  }
}

function playRound(playerSelection, computerSelection) {
  let result, winner, loser;
  switch (true) {
    case playerSelection === computerSelection:
      result = `Tied`;
      winner = playerSelection;
      loser = computerSelection;
      break
    case playerSelection == shapes[0] && computerSelection == shapes[2]:
    case playerSelection == shapes[1] && computerSelection == shapes[0]:
    case playerSelection == shapes[2] && computerSelection == shapes[1]:
      ++playerScore
      result = `Win`;
      winner = playerSelection;
      loser = computerSelection;
      break
    default:
      ++computerScore
      result = `Lose`;
      winner = computerSelection;
      loser = playerSelection;
      break
  }
  rounds[round] = { result, winner, loser };
  logRound(rounds[round])
  if (round > matchPoint) checkWinner();
  if (result != `Tied`) round++;
}

function logRound(round) {
  let message = `You ${round.result}! `
  switch (round.result) {
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
