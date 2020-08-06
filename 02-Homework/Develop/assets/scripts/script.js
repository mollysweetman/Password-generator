

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword() {
 
}

//prompted for length of password between 8 and 128 characters
var lenPass = prompt("Please enter the length of password");
// Converting user input from sting to integer
parseInt(lenPass, 10); 
parseInt(lenPass, 10) < 8
parseInt(lenPass, 10) > 128
// Create variable that will store user input

while (isNaN(parseInt(lenPass), 10)) || parseInt((lenPass) ,10) < 8 || parseInt((lenPass) > 128) {
  prompt("Please enter the length of password");
}

// Prompts after clicking "generate button"

var lowCase = confirm("Do you want lowercase letters?");

var uppCase = confirm("Do you want uppercase letters?");

var numbers = confirm("Do you want numbers?");

var specChar = confirm("Do you want special characters?");


// Set up variables for password characters
var charLower = "abcdefghijklmnopqrstuvwxyz";
var charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789";
var CharSym = "!#$%&()*+,-./:<=>?@^[]^_`{|}~";

// creating variable to collect user choices
var charSets = "";

// adding lower case letters
if (lowCase) {
  charSets += charLower;
}
console.log(charSets);

// adding upper case letters
if (uppCase) {
  charSets += charUpper;
}
console.log(charSets);

// adding numbers
if (numbers) {
  charSets += charNum
}
console.log(charSets);

// adding symbols
if (specChar) {
  charSets += CharSym;
}
console.log(charSets);
// add ifs for other var
// think about what if user chooses none?

// Create a for loop to generate a random password for user 
for (var i = 0; i < lenPass; i++) {
// randomly select password for user bases on choices given
var random = Math.floor(Math.random()  * charSets.length)

console.log(charSets[random]);
password += charSets[random];
}







// Alert user to click the Generate Password button
alert("Hello, Please click 'Generate Button' to start");






//prompted for character type (lowercase, uppercase, numeric, and/or special characters)
// password is selected with matching criteria
// password is displayed on screen for employee