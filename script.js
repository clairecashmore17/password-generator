//Globals
var passwordPieces = [
    "1234567890",
    "abcdefghijklmnopqrstuvwxyz",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "!@#$%^&*()"
];
// function to generate a random numeric value
function randomNumber(min, max) {
    var value = Math.floor(Math.random() * (max - min) + min);
  
    return value;
  };
//Generate the password function
function generatePassword(){
    //The password generated every time we run through
    var password = {
        length : 0,
        lower : false,
        upper : false,
        num : false,
        special : false,
        finalPassword : 0

    };

    /******FUNCTIONS*********/

    //Select password criteria (must choose one)
    function userLength(){
        var length = window.prompt("How long would you like your password to be? Must be 8-128 characters: ");
        //Checking for null or blank entries
        if(length === "" || length === null || length == " "){
            console.log("Entered invalid");
            window.alert("You must provide a valid answer!")
            return userLength();
        }
        //change user string into an integer
        length = parseInt(length);
        //checking to see if number given is within limits
        if(length < 8 || length > 128){
            window.alert("This password length is not in our limit!");
            // Recursively ask for length again
            return userLength();
        }
        
        console.log("User chose a length of: " + length);
        
        return length;
    }
    // Function that uses chooseCriteria to create password
    function createPassword(){
        console.log("Creating random password");
            //Skip a criteria function
            function charSkip(skip){
                console.log("Skipping this num: " + skip);
                var j = 0;

                //Create an empty array the size of our users desired password length
                var toJoin = new Array(password.length).fill(null);
                console.log("Our toJoin is: " + toJoin);
                console.log(passwordPieces[j]);
                //Iterate through until we have reached the users password length
                for(var i = 0; i <= password.length ; i++ ){
                    console.log("Entering loop password create, iteration " + i);  
                    // If we find these skip valuse, skip
                    if( j == skip){
                        j = skip+1;
                        if( j > 3){
                            j = 0;
                        }
                        console.log("j is our skip value, jump over!: " + j);
                    }           
                        console.log("This is now our j value: " + j);

                        //creating split array 
                        var toSplit = passwordPieces[j].split("");
                        //pulling a random array index value from our toSplit array
                        var randoNo = randomNumber(0, toSplit.length-1)
                        //console.log("our random index: " + randoNo);
                        console.log("What we have to split: " + toSplit);
                        console.log("possible random value: " + toSplit[randoNo]);
                       // console.log("ToSplit length: " + toSplit.length)
                        
                       //assigning the array we intend to join to the random split values
                        toJoin[i] = toSplit[randoNo];
                        console.log("Put " + toJoin[i] + " into spot " + i);
                        console.log("Our current password: " + toJoin);
                        //setting the final password to join
                        password.finalPassword = toJoin.join("");
                        
                        console.log("toJoin string is: " + toJoin);
                        //Resets J to go through typesd of chars
                        if( j == 3){
                            j = 0;
                        }
                        console.log("j is: " + j);         
                       //iterate to move onto next criteria
                       j++;
                    }       
            }
            //Function when user wants to skip 2 criteria
            function charSkipMultiple(skip1, skip2){
                console.log("Skipping this num: " + skip1 + " " + skip2 + " " + skip3);
                var j = 0;

                //Create an empty array the size of our users desired password length
                var toJoin = new Array(password.length).fill(null);
                console.log("Our toJoin is: " + toJoin);
                console.log(passwordPieces[j]);
                 //Iterate through until we have reached the users password length
                for(var i = 0; i <= password.length ; i++ ){
                    console.log("Entering loop password create, iteration " + i); 
                         // If we find these skip valuse, skip
                        if( j == skip1 ){
                            j = skip1+1;
                            console.log("j is our skip value, jump over!: " + j);
                        }    
                        if( j == skip2){
                            j = skip2 + 1;
                            console.log("j is our skip value, jump over!: " + j);
                        }    
                        console.log("This is now our j value: " + j);
                         //creating split array 
                        var toSplit = passwordPieces[j].split("");
                        // creating random number within split range
                        var randoNo = randomNumber(0, toSplit.length-1)
                        //console.log("our random index: " + randoNo);
                        console.log("What we have to split: " + toSplit);
                        console.log("possible random value: " + toSplit[randoNo]);
                       // console.log("ToSplit length: " + toSplit.length)
                        
                       //assigning values to be joined from the random split array
                        toJoin[i] = toSplit[randoNo];
                        console.log("Put " + toJoin[i] + " into spot " + i);
                        console.log("Our current password: " + toJoin);
                        // join to make final password
                        password.finalPassword = toJoin.join("");
                        
                        console.log("toJoin string is: " + toJoin);
                        //Resets J to go through typesd of chars
                        if( j == 3){
                            j = 0;
                        }
                         console.log("j is: " + j);         
                       // move onto next nums to choose from
                       j++;
                    }       
            }
            // When user only wants one criteria
            function chooseOne(charChosen){
                // This function is the same, only our j is now a specific chosen array value that does not iterate through
                var toJoin = new Array(password.length).fill(null);
                console.log("Our toJoin is: " + toJoin);
                console.log(passwordPieces[charChosen]);
                for(var i = 0; i <= password.length ; i++ ){
                    console.log("Entering loop password create, iteration " + i);                
                        var toSplit = passwordPieces[charChosen].split("");
                        var randoNo = randomNumber(0, toSplit.length-1)
                        console.log("our random index: " + randoNo);
                        console.log("What we have to split: " + toSplit);
                        console.log("possible random value: " + toSplit[randoNo]);
                        console.log("ToSplit length: " + toSplit.length)
                        
                        toJoin[i] = toSplit[randoNo];
                        console.log("Put " + toJoin[i] + " into spot " + i);
                        console.log("Our current password: " + toJoin);
                        password.finalPassword = toJoin.join("");
                        
                        console.log("toJoin string is: " + toJoin);
                       
                    }       
              
            }  
            
            //USER WANTS ALL CHARS
            if(password.lower === true && password.upper === true && password.num === true && password.special === true){                          
                 //Dont skip any      
                    charSkip(null);
             }
             // 0 is num, 1 is lower, 2 is upper, 3 is special
             else if(password.lower === false && password.upper === true && password.num === true && password.special === true){
                //skipping lowers
                charSkip(1);
             }
             else if(password.lower === true && password.upper === false && password.num === true && password.special === true){
                 //skipping uppers
                 charSkip(2);
             }
             else if (password.lower === true && password.upper === true && password.num === false && password.special === true){
                //skipping nums
                charSkip(0);
             }
             else if(password.lower === true && password.upper === true && password.num === true && password.special === false){
                 //skipping specials
                 charSkip(3);
             }
             else if(password.lower === false && password.upper === false && password.num === true && password.special === true){
                //skipping lower and upper
                charSkipMultiple(1,2);
            }
            else if(password.lower === false && password.upper === true && password.num === false && password.special === true){
                //skipping lower and num
                charSkipMultiple(1,0);
            }
            else if(password.lower === false && password.upper === true && password.num === true && password.special === false){
                //skipping lower and special
                charSkipMultiple(1,3);
            }
            else if(password.lower === true && password.upper === false && password.num === false && password.special === true){
                //skipping upper and num
                charSkipMultiple(2,0);
            }
            else if(password.lower === true && password.upper === false && password.num === true && password.special === false){
                //skipping upper and special
                charSkipMultiple(2,3);
            }
            else if(password.lower === true && password.upper === true && password.num === false && password.special === false){
                //skipping lower and num
                charSkipMultiple(3,0);
            }
            else if(password.lower === false && password.upper === false && password.num === false && password.special === true){
                //choose only specials
                chooseOne(3);
            }
            else if(password.lower === false && password.upper === false && password.num === true && password.special === false){
                //choose only nums
                chooseOne(0);
            }
            else if(password.lower === false && password.upper === true && password.num === false && password.special === false){
                //choose only upper
                chooseOne(2);
            }
            else if(password.lower === true && password.upper === false && password.num === false && password.special === false){
                //choose only lowers
                chooseOne(1);
            }
            return password.finalPassword;
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
        createPassword();   
        }

        /******End Functions*********/

        // Alert user we are making a password
        window.alert("Let's generate you a password!");
        chooseCriteria();
        console.log(password.finalPassword);
        return password.finalPassword;
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
  