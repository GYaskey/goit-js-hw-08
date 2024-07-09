function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const title = document.querySelector('.color');
const button = document.querySelector('.change-color');
const body = document.querySelector('body');

button.addEventListener('click', changeColor);

function changeColor(event) {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  title.textContent = randomColor;
}
