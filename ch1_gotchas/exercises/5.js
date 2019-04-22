/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers

/*
# Exercise 5

The code in this exercise is intended to determine if a given number is a perfect number.
Eyeball the following code to detect the errors and jot them down. Then run ESLint on the code to display the errors.
Compare with what you jotted down to see if you caught them all. Then fix the errors until ESLint is quiet.

1  var isPerfect = function(number) {
2    var sumOfFactors = 0;
3    for(index = 1; index <= number; index++) {
4      if(number % index == 0) {
5        sumOfFactors += index;
6      }
7    }
8
9    return sumOfFactors
10     == number * 2;
11 };
12
13 for(i = 1; i <= 10; i++) {
14   console.log('is' + i + 'perfect?: ' + isPerfect(i));
15 }
*/

/*
## My Answers

Line 2: Use `let` or `const` instead of `var`, as `var` creates a global variable.
Line 4: Use `===` instead of `==`
Line 10: Use `===` instead of `==`
Line 13: Undefined `i`, use `let` or `const`, otherwise `i` will become a global variable.
<Answer>
*/

var isPerfect = function(number) {
  var sumOfFactors = 0;
  for(index = 1; index <= number; index++) {
    if(number % index == 0) {
      sumOfFactors += index;
    }
  }

  return sumOfFactors
    == number * 2;
};

for(i = 1; i <= 10; i++) {
  console.log('is' + i + 'perfect?: ' + isPerfect(i));
}

/*
## Actual Answer

A bunch more, essentially any time we see an "undefined" variable. Also, the "use strict"; rule.

Result: <Result>
*/
