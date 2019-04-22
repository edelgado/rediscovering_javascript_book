"use strict";

// Thanks to `"use strict";`, this code will error out with:
// haha = 2;
//      ^
//
// ReferenceError: haha is not defined

const oops = function () {
  haha = 2;
  console.log(`haha:`, haha);
};

oops();
console.log(`haha:`, haha);
