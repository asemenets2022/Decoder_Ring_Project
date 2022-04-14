// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  const correctAlphabet = 'abcdefghijklmnopqrstuvwxyz';

//Same as for polybius function, I have created two smaller helper functions to assist the main substitution function - one for encoding scenario, the other one for decoding scenario. 
//They get called on lines 87 and 84 respectfully. 


//encoding scenario:
  function encoderFunc(input, alphabet) {

    //making sure that capital letters are ignored:
    let cipherAlphabet = alphabet.toLowerCase().split('');

    let output = '';

    //looping through input:
    for (let i = 0; i < input.length; i++) {
      let letter = input[i].toLowerCase(); //making sure that the capital letters are ignored:

      //accounting for spaces:
      if (letter === ' ') {
        output += ' ';

      } else {
        //if the index of input's letter is same as the index of correct alphabet, we add the value of correct alphabet's variable to our output
        let location = correctAlphabet.indexOf(letter);
        output += cipherAlphabet[location];
      }
    }

    return output;
  }


  //decoding scenario:
  function decoderFunc(input, alphabet) {

    let cipherAlphabet = alphabet.toLowerCase().split('');

    let output = '';

    for (let i = 0; i < input.length; i++) {
      let letter = input[i].toLowerCase();

      if (letter === " ") {
        output += " ";

      } else {
        let location = cipherAlphabet.indexOf(letter);
        output += correctAlphabet[location];
      }
    }
    return output;
  }



  function substitution(input, alphabet, encode = true) {

    //defensive coding to make sure that the alphabet parameter is passed in, and that alphabet is exactly 26 characters long
    if (!alphabet || alphabet.length !== 26) return false;
    
    //this is in place to make sure that only unique characters are being used as parts of alphabet:
    for (let i = 0; i < alphabet.length; i++) {
      let counter = 0;
      for (let j = 0; j < alphabet.length; j++) {
        if (alphabet[i] === alphabet[j]) {
          counter += 1;
        }
      }
      if (counter >= 2) {
        return false;
      }
    }

    if (encode === false) {

      return decoderFunc(input, alphabet); //calling decoder helper function from above
    }

    return encoderFunc(input, alphabet); //calling encoder helper function from above

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
