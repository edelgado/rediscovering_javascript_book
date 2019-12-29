'use strict';

const grid = [
  ['c', 'c', 'b', 'r'],
  ['c', 'b', 'r', 'b'],
  ['r', 'b', 'b', 'b'],
];

const t = {};
let domColor = null;
let max = 0;

for (const row of grid) {
  for (const cell of row) {
    // eslint-disable-next-line eqeqeq
    if (t[cell] == null) {
      t[cell] = 1;
    } else {
      t[cell] += 1;
    }
    if (t[cell] > max) {
      max = t[cell];
      domColor = cell;
    }
  }
}

console.log('==> grid.js:24: t', t);
console.log('==> grid.js:29: max', max);
console.log('==> grid.js:30: dominant color', domColor);
