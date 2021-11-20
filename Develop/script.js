// Assignment code here
function generatePassword() {
    var password = ""
    // prompts ask questions about password criteria
    // password length - function returns number
    var passwordLength = promptLength() 
    // password case - function returns boolean
    var shouldHaveMixedCase = promptCase()
    // password special characters - function returns boolean
    var shouldHaveSpecialCharacter = promptCharacter()
    // password numeric - function returns boolean
    var shouldHaveNumber = promptNumeric()

  // generate password using criteria 
  if (shouldHaveNumber) {
    password = Math.floor(Math.random() * 10);
  }
    if (shouldHaveSpecialCharacter) {
    password += getRandomSpecialCharacter()
  }
   if (shouldHaveMixedCase) {
    password += getRandomUppercaseLetter()
  }
   while (password.length < passwordLength) {
    password += getRandomLetter()
  }


  return password
}

function promptLength() {
  var passwordLength = window.prompt("How many characters would you like your password to be?")

  while (passwordLength < 8 || passwordLength > 128) {
    window.alert("Please enter a numeric value between 8 and 128.")
    passwordLength = window.prompt("How many characters would you like your password to be?")
  }
  return passwordLength
}

function promptCase() {
  var passwordCase = window.confirm("Press ok if you need uppercase and lowercase letters in your password.")
  return passwordCase
}
function promptCharacter() {
  var passwordCharacter = window.confirm("Press ok if you need a special character in your password.")
  return passwordCharacter
}
function promptNumeric () {
  var passwordNumeric = window.confirm("Press ok if you need a number in your password.")
  return passwordNumeric
}

function getRandomLetter() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz"

  return alphabet[Math.floor(Math.random() * alphabet.length)]
}

function getRandomUppercaseLetter() {
  const upperLetter = getRandomLetter()
  return upperLetter.toUpperCase()
}

function getRandomSpecialCharacter() {
  const specials = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"

  return specials[Math.floor(Math.random() * specials.length)]
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordTextArea = document.querySelector("#password");
  passwordTextArea.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
