const body = document.querySelector('body');

function makeButton(shape) {
  const button = document.createElement('button');
  button.textContent = shape;
  button.addEventListener('click', () => playRound(shape, getComputerChoice()))
  body.append(button);
}

shapes.forEach(shape => makeButton(shape));
