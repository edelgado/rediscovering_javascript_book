/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers

/*
# Exercise 1

What will be the result of each of the following `return` statements?

return
 2 * 3;

return 2
  * 3;

return 2 * 3
  ;
*/

/*
## My Answers

undefined
6
6
*/

function one() {
  return
   2 * 3;
}

function two() {
  return 2
    * 3;
}

function three() {
  return 2 * 3;
    ;
}

console.log('one():', one());
console.log('two():', two());
console.log('three():', three());

/*
## Actual Answers

undefined
6
6

** ALL CORRECT! :-) **
*/
