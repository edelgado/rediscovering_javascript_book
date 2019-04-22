/* eslint-disable */

/*
# Exercise 4

Will the following code result in an error?

'use strict';

const person = Object.freeze(
  {name: 'John Doe', address: { street: '101 Main St.', City: 'New York' }});

person.address.street = '102 Main St.';

console.log(person);

*/

/*
## My Answers

No. `Object.freeze()` is shallow, so anything in the object within the `address` attribute can be changed.
*/

/*
## Actual Answer

No. Freeze is not deep. Only the top-level object is read-only. The program changes an object at a lower level.

Result: Way to go!
*/
