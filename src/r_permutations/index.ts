import { normalizePath } from '../utils';
import factorial, { _factorialMemo as _memo } from '../factorial';

/**
 * Counts the number of permutations possible for a set of items with no repetition
 *
 * @param n number of items in the set
 * @param r number of permutations or items to select
 * @returns the number of permutations possible
 *
 * @example
 * permutation(5, 3) // 60
 * permutation(5, 5) // 120
 *
 * @example
 * ```ts
 * // es6 module
 * import permutation from 'lib/permutations';
 * // commonjs
 * const permutation = require('lib/permutations').default;
 *
 * permutation(5, 3) // 60
 * ```
 *
 * @example
 * // cli
 * ```bash
 * $ node lib/r_permutations/index.js 5 3
 * 60
 * ```
 */
export default function rPermutation(n: number, r: number): number {
    return (factorial(n, _memo)) / (factorial(n - r, _memo));
}

// set up cli interface
// node lib/r_permutations/index.js 5 3
if (process.argv[1].includes(normalizePath('permutations/index.ts'))
    || process.argv[1].includes(normalizePath('permutations/index.js'))) {
    const [, , ...args] = process.argv;
    const [n, r] = args;

    console.log(rPermutation(parseInt(n, 10), parseInt(r, 10)));
}
