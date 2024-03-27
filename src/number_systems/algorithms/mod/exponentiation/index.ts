import {normalizePath} from '../../../../utils';

/**
 * Calculates Exponents using the Modular Exponentiation By Repeated Squaring Algorithm
 *
 * @param x - number (int) - the base
 * @param y - number (int) - the exponent
 * @param m - number (int) - the modulus
 *
 * @returns number - the remainder
 *
 * @throws Error - if y is less than or equal to 0
 * @throws Error - if x, y or m are not integers
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
 * const r:number = exponentiation(10, 3, 3);
 * console.log(r); // 1
 *
 * as a cli program
 *
 * node lib/number_systems/algorithms/mod/exponentiation/index.js 10 3 3
 *
 * // 10^3 mod 3 = 1
 * ```
 */
export default function exponentiation(x: number, y: number, m: number): number {
  if (!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(m)) {
    throw new Error('x, y, and m must be integers');
  }

  if (y <= 0) {
    throw new Error('y must be greater than 0');
  }

  // c = x mod m
  let c = x % m;
  // d = y
  let d = y;
  // result = 1
  let result = 1;

  while (d > 0) {
    // if d is odd, multiply result by c
    if (d % 2 === 1) {
      result = (result * c) % m;
    }

    // divide d by 2 and take the floor
    d = Math.floor(d / 2);
    c = (c * c) % m;
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
    const x = parseInt(process.argv[2], 10);
    const y = parseInt(process.argv[3], 10);
    const m = parseInt(process.argv[4], 10);

    const r: number = exponentiation(x, y, m);
    r >= 0 && console.log(`${x}^${y} mod ${m} = ${r}`);
  } catch (error) {
    console.error(error.message);
  }
}
