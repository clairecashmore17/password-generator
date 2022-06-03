// Assignment code here
function generatePassword(){
    var password;
    window.alert("Let's generate you a password!");
    //Select password criteria (must choose one)
    var chosenCriteria = true;
    while(chosenCriteria){
        //Length between 8 - 128
        var userLength = window.prompt("How long would you like your password to be? Must be 8-128 characters: ");
  
        // Character Cases
        var chooseAnother = true;
        while(chooseAnother){
          var userCharacter = window.prompt("Would you like to have LOWERCASE(1), UPPERCASE(2) , NUMBERS(3), OR SPECIALCHARS(4)?: ");
         userCharacter = parseInt(userCharacter);
          // Lowercase
          switch(userCharacter){
            case 1:
              console.log()
              break;
          //Uppercase
            case 2:
              break;
          // Numeric
            case 3:
              break;
          //Special
          case 4:
            break;
          default:
            console.log("User did not give a proper answer");
            //add recursive function here.
            break;
          }
        }
  
    }
    return password;
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  