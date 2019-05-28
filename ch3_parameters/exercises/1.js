/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers
'use strict';

/*
# Exercise 1

An `amountAfterTaxes()` function that returns the total after all the taxes are applied.
*/

/*
## My Answers

*/

const amount = 25.12;
const fedTax = 10;
const stateTax = 2;
const localTax = 0.5;

const amountAfterTaxes = (amount, fedTax = 0, stateTax = 0, localTax = 0) => {
  const taxAmount = (tax) => (tax / 100 * amount);
  return (amount + taxAmount(fedTax) + taxAmount(stateTax) + taxAmount(localTax)).toFixed(2)
}

console.log('==> 1.js:20: amountAfterTaxes(amount) should return 25.12. Actual result is:', amountAfterTaxes(amount));
console.log('==> 1.js:21: amountAfterTaxes(amount, fedTax) should return 27.63. Actual result is:', amountAfterTaxes(amount, fedTax));
console.log('==> 1.js:22: amountAfterTaxes(amount, fedTax, stateTax) should return 28.13. Actual result is:', amountAfterTaxes(amount, fedTax, stateTax));
console.log('==> 1.js:23: amountAfterTaxes(amount, fedTax, stateTax, localTax) should return 28.26. Actual result is:', amountAfterTaxes(amount, fedTax, stateTax, localTax));
