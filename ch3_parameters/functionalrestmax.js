'use strict';
const max = (...values) => {
  return values.reduce((large, e) => e > large ? e : large, values[0]);
};
console.log('==> functionalrestmax.js:5: max:', max(2, 1, 7, 4));
