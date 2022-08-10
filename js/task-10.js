function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

let size = 30

function createBoxes(amount) {
  const addEls = []
  for (let i = 0; i < amount; i++){
    size += 10
    const div = document.createElement('div')
    div.style.height = `${size}px`
 		div.style.width = `${size}px`
 		div.style.background = getRandomHexColor()
 		addEls.push(div)
  }
  ref.boxes.append(...addEls)
}

const destroyBoxes = () => {
  size = 30
  boxes.innerHTML = ''
}

ref.createBtn.addEventListener('click', () => {
   createBoxes(+ref.input.value)
 })

  ref.destroyBtn.addEventListener('click', () => {
 	destroyBoxes.call()
 })
