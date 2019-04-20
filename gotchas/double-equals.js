const a = '1';
const b = 1;
const c = '1.0';

// Logically if a == b and b == c, than a should equal c, but Javascript tells us otherwise due to our unsafe use of the
// `==` operator, rather than the stricter `===` operator:

console.log(`a == b:`, a == b); // true
console.log(`b == c`, b == c);  // true
console.log(`a == c`, a == c);  // false

// Pro-tip: `==` is handy when checking to see if a variable is `null` or `undefined`, so:
// `foo == null` is equivalent to `foo === null || foo === undefined`

console.log(`a === b:`, a === b); // false
console.log(`b === c`, b === c);  // false
console.log(`a === c`, a === c);  // false

// Pro-tip #2: This is good practice also applies with `!=`, one should use `!==`.
