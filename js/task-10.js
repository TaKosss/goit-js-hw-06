function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes')
}

const size = 30

function createBoxes(amount) {
  const addEls = []
  for (let i = 0; i < amount; i++){
    const div = document.createElement('div')
    div.style.height = `${size + 10 * i}px`
 		div.style.width = `${size + 10 * i}px`
 		div.style.background = getRandomHexColor()
 		addEls.push(div)
  }

  return addEls
}

const destroyBoxes = () => {
  boxes.innerHTML = ''
}

 ref.createBtn.addEventListener('click', () => {
	let boxesToAdd = createBoxes(ref.input.value)
 	ref.boxes.append(...boxesToAdd)
 })

  ref.destroyBtn.addEventListener('click', () => {
 	destroyBoxes.call()
 })
