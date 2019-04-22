/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers

/*
# Exercise 2

Is it better to use `==` or `===` in the following comparison?

"2.0" / 2 * "2.0" == 2 / 2 * 2;
*/

/*
## My Answers

The left-hand operand should result in 0.5 float. The right-hand operand will be 0 because it's all integers. So I don't
really know. Either would give `false` I think.
*/

// Code
console.log('Answer:', "2.0" / 2 * "2.0" == 2 / 2 * 2);

/*
## Actual Answer

`true`

Result: Wrong. Looks like because of the order of operations, the division happens before the multiplication, so in the
case of the RHO `1 * 2` is `2` integer. And in the LHO `"2.0" / 2` is `1` and `1 * "2.0"` is `2`. So `2` is equal to
`2` and in both cases (`==` or `===`), the result will be `true`.
*/
