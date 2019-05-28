'use strict';
const max = function() {
  console.log('Is "arguments" an instance of an Array?', arguments instanceof Array);
  let large = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (arguments[i] > large) {
      large = arguments[i];
    }
  }

  return large;
};

console.log('max(2, 1, 7, 4) returns:', max(2, 1, 7, 4));
