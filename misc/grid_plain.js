'use strict';

const grid = [
  ['c', 'c', 'b', 'r'],
  ['c', 'b', 'r', 'b'],
  ['r', 'b', 'b', 'b'],
];

const h = grid.length;
const w = grid[0].length;
const t = {};
let maxCount = 0;
let domColor = null;

function isConnected(color, r, c) {
  if (grid[r-1] && grid[r-1][c] === color) return true;
  if (grid[r][c+1] === color) return true;
  if (grid[r+1] && grid[r+1][c] === color) return true;
  if (grid[r][c-1] === color) return true;
  return false;
}

function checkAndSetRecord(color) {
  if (t[color] > maxCount) {
    maxCount = t[color];
    domColor = color;
  }
}

function countColor(color) {
  t[color] ? t[color] += 1 : t[color] = 1;
}

function calculate() {
  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      const color = grid[r][c];
      if (isConnected(color, r, c)) {
        countColor(color);
        checkAndSetRecord(color);
      }
    }
  }
  return [domColor, maxCount];
}


console.time('code');
const [color, count] = calculate();
console.timeEnd('code');

console.log(`Most common color is ${color}, with ${count} squares`);
