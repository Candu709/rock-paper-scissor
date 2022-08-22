const body = document.querySelector('body');

function makeButton(text, id = '', theParent = 'body', ...classes) {
  const button = document.createElement('button');
  if (id) button.id = id;
  if (text) button.textContent = text;
  if (classes.length !== 0) classes.forEach((eachClass) => button.classList.add(eachClass));
  const parent = document.querySelector(theParent);
  parent.appendChild(button);
}

shapes.forEach(shape => makeButton(shape, shape, '#shapes', 'shape'));
const shapeButtons = document.querySelectorAll('button.shape');
shapeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    playRound(button.id, getComputerChoice());
  });
});
