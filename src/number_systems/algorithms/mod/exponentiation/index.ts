import {normalizePath} from '../../../../utils';

/**
 * Calculates Exponents using the Modular Exponentiation By Repeated Squaring Algorithm
 *
 * @param x - bigint|number - the base
 * @param y - bigint|number - the exponent
 * @param m - bigint|number - the modulus
 *
 * @returns bigint - The final result of x^y mod m
 *
 * @throws Error - if y is less than or equal to 0
 * @throws Error - if x, y or m are not integers
 *
 *@note
 * Pseudo Code:
 *
 * ModExpRepeatedSquaring(g,x,p)->r
 *      Input:
 *        g: integer base
 *        x: integer exponent
 *        p: integer modulus
 *     Output:
 *        r: integer result of g^x mod p
 *   c:= g mod p
 *   d:= x
 *   r:= 1
 *
 *   while d > 0 do
 *      if d mod 2 = 1 then
 *        r:= r*c mod p
 *      end if
 *
 *     d:= d / 2
 *     c:= c^2 mod p
 *  end while
 *
 *  return r
 *
 *
 * @References
 * ```md
 * Reference for Modular Exponentiation By Repeated Squaring:
 * Louridas, P. (2017). Chapter 4: Secrets. In Real-world algorithms: A beginner's guide (p. 121). MIT Press.
 *
 * Reference for BigInts in JavaScript:
 * https://www.w3schools.com/js/js_bigint.asp
 *```
 *
 * @example
 * ```md
 * What is the value of 10^3 mod 3?
 *
 * 10^3 = 1000
 *
 * 1000 mod 3 = 1
 * ```
 *
 * ```ts
 * import {exponentiation} from './lib/number_systems/mod';
 * or
 * const {exponentiation} = require('./lib/number_systems/mod');
 *
 * const r: bigint = exponentiation(10n, 3n, 3n);
 * console.log(r); // 1n
 *
 * as a cli program
 *
 * node lib/number_systems/algorithms/mod/exponentiation/index.js 10 3 3
 *
 * // 10^3 mod 3 = 1
 * ```
 */
export default function modularExponentiation(
  x: bigint | number,
  y: bigint | number,
  m: bigint | number,
): bigint {
  if (
    !Number.isInteger(Number(x)) ||
    !Number.isInteger(Number(y)) ||
    !Number.isInteger(Number(m))
  ) {
    throw new Error('x, y, and m must be integers');
  }

  // if numbers were provided instead of BigInts, convert them to BigInts
  if (typeof x === 'number') x = BigInt(x);
  if (typeof y === 'number') y = BigInt(y);
  if (typeof m === 'number') m = BigInt(m);

  if (y <= 0n) {
    throw new Error('y must be greater than 0');
  }

  // initialize result to 1
  let result = 1n;

  // take the modulus of the base to prevent overflow
  x %= m;

  // while the exponent is greater than 0
  while (y > 0n) {
    // if the exponent is odd, multiply result by x mod m
    if (y % 2n === 1n) {
      result = (result * x) % m;
    }

    // have to divide the exponent by 2, since BigInts don't have a right shift operator
    y = y / 2n;

    // square the base and take the modulus
    x = (x * x) % m;
  }

  return result;
}

// run as a cli program
// node lib/number_systems/algorithms/mod/exponentiation/index.js 10 3 3
if (
  process.argv[1]?.includes(normalizePath('mod/exponentiation/index.ts')) ||
  process.argv[1]?.includes(normalizePath('mod/exponentiation/index.js'))
) {
  try {
    const x = BigInt(process.argv[2]);
    const y = BigInt(process.argv[3]);
    const m = BigInt(process.argv[4]);

    const r: bigint = modularExponentiation(x, y, m);
    r >= 0n && console.log(`${x.toString()}^${y.toString()} mod ${m.toString()} = ${r.toString()}`);
  } catch (error) {
    console.error(error.message);
  }
}
