/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers
'use strict';

/*
# Exercise 5

In the previous example, how can we pass the value for the `date` parameter without passing a value for the `shipping`
parameter?
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

placeOrder(1, 25.20, undefined, new Date('05/15/2018'));
