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

  if (charLowerConf) {
    inProgressPassword += lowercase;
  }

  if (charUpperConf) {
    inProgressPassword += uppercase;
  }

  if (charNumConf) {
    inProgressPassword += numbers;
  }

  if (charSpecConf) {
    inProgressPassword += special;
  }
    console.log(inProgressPassword)
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random( ) * inProgressPassword.length)
    newPassword += inProgressPassword[randomIndex]
  }
  return newPassword
}

function writePassword( ) {
  var password = generate( );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

document.getElementById('button').addEventListener("click", writePassword);
