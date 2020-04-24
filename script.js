function generate( ) {

  const passwordLength = parseInt(prompt(' What length would you like your password? ') )

  if (passwordLength < 8 || passwordLength > 128) {
    alert(' Enter a password ')
    return
  }

  const charLowerConf = confirm(' Would you like lowercase letters? ')
  const charUpperConf = confirm(' Would you like uppercase letters? ')
  const charNumConf = confirm(' Would you like numbers? ')
  const charSpecConf = confirm(' Would you like special characters? ')
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '1234567890'
  const special = '!@#$%%^&*()_'
  let inProgressPassword = ' '
  newPassword = ' '

  if (!charLowerConf && !charUpperConf && !charNumConf && !charSpecConf) {
    alert("you did not pick any charset")
    return
  }

  if (lowercase) {
    passHolder += lowerChar;
  }

  if (uppercase) {
    passHolder += upperChar;
  }

  if (numbers) {
    passHolder += numberChar;
  }

  if (special) {
    passHolder += specialChar;
  }

  for (let i = 0; 1 < passLength; i++) {
    let randomIndex = Math.floor(Math.random( ) * passHolder.length)
    newPass += passHolder[randomIndex]
  }
  return newPass
}

function writePassword( ) {
  var password = generate( );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

}