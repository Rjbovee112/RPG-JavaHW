const includedUppercaseElement = document.getElementById('includedUppercase')
const includedLowercaseElement = document.getElementById('includedLowercase')
const includedNumericElement = document.getElementById('includedNumeric')
const includedSpecialElement = document.getElementById('includedSpecial')
const characterNumber = document.getElementById('characterNumber')
const form = document.getElementById('passwordGen')



form.addEventListener('submit', e => {
    e.preventDefault()
    const characterNumber = characterNumber.value
    const includedUppercase = includedUppercaseElement.checked
    const includedLowercase = includedLowercaseElement.checked
    const includedNumeric = includedNumericElement.checked
    const includedSpecial = includedSpecialElement.checked
    const pasword = genPassword(characterNumber, includedUppercase, includedLowercase, includedNumeric, includedSpecial)
})

function generatePassword(characterNumber, includedUppercase, includedLowercase, includedNumeric, includedSpecial) {
    
}