const includedUppercaseElement = document.getElementById('includedUppercase')
const includedLowercaseElement = document.getElementById('includedLowercase')
const includedNumericElement = document.getElementById('includedNumeric')
const includedSpecialElement = document.getElementById('includedSpecial')
const characterNumber = document.getElementById('characterNumber')
const form = document.getElementById('passwordGen')

const LOWERCASE_CHAR_CODES = arraryFromLowToHigh(97, 122)
const UPPERCASE_CHAR_CODES = arraryFromLowToHigh(65, 90)
const NUMBER_CHAR_CODES = arraryFromLowToHigh(48, 57)
const SPECIAL_CHAR_CODES = arraryFromLowToHigh(33, 47).concat(arraryFromLowToHigh(58, 64)).concat(arraryFromLowToHigh(91, 96)).concat(arraryFromLowToHigh(123, 126))



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
    console.log()
}

function arraryFromLowToHigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}



String.fromCharCode(65)