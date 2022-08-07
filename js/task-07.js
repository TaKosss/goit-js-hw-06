const inputControle = document.querySelector('#font-size-control')
const inputText = document.querySelector('#text')

inputControle.addEventListener('input', event => {
    inputText.style.fontSize = `${event.currentTarget.value}px`
})

