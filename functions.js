const functions = {
  capitalize: (string) => string[0].toUpperCase() + string.slice(1),
  reverseString: (string) => string.split('').reverse().join('').toString(),
  calculator: {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
  },
  caesar: (string, shift) => {
    const newArr = string.split('').map((letter) => {
      if (letter.match(/[a-z]/g)) {
        let numValue = letter.charCodeAt() + shift;
        if (numValue > 122) {
          numValue -= 26;
          return String.fromCharCode(numValue);
        }
        return String.fromCharCode(numValue);
      } if (letter.match(/[A-Z]/g)) {
        let numValue = letter.charCodeAt() + shift;
        if (numValue >= 90) {
          numValue -= 26;
          return String.fromCharCode(numValue);
        }
        return String.fromCharCode(numValue);
      }
      return letter;
    });
    return newArr.join('');
  },

  analyze: (array) => {
    const sorted = array.sort();
    const summed = array.reduce((acc, currentVal) => acc + currentVal);
    const average = Math.floor(summed / array.length);
    const min = sorted[0];
    const max = sorted[array.length - 1];
    const { length } = array;

    const object = {
      average,
      min,
      max,
      length,
    };

    return object;
  },

};

module.exports = functions;
