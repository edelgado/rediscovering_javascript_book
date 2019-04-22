/* eslint-disable */
// ^ Done on purpose as to not get clues from IDE about answers

/*
# Exercise 4

What is the output of the following code? Then, fix the errors to produce the desired result.

var isPrime = function(n) {
  for(i = 2; i < n; i++) {
    if(n % i == 0) return false;
  }

  return n > 1;
}

var sumOfPrimes = function(n) {
  var sum = 0;
  for (i = 1; i <= n; i++) {
    if(isPrime(i)) sum += i;
  }

  return sum;
}

console.log('sumOfPrimes(10):', sumOfPrimes(10));
*/

var isPrime = function(n) {
  for(
    let i = 2;
    i < n;
    i++
  ) {
    if(n % i == 0){
      return false;
    }
  }

  return n > 1;
}

var sumOfPrimes = function(n) {
  var sum = 0;
  for (
    let i = 1;
    i <= n;
    i++
  ) {
    if(isPrime(i)){
      sum += i;
    }
  }

  return sum;
}

console.log('sumOfPrimes(10):', sumOfPrimes(10));

/*
## My Answers

n:10
sum:0
i: 1
-> isPrime(i:1)
  i: 2
  (true)
sum:2
i:3
-> isPrime(i:3)
  i:2
  (true)
sum:5
i:3
... every iteration of the for loop in sumOfPrimes adds 2 to the sum

0: sum: 0, i: undefined
outer_for(i:1):
  isPrime(1):true, i: 3
  sum: 3
  i: 4
outer_for(i:4):
  isPrime(4):false, i: 3
  sum: 3
  i: 4
outer_for(i:4):
  isPrime(4):false, i: 3
  sum: 3
  i: 4

If variables are passed as values, then infinite loop? Assuming parameters are passed as reference, then:
sum: 0
i: 1
outer for code executes because 1 <= 10:
  isPrime(i:1) ->
    inner for sets i to 2 and also changes the parameter to 2 and code does not execute because 2 is not less than 2, and i is not incremented
    (i:2) > 1 is true
    (true)
  outer if: executed and sum = 0 + 2 = 2
  outer for loop increments, i:3
outer for code executes because 3 <= 10:
  isPrime(i:3) ->
    inner for sets i to 2 and also changes the parameter to 2 and code does not execute because 2 is not less than 2, and i is not incremented
    (i:2) > 1 is true
    (true)
  outer if: executed and sum = 2 + 2 = 4
  outer for loop increments, i:3
outer for code executes because 3 <= 10:
  ifPrime(i:3) has the same result as before: returns true and sets i:2
  outer if: executes and sum: 4 + 2 = 6
  outer for loop increments, i:3
... adds 2 to sum, so now it's 8
... and so on and so forth. Infinite loop, sum increases by 2 every outer loop execution.

 */

/*
## Actual Answer

* Infinite loop
* Param `n` of `isPrime` is passed by value, so that reduces a little the complexity of this problem.
* The loop within `isPrime` binds `i` to the global `i` and resets it to `2` on every call to the method.
* `isPrime` is called with an alternating `3` and `4` as arguments, which returns `true` and `false` respectively.
* On every other call to `isPrime`, the sum is increased by `3`.
* So on and so forth.

Result: <Result>
*/
