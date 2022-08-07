const form = document.querySelector('form.login-form')

form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()
      const {
        elements: { email, password },
      } = event.currentTarget
    
    if (email.value === '' || password.value === '') {
        return alert('Please fill out all fields!')
    }
    const userInfo = { email: email.value, Password: password.value }
    console.log(userInfo)
    event.currentTarget.reset()
}

