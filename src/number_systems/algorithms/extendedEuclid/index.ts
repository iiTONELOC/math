import {normalizePath} from '../../../utils';

/**
 * Extended Euclidean Algorithm
 *
 * The extended Euclidean algorithm is an extension to the Euclidean algorithm.
 * It computes, in addition to the greatest common divisor of integers a and b,
 * it will compute the linear combination of a and b, such that: ax + by = gcd(a, b).
 *
 * @param a - number (int) - the first number
 * @param b - number (int) - the second number
 *
 * @returns `{ gcd: number; x: number; y: number; }` - the greatest common divisor and the linear combination of a and b
 * @throws Error - if a or b are not integers
 *
 * @notes
 * The extended Euclidean algorithm is used in many applications, including cryptography.
 * It is used to find the modular multiplicative inverse of two numbers.
 * The modular multiplicative inverse of two numbers a and b is an integer x such that ax ≡ 1 (mod b).
 * This is used in RSA encryption to find the private key.
 *
 * The algorithm is based on the observation that the greatest common divisor of two numbers a and b is the same as the greatest common divisor of b and the remainder of a divided by b.
 * The algorithm recursively applies this observation until the remainder is 0, at which point the greatest common divisor is found.
 *
 * Pseudocode:
 *
 * ExtendedEuclid(a, b) -> (r, x, y)
 *      Input: a,b positive integers
 *      Output: (r, x, y) such that r = gcd(a, b) and ax + by
 *
 *     if b = 0 then
 *          return (a, 1, 0)
 *     else
 *          (r, x, y) = ExtendedEuclid(b, a mod b)
 *          return (r, y, x - ⌊a/b⌋*y)
 *
 *
 * @References
 * ```md
 * Reference for Psuedo Code for the Extended Euclidean Algorithm:
 * Louridas, P. (2017). Chapter 5: Split Secrets. In Real-world algorithms: A beginner's guide (pp. 134-135). MIT Press.
 *```

 
 * @example
 * ```md
 * // es module
 * import extendedEuclid from './lib/number_systems/algorithms/extendedEuclid';
 * // common js
 * const extendedEuclid = require('./lib/number_systems/algorithms/extendedEuclid');
 * console.log(extendedEuclid(10, 5)); // { gcd: 5, x: 0, y: 1 }
 * ```
 *
 * @example
 * ```bash
 * # cli usage
 * node ./lib/number_systems/algorithms/extendedEuclid.js 10 5
 * # { gcd: 5, x: 0, y: 1 }
 * ```
 */

export default function extendedEuclid(a: number, b: number): {gcd: number; x: number; y: number} {
  // check that a is an integer
  if (!Number.isInteger(a)) {
    throw new Error('a must be an integer');
  }
  // check that b is an integer
  if (!Number.isInteger(b)) {
    throw new Error('b must be an integer');
  }

  // base case
  if (b === 0) {
    return {gcd: a, x: 1, y: 0};
  }

  // recursive case
  const {gcd, x, y} = extendedEuclid(b, a % b);

  return {gcd, x: y, y: x - Math.floor(a / b) * y};
}

// as a cli tool:
// node lib/number_systems/algorithms/extendedEuclid.js 10 5
// { gcd: 5, x: 0, y: 1 }
if (
  process?.argv[1]?.includes(normalizePath('extendedEuclid/index.ts')) ||
  process?.argv[1]?.includes(normalizePath('extendedEuclid/index.js'))
) {
  try {
    const a = Number(process.argv[2]);
    const b = Number(process.argv[3]);
    console.log(extendedEuclid(a, b));
  } catch (error) {
    throw new Error('Please provide two numbers as arguments');
  }
}
