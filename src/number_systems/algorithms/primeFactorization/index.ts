import {normalizePath} from '../../../utils';

/**
 * Prime Factorization
 *
 * Uses Fermat's Factorization Method to find the prime factors of a number.
 *
 * @param n - number (int) - the number to find the prime factors of
 *
 * @returns number[] - the largest prime factors of n
 *
 *
 * @note
 *
 * Pseudo Code:
 *
 * FermatFactor(N): // should be an odd number
 *  a:= ceiling(sqrt(N))
 *
 *  b2:= a*a - N
 *
 *  while b2 is not a square:
 *    a:= a + 1
 *    b2:= a*a - N
 *  end while
 *
 *  return (a-sqrt(b2), a + sqrt(b2))
 *
 * @reference
 * https://en.wikipedia.org/wiki/Fermat%27s_factorization_method
 *
 * @example
 *
 * ```ts
 * import {primeFactorization} from './lib/number_systems/algorithms/';
 * or
 * const {primeFactorization} = require('./lib/number_systems/algorithms/');
 *
 * console.log(primeFactorization(17)); // [ 1, 17 ]
 * ```
 *
 * @example
 * ```bash
 * # cli usage
 * node ./lib/number_systems/algorithms/primeFactorization/index.js 17
 *
 * # [ 1, 17 ]
 * ```
 * */

export default function primeFactorization(n: number): number[] {
  if (!Number.isInteger(n)) {
    throw new Error('n must be an integer');
  }

  if (n < 2) {
    throw new Error('n must be greater than 1');
  }

  let x = Math.ceil(Math.sqrt(n));
  let b2 = x * x - n;

  while (!Number.isInteger(Math.sqrt(b2))) {
    x++;
    b2 = x * x - n;
  }

  const y = Math.sqrt(b2);

  const factors = [x - y, x + y];

  return factors;
}

// as a cli tool:
// node lib/number_systems/algorithms/primeFactorization/index.js 17
// [ 1, 17 ]
if (
  process?.argv[1]?.includes(normalizePath('primeFactorization/index.ts')) ||
  process?.argv[1]?.includes(normalizePath('primeFactorization/index.js'))
) {
  try {
    const n = Number(process.argv[2]);
    console.log(primeFactorization(n));
  } catch (error) {
    console.error(error.message);
  }
}
