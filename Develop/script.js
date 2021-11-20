// Assignment code here
function generatePassword() {
  var password = ""
  // prompts ask questions about password criteria
  // password length - function returns number
  var passwordLength = promptLength() 
  // password case - function returns boolean
  var passwordCase = promptCase()
  // password special characters - function returns boolean
  var passwordCharacters = promptCharacters()
  // password numeric - function returns boolean
  var passwordNumeric = promptNumeric()

  // generate password using criteria 

  return password
}

function promptLength() {
  return Number
}
function promptCase() {
  return Boolean
}
function promptCharacters() {
  return Boolean
}
function promptNumeric () {
  return Boolean
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
