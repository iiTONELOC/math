import {normalizePath} from '../../../utils';

/**
 * Calculates Exponents using the Repeated Squaring Algorithm
 *
 * @param x - number (int) - the base
 * @param y - number (int) - the exponent
 *
 * @returns number - the remainder
 *
 * @throws Error - if y is less than or equal to 0
 * @throws Error - if x, y or m are not integers
 *
 * @example
 * ```md
 * What is the value of 10^3
 *
 * 10^3 = 1000
 * ```
 *
 * ```ts
 * import {exponentiation} from './lib/number_systems/algorithms/exponentiationBySquaring';
 * or
 * const {exponentiation} = require('./lib/number_systems/algorithms/exponentiationBySquaring');
 *
 * const r:number = exponentiation(10, 3);
 * console.log(r); // 1000
 *
 * as a cli program
 *
 * node lib/number_systems/algorithms/exponentiationBySquaring/index.js 10 3
 *
 * // 10^3 = 1000
 * ```
 */

export default function exponentiation(x: number, y: number): number {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    throw new Error('x and y must be integers');
  }

  if (y < 0) {
    throw new Error('y must be greater than -1');
  }

  if (y === 0) {
    return 1;
  }

  // result = 1
  let result = 1;

  while (y > 0) {
    // if y is odd, multiply result by x
    if (y % 2 === 1) {
      result *= x;
    }

    // x = x^2
    x *= x;
    // y = y / 2
    y = Math.floor(y / 2);
  }

  return result;
}

// run as a cli program
// node lib/number_systems/algorithms/exponentiationBySquaring/index.js 10 3
if (
  process.argv[1]?.includes(normalizePath('exponentiationBySquaring/index.ts')) ||
  process.argv[1]?.includes(normalizePath('exponentiationBySquaring/index.js'))
) {
  try {
    const x = parseInt(process.argv[2], 10);
    const y = parseInt(process.argv[3], 10);

    const r: number = exponentiation(x, y);
    console.log(`${x}^${y} = ${r}`);
  } catch (error) {
    console.error(error.message);
  }
}
