// DO NOT CHANGE ANYTHING IN THIS FILE.
// IF YOU CHANGE THE TEST, YOU WILL RECEIVE 0 FOR THIS ASSIGNMENT.

const { echo } = require('./echo');

test('should return "Hello!\nHello!\nHello!\n" when n=3 and str="Hello!"', () => {
  expect(echo('Hello!', 3)).toEqual('Hello!\nHello!\nHello!\n');
});

test('should return "" when n=0 and str="Hello!"', () => {
  expect(echo('Hello!', 0)).toEqual('');
});

test('should return "Hello!\n" when n=1 and str="Hello!"', () => {
  expect(echo('Hello!', 1)).toEqual('Hello!\n');
});

test('should return "\n" when n=1 and str=""', () => {
  expect(echo('', 1)).toEqual('\n');
});

test('should return "" when n=0 and str=""', () => {
  expect(echo('', 0)).toEqual('');
});
