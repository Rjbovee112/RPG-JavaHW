const form = document.getElementById('passwordGen')

form.addEventListener('submit', e => {
    e.preventDefault()
    const pasword = genPassword(characterNumber, includedUppercase, includedLowercase, includedNumeric, includedSpecial)
})