///////////////////////// DO NOT CHANGE ////////////////////////////////////
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
///////////////////////// DO NOT CHANGE ABOVE HERE /////////////////////////

function generatePassword() {
 // Prompt user to enter password length // 
    var pswrdLength = parseInt(prompt("LENGTH OF PASSWORD = Enter number between 8 and 128"));

    if (pswrdLength >= 8 && pswrdLength <= 128) {

        var pswrdLength = window.confirm("You chose " + pswrdLength + " characters");
    console.log (pswrdLength);
    }

    // Validate user input according to password length criteria //
    else if (pswrdLength < 8 || pswrdLength > 128) {
        window.alert("Password lenght is not valid");
        return null;
      }

    //promt user for character choices//

    var includeSpecialCharacters = window.confirm("would you like to include special characters in your password?");
    var includeLowerCase = window.confirm("Would you like to include lower case letters in your password?");
    var includeUpperCase = window.confirm("Would you like to include uppercase letters in your password?");
    var includeNumbers = window.confirm("Would you like to include numbers in your password?");
  
function generateArray(arr) {
    
}
}