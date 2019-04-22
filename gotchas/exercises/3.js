/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers

/*
# Exercise 3

Write a function named `canVote()` that takes `age` as a parameter and returns a string, as shown in the following
example calls to the function:

console.log(canVote(12)); //no, can't vote
console.log(canVote("12")); //no, can't vote
console.log(canVote(17)); //no, can't vote
console.log(canVote('@18')); //no, can't vote
console.log(canVote(18)); //yay, start voting
console.log(canVote(28)); //please vote
*/

/*
## My Answer

_In the code_
*/

// Code

const canVote = (age) => {
  if (age < 18) {
    return "no, can't vote";
  } else if (age == 18) {
    return 'yay, start voting';
  } else if (age > 18) {
    return 'please vote';
  } else {
    return "no, can't vote";
  }
}

console.log(canVote(12));
console.log(canVote("12"));
console.log(canVote(17));
console.log(canVote('@18'));
console.log(canVote(18));
console.log(canVote(28));

/*
## Actual Answer

no, can't vote
no, can't vote
no, can't vote
no, can't vote
yay, start voting
please vote

Result: 100!
*/
