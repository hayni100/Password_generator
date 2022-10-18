///////////////////////// DO NOT CHANGE ////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");
/////

///Password Options///
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var pswrdLength = parseInt([pswrdLength >= 8, pswrdLength <= 128]);




function passwordOptions() {
  /////////////////////////// WRITE YOUR CODE HERE /////////////////////////
  // 1. prompt for password criteria  

  // 2. Select password criteria 

  //2.1 Ask for password length
  //- Select password length from 8 to 128 characters 
  var pswrdLength = parseInt(prompt("LENGTH OF PASSWORD = Enter number between 8 and 128"));
  //2.1.a USER PICK = length between 8 and 128
  console.log(pswrdLength);

  //2.1.b Validate User Input
  if (pswrdLength >= 8 && pswrdLength <= 128) {

    window.confirm("You chose " + pswrdLength + " characters");
    console.log(pswrdLength);

  }

  //2.1 c If user press cancel or wrong input, immediately end function
  else if (pswrdLength < 8 || pswrdLength > 128) {
    window.alert("Password lenght is not valid");
    return null;
  }
  //2.2 Ask for character types to include
  //- Lower case letters a-z
  //- Upper case letters A-Z
  //- numbers 0-9
  //- special characters !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  //2.2.a USER PICK

  var includeSpecialCharacters = window.confirm("would you like to include special characters in your password?");
  var includeLowerCase = window.confirm("Would you like to include lower case letters in your password?");
  var includeUpperCase = window.confirm("Would you like to include uppercase letters in your password?");
  var includeNumbers = window.confirm("Would you like to include numbers in your password?");

  //2.2.b Validate User Input
  // - At least one character type must be selected

  if (includeSpecialCharacters === false && includeLowerCase === false && includeUpperCase === false && includeNumbers === false) {
    window.alert("At least one character type must be selected");
    return null;
  }



  //Password Generation//

  //configuration of user choices//

  var userChoice = {
    length: pswrdLength,
    includeSpecialCharacters: includeSpecialCharacters,
    includeLowerCase: includeLowerCase,
    includeUpperCase: includeUpperCase,
    includeNumbers: includeNumbers,
  };
  return userChoice;
}

// create function for randomizing user choice and setting array length//
function randomNumber(arr) {

  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;

}
// create function to store state for user choice //
// - create arrays //
function generatePassword() {

  var options = passwordOptions();
  var finalResult = [];
  var combinedOptions = [];
  var storeOptions = [];
  if (!options) return null;

  // Get random character according to user choice configuration//
  if (options.includeSpecialCharacters) {
    combinedOptions = combinedOptions.concat(specialCharacters);
    storeOptions.push(randomNumber(specialCharacters));
  }

  if (options.includeLowerCase) {
    combinedOptions = combinedOptions.concat(lowerCaseLetters);
    storeOptions.push(randomNumber(lowerCaseLetters));
  }

  if (options.includeUpperCase) {
    combinedOptions = combinedOptions.concat(upperCaseLetters);
    storeOptions.push(randomNumber(upperCaseLetters));
  }

  if (options.includeNumbers) {
    combinedOptions = combinedOptions.concat(numbers);
    storeOptions.push(randomNumber(numbers));
  }
  // Go through user choice configuration and combination of character options//
  for (var i = 0; i < options.length; i++) {
    var combinedChoices = randomNumber(combinedOptions);
    finalResult.push(combinedChoices);
  }
  console.log(finalResult);

  //Go through chosen character options to generate password combination with selected password length//
  for (var i = 0; i < storeOptions.length; i++) {
    console.log(storeOptions);
    finalResult[i] = storeOptions[i];

  }
  return finalResult.join("")
}

//starter code//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button- starter code//
generateBtn.addEventListener("click", writePassword);



