function getRandomHexColor() {
 return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
   .padStart(6, 0)}`;
}
const amountInput = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector('[data-destroy]');
const boxesConteiner = document.querySelector("#boxes");

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = amountInput.value;
let markup = '';

for (let index = 1; index <= amount; index++) {
  const boxSize = 30+(index-1)*10;
  markup += `<div style= "background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px">${index}</div>`;
  
}
boxesConteiner.innerHTML = markup;
}

function destroyBoxes(event) {
  boxesConteiner.innerHTML = '';
}







