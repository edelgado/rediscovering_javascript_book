const outer = function () {
  for (i = 1; i <= 3; i++) { // Global variable `i`, which begins with a value of `1`.
    inner(); // By the time this returns, `i` is `5` so this only executes once.
  }
};

const inner = function () {
  for (i = 1; i <= 5; i++) { // Same global variable `i`, which at the end of this for loop it has a value of `5`.
    console.log(`i:`, i);
  }
};

outer();
// i: 1
// i: 2
// i: 3
// i: 4
// i: 5

// Note: This could be even worse, if we change the `3` in the outer function to `8`. It will be a never-ending loop.
