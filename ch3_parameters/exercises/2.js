/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers
'use strict';

/*
# Exercise 2

The purchaseItems() function merely prints the parameters it receives, after a little formatting. Two calls to the
function are shown. Let's implement a third call to the function so that it produces the desired result.
*/

const purchaseItems = (essential1, essential2, ...optionals) => {
  console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};

purchaseItems('bread', 'milk');
purchaseItems('bread', 'milk', 'jelly');

const mustHaves = ['bread', 'milk'];
const andAlso = ['eggs', 'donuts', 'tea'];

/*
## My Answers

*/

purchaseItems(...mustHaves, ...andAlso);
