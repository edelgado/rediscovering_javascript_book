/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers
'use strict';

/*
# Exercise 4

The `placeOrder()` function assumes values for shipping and date if those values are not given. Let's fix the parameter
list so the function behaves as expected.
*/

const placeOrder = (
  id,
  price,
  shipping = (price < 20 ? 5 : 10),
  date = (new Date())
  ) => {
  console.log(` shipping charge for id: ${id} is $${shipping} Date: ${(date.getDate())}`);
};
/*
## My Answers

*/

placeOrder(1, 12.10, 3, new Date('05/15/2018'));
placeOrder(1, 25.20, 10);
placeOrder(1, 12.05);
placeOrder(1, 25.30);
placeOrder(1, 25.20);
