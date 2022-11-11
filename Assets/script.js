
var generateBtn = document.querySelector("#generate");



//Password info
var uppercaseOptions = ["A","B","C","D","E","F","G","H","I","J","K","L"];
var lowercaseOptions = ["a","b","c","d","e","f","g","h","i","j","k","l"];
var numbersOptions = [0,1,2,3,4,5,6,7,8,9];
var charactersOptions = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+"];

var userArrayOptions = [];
var newPassword = [];

// Write password to the #password input

var passwordText = document.querySelector("#password");


function writePassword() {
  var userChoiceLength = window.prompt ("How many characters would you like your password to be? Choose between 8 and 128.");
  var userUppercase = window.confirm ("Click 'OK' to include uppercase letters");
  var userLowercase = window.confirm ("Click 'OK' to include lowercase letters");
  var userNumbers = window.confirm ("Click 'OK' to include numbers");
  var userCharacters = window.confirm ("Click 'OK' to include characters");

  var randomNumber
  
if (userUppercase === true){
 userArrayOptions = userArrayOptions.concat(uppercaseOptions);
}  
if (userLowercase === true){
userArrayOptions = userArrayOptions.concat(lowercaseOptions);
}

if (userNumbers === true){
userArrayOptions = userArrayOptions.concat(numbersOptions);
}

if (userCharacters === true){
userArrayOptions = userArrayOptions.concat(charactersOptions);
}
userArrayOptions = userArrayOptions.join("")
console.log (userArrayOptions)
  for (var i = 0; i < userChoiceLength; i++){ 
    randomNumber = Math.floor(Math.random()* userArrayOptions.length)
newPassword.push(userArrayOptions.charAt(randomNumber))
  }
  newPassword = newPassword.join("")
console.log (newPassword)

  passwordText.textContent = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
