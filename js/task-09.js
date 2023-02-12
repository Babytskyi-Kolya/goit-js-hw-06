const btnChangColor = document.querySelector('.change-color');
const elColorName = document.querySelector('.color');

btnChangColor.addEventListener('click', changedBgColorHandler)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changedBgColorHandler (){

  elColorName.textContent = getRandomHexColor();

  document.body.style.backgroundColor = elColorName.textContent;
}