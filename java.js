const includedUppercaseElement = document.getElementById('includedUppercase')
const includedLowercaseElement = document.getElementById('includedLowercase')
const includedUNumericElement = document.getElementById('includedUNumeric')
const includedSpecialElement = document.getElementById('includedSpecial')
const characterNumber = document.getElementById('characterNumber')
const form = document.getElementById('passwordGen')



form.addEventListener('submit', e => {
    e.preventDefault()
    const characterNumber = characterNumber.value
    const pasword = genPassword(characterNumber, includedUppercase, includedLowercase, includedNumeric, includedSpecial)
})