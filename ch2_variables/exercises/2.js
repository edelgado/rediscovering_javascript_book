'use strict';
/* eslint-disable */

/*
# Exercise 2

First modify the code in the previous exercise so it gives us a runtime error due to the major issue. Then modify the
code to produce a reasonable desired result
*/

/*
## My Answers
*/

function first() {
  for (let i = 0; i < 5; i++) {
    second();
  }
}

function second() {
  for (let i = 0; i < 3; i++) {
    console.log('i:', i);
  }
}

first();

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
i: 0
i: 1
i: 2
i: 0
i: 1
i: 2

Result: Way to go!
*/
