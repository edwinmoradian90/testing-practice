const functions = {
    capitialize: (string) => string[0].toUpperCase() + string.slice(1),
    reverseString: (string) => string.split('').reverse().join('').toString(),
    calculator: {
        add: (a,b) => a + b,
        subtract: (a,b) => a - b,
        divide: (a,b) => a/b,
        multiply: (a,b) => a*b
    },
    caesar: (string, shift) => {
        let newArr = string.split('').map(letter => {
          if(letter.match(/[a-z]/g)) {
            let numValue = letter.charCodeAt() + shift;
            if(numValue > 122 ) {
              numValue -= 26;
              return String.fromCharCode(numValue);
            } else{
              return String.fromCharCode(numValue);
            }
          } else
          if(letter.match(/[A-Z]/g)) {
            let numValue = letter.charCodeAt() + shift;
            if(numValue >= 90) {
              numValue -= 26;
              return String.fromCharCode(numValue);
            } else {
              return String.fromCharCode(numValue);
            }
          } else {
            return letter;
          }
        });
        return newArr.join('');
      }
      
}

module.exports = functions;