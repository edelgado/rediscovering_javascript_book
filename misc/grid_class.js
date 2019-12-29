'use strict';

class maxConnectedColor {
  constructor(grid) {
    this.h = grid.length;
    this.w = grid[0].length;
    this.t = {};
    this.maxCount = 0;
    this.domColor = null;
    this.grid = grid;
  }

  isConnected(color, r, c) {
    if (grid[r-1] && grid[r-1][c] === color) return true;
    if (grid[r][c+1] === color) return true;
    if (grid[r+1] && grid[r+1][c] === color) return true;
    if (grid[r][c-1] === color) return true;
    return false;
  }

  checkAndSetRecord(color) {
    if (this.t[color] > this.maxCount) {
      this.maxCount = this.t[color];
      this.domColor = color;
    }
  }

  countColor(color) {
    this.t[color] ? this.t[color] += 1 : this.t[color] = 1;
  }

  calculate() {
    for (let r = 0; r < this.h; r++) {
      for (let c = 0; c < this.w; c++) {
        const color = this.grid[r][c];
        if (this.isConnected(color, r, c)) {
          this.countColor(color);
          this.checkAndSetRecord(color);
        }
      }
    }
    return [this.domColor, this.maxCount];
  }
}

const grid = [
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
  ['c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b','c', 'c', 'b', 'r'],
  ['c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r','c', 'b', 'r', 'b'],
  ['r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b','r', 'b', 'b', 'b'],
];

console.time('code');
const [color, count] = new maxConnectedColor(grid).calculate();
console.timeEnd('code');

console.log(`Most common color is ${color}, with ${count} squares`);