/* A semi-colon is automatically inserted in between `first` and `second` which makes `first` take a value of `undefined`
   and second a _global_ variable with a value of `1`. Notice that the semi-colon is added before `second` so the code
   is essentially this:
   let first
   ;second = 1
 */
const unexpected = function() {
  let first
  second = 1
  console.log(first);
  console.log(second);
};

unexpected();
console.log(second);
