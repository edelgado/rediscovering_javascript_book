/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers
'use strict';

/*
# Exercise 3

Let's re-implement the purchaseItems() function from the previous exercise so that `milk` and `bread` are assumed for
the first two parameters, respectively, if a value is not provided for the argument in that position.
*/

const purchaseItems = (essential1 = 'milk', essential2 = 'bread', ...optionals) => {
  console.log(essential1 + ', ' + essential2 + ', ' + optionals.join(', '));
};

const items = ['cheese', 'milk'];

/*
## My Answers

*/

console.log('==> 3.js:23: purchaseItems(\'cheese\') should print \'cheese, bread,\':', purchaseItems('cheese'));
console.log('==> 3.js:24: purchaseItems(...items) should print \'cheese, milk,\':', purchaseItems(...items));
console.log('==> 3.js:25: purchaseItems() should print \'milk, bread,\':', purchaseItems());

