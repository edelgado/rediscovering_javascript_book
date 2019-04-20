const compute = function (number) {
  if (number > 5) {
    // It's valid for `number` to be followed by `+ 2` so no semicolon is inserted. But, if you were to try just `2`
    // instead of `+ 2`, then the code would have been:
    // ```
    //   return number;
    //   + 2;
    // ``
    return number
    + 2;
  }

  if (number > 2) {
    // Since `return` is one of `break`, `return`, `continue`, `throw`, `yield` a semicolon is inserted right after it,
    // essentially making the below line be:
    // `return;`
    return
    number * 2;
  }
};

console.log('compute(6):', compute(6)); // 8
console.log('compute(3):', compute(3)); // undefined

