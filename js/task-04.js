let counterValue = 0

const counter = document.querySelector('#value')
const decrementBtn = document.querySelector('button[data-action="decrement"]')
const incrementBtn = document.querySelector('button[data-action="increment"]')

decrementBtn.addEventListener('click', () => {
    counter.textContent = counterValue--
})

incrementBtn.addEventListener('click', () => {
    counter.textContent = counterValue++
})

