// Assignment code here
function generatePassword(){
    var password = {
        length : 0,
        lower : 0,
        upper : 0,
        num : 0,
        special : 0

    };
    /******FUNCTIONS*********/

    //Select password criteria (must choose one)
    var userLength = function(){
        var length = window.prompt("How long would you like your password to be? Must be 8-128 characters: ");
        length = parseInt(length);
        if(length < 8 || length > 128){
            window.alert("This password length is not in our limit!");
            // Recursively ask for length again
            return userLength();
        }
        console.log("User chose a length of: " + length);
        notChosenCriteria = false;
        return length;
    }
    /******End Function*********/

    // Alert user we are making a password
    window.alert("Let's generate you a password!");

    // As long as a user has chosen at least one criteria.
    var notChosenCriteria = true;
    while(notChosenCriteria){
        //Length between 8 - 128
        password.length = userLength();
        console.log(password.length);        
        
        // Character Cases
        // var chooseAnother = true;
        // while(chooseAnother){
        //   var userCharacter = window.prompt("Would you like to have LOWERCASE(1), UPPERCASE(2) , NUMBERS(3), OR SPECIALCHARS(4)?: ");
        //  userCharacter = parseInt(userCharacter);
        //   // Lowercase
        //   switch(userCharacter){
        //     case 1:
        //       console.log()
        //       break;
        //   //Uppercase
        //     case 2:
        //       break;
        //   // Numeric
        //     case 3:
        //       break;
        //   //Special
        //   case 4:
        //     break;
        //   default:
        //     console.log("User did not give a proper answer");
        //     //add recursive function here.
        //     break;
        //   }
        // }
  
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
  