// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  const encoder = { ' ': ' ', 'a': '11', 'b': '21', 'c': '31', 'd': '41', 'e': '51', 'f': '12', 'g': '22', 'h': '32', 'i': '42', 'j': '42', 'k': '52', 'l': '13', 'm': '23', 'n': '33', 'o': '43', 'p': '53', 'q': '14', 'r': '24', 's': '34', 't': '44', 'u': '54', 'v': '15', 'w': '25', 'x': '35', 'y': '45', 'z': '55' };
  const decoder = { ' ': ' ', '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e', '12': 'f', '22': 'g', '32': 'h', '42': 'i/j', '52': 'k', '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p', '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u', '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z' };

//I have created two smaller helper functions to assist the main polybius function - one for encoding scenario, the other one for decoding scenario. They get called on lines 61 and 58 respectfully. 


//encoding scenario:
  function encoderFunc(input) {
    let word = input.toLowerCase().split("");
    let output = '';

//looping through each letter in a word:
    for (letter of word) {

//if a letter is located in the encoder object, the value of that letter will be added to an empty output string
      if (letter in encoder) {
        output += encoder[letter];
      }
    }
    return output;
  }


//decoding scenario
  function decoderFunc(input) {
    let output = '';

//we are using regular for loop here to make sure we iterate not one, but two spots (i+=2). This will help us to get to every second number, instead of every number. 
    for (let i = 0; i < input.length; i += 2) {
      
      //accounting for spaces in the input:
      if (input[i] === ' ') {
        output += ' ';
        i = i - 1; // making sure that if there is an empty space, it does not count as two numbers

      } else {
        current = input[i] + input[i + 1]; //taking two numbers from the input, instead of one
        output += decoder[current]; //if a letter is located in the decoder object, the value of that letter will be added to an empty output string
      }
    }
    return output;
  }



  function polybius(input, encode = true) {
    if (encode === false) {
      if (input.split(" ").join("").length % 2 == 1) { //this is used to make sure that the input is an even number. If it's odd, function will return false
        return false;
      }
      return decoderFunc(input); //calling decoder helper function from above
    }

    return encoderFunc(input); // calling encoder helper function from above
  }
  return {
    polybius,
  }
})();

module.exports = { polybius: polybiusModule.polybius };
