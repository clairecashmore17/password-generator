// Assignment code here
function generatePassword(){
    var password = {
        length : 0,
        lower : false,
        upper : false,
        num : false,
        special : false

    };
    /******FUNCTIONS*********/

    //Select password criteria (must choose one)
    function userLength(){
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


    function chooseCriteria(){

    // Function to choose anothe criteria 
    function anotherCrit() {
        var again = window.confirm("Would you like to pick another criteria?");
        //If user disagrees to choose another criteria
        if(!again) {
            chooseAnother = false;
        }
        return chooseAnother;
    }
            // As long as a user has chosen at least one criteria.
    var notChosenCriteria = true;
    while(notChosenCriteria){
        // Ask for Length between 8 - 128
        password.length = userLength();
        console.log(password.length);        
        
        // Character Cases
        var chooseAnother = true;
        while(chooseAnother){
          var userInput = window.prompt("Would you like to have LOWERCASE(1), UPPERCASE(2) , NUMBERS(3), OR SPECIALCHARS(4)? Or to QUIT(5): ");
         userInput = parseInt(userInput);
          // Lowercase
          switch(userInput){
            case 1:
              console.log("Chose 1");
              if( password.lower === true){
                  window.alert("You already asked for lower chars");
                  break;
              }
              password.lower = true;
              notChosenCriteria = false;
              console.log(password.lower);
              chooseAnother = anotherCrit();
              break;
          //Uppercase
            case 2:
                console.log("Chose 2");
                if( password.upper === true){
                    window.alert("You already asked for upper chars");
                    break;
                }
                password.upper = true;
                notChosenCriteria = false;
                console.log(password.upper);
                chooseAnother = anotherCrit();
              break;
          // Numeric
            case 3:
                console.log("Chose 3");
                if( password.num === true){
                    window.alert("You already asked for numbers");
                    break;
                }
                password.num = true;
                notChosenCriteria = false;
                console.log(password.num);
                chooseAnother = anotherCrit();
              break;
          //Special
          case 4:
            if( password.special === true){
                window.alert("You already asked for special chars");
                break;
            }
            
            console.log("Chose 4");
            password.special = true;
            notChosenCriteria = false;
            console.log(password.special);
            chooseAnother = anotherCrit();
            break;
            case 5:
                if(notChosenCriteria === false){
                    chooseAnother = false;
                    console.log("User chose to quit");
                    break;
                }
                else{
                    window.alert("You must choose at least one criteria!");
                    break;
                }
          default:
            window.alert("Not a valid answer, try again.");
            console.log("User did not give a proper answer");
            
            break;
          }
        }
  
    }
        
    }

    /******End Functions*********/

    // Alert user we are making a password
    window.alert("Let's generate you a password!");
    chooseCriteria();

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
  