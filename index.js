const form = document.getElementById('form')
const output = document.getElementById('output')

const checkInput = () => {
  event.preventDefault()

  const inputText = document.getElementById('input-text')

  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const email = inputText.value
  const result = pattern.test(email)

  if (result === true) {
    output.setAttribute('class', 'valid')
    output.innerHTML = 'Yes, input is valid'
  } else {
    output.setAttribute('class', 'invalid')
    output.innerHTML = 'Sorry, input is invalid'
  }
}
