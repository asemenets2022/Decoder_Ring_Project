// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function caesar(input, shift, encode = true) {

//defensive coding to prevent errors if there are issues with shift:
    if (!shift || shift === 0 || shift > 25 || shift < -25) return false;

    if (encode === false) {
      shift = (shift * -1);
    }

//to make sure that input ignores capital letters:
    let word = input.toLowerCase().split("");
    let output = [];

//looping through each letter in a word:
    for (let letter of word) {

      if (!alphabet.includes(letter)) {
        output.push(letter);

      }
//looping through each letter in an alphabet:
      for (let j = 0; j < alphabet.length; j++) {
        let newIndex = parseInt(j);
        if (letter === alphabet[newIndex]) {

          //to account for going over the alphabet
          if ((newIndex + shift) >= alphabet.length) {
           output.push(alphabet[(newIndex+shift) - alphabet.length]);

          //to account for when shift is a negative integer 
          } else if ((newIndex + shift) < 0) {
            output.push(alphabet[alphabet.length + (newIndex+shift)])
          }

          else {
            output.push(alphabet[newIndex+shift]);
          }
        }
      }
    }
    return output.join("");
  }


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
