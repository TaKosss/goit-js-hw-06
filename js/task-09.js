function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body')
const changeBtn = document.querySelector('.change-color')
const span = document.querySelector('.color')

changeBtn.addEventListener('click', () => {
  let randomColor = getRandomHexColor()
  body.style.backgroundColor = randomColor
  span.textContent = randomColor
})

