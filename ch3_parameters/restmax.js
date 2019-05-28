'use strict';
const max = (...values) => {
  console.log('Is "values" an instance of an Array?', values instanceof Array);
  let large = values[0];

  for (let i = 1; i < values.length; i++) {
    if (values[i] > large) {
      large = values[i];
    }
  }

  return large;
};

console.log('max(2, 1, 7, 4) returns:', max(2, 1, 7, 4));
