const functions = require('./functions');

test('capitialize first letter of any string', () => {
  expect(functions.capitialize('string')).toBe('String');
});

test('reverses given string', () => {
  expect(functions.reverseString('string')).toBe('gnirts');
});

test('adds two numbers', () => {
  expect(functions.calculator.add(2, 2)).toBe(4);
});

test('subtracts two numbers', () => {
  expect(functions.calculator.subtract(2, 2)).toBe(0);
});

test('divides two numbers', () => {
  expect(functions.calculator.divide(2, 2)).toBe(1);
});

test('multiplies two numbers', () => {
  expect(functions.calculator.multiply(2, 2)).toBe(4);
});

test('caesar shift in normal range', () => {
  expect(functions.caesar('string', 5)).toBe('xywnsl');
});

test('caesar shift preserves case', () => {
  expect(functions.caesar('String', 5)).toBe('Xywnsl');
});

test('caesar shift preserves punctuation', () => {
  expect(functions.caesar('String!', 5)).toBe('Xywnsl!');
});

test('caesar shift wraps from z to a and preserves space', () => {
  expect(functions.caesar('String! Empty?', 10)).toBe('Cdbsxq! Owzdi?');
});

test('analyze takes an array, and returns an object with average, min, max, and length', () => {
  expect(functions.analyze([2, 1, 3])).toMatchObject({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});
