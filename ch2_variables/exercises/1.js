/* eslint-disable */

/*
# Exercise 1

What is the output of this code?
*/

function first() {
  for (i = 0; i < 5; i++) {
    second();
  }
}

function second() {
  for (i = 0; i < 3; i++) {
    console.log('i:', i);
  }
}

first();

/*
## My Answers

i: 0
i: 1
i: 2
i: 0
i: 1
i: 2

So on and so forth.
*/

/*
## Actual Answer

i: 0
i: 1
i: 2
i: 0
i: 1
i: 2
i: 0
i: 1
i: 2
...

Result: Way to go!
*/
