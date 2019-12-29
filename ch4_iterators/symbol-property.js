'use strict';
const age = Symbol('ageValue'); // Note the absence of `new`. This is how symbols are created.
const email = 'emailValue';

const sam = {
  first: 'sam',
  [email]: 'sam@example.com', // Wrapping [] are to define the property name as stored in the `email` const. So: `emailValue`.
  [age]: 2 // Property itself is a Symbol type, but the value is a `number`.
};

console.log('==> symbol-property.js:11: Iterating over properties:');

for (const property in sam) {
  console.log(`==> symbol-property.js:13: ${property} : ${sam[property]}`);
}

console.log('==> symbol-property.js:17: list of property names:', Object.getOwnPropertyNames(sam));

/* Output:
==> symbol-property.js:11: Iterating over properties:
==> symbol-property.js:13: first : sam
==> symbol-property.js:13: emailValue : sam@example.com
==> symbol-property.js:17: list of property names: [ 'first', 'emailValue' ]
*/

console.log('==> symbol-property.js:26: list of property symbols:', Object.getOwnPropertySymbols(sam));

/* Output:
==> symbol-property.js:26: list of property symbols: [ Symbol(ageValue) ]
*/

console.log('==> symbol-property.js:32: accessing a symbol property:', sam[age]); // Note use of []. Using `sam.age` would not work because it would try to access a property named `age` which does not exist in the instance.
// ==> symbol-property.js:32: accessing a symbol property: 2

console.log('==> symbol-property.js:35: changing value...' );
// ==> symbol-property.js:35: changing value...

sam[age] = 3;
console.log('==> symbol-property.js:39: sam[age] is:', sam[age]);
// ==> symbol-property.js:36: sam[age] is: 3
