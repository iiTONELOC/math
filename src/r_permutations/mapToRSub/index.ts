// maps the r-permutation to the r-subset
// using the formula: P(n,r) = n! / (r!(n-r)!)


import { normalizePath } from '../../utils';
import factorial, { _factorialMemo as _memo } from '../../factorial';

/**
 * Counts the number of r-subsets possible for a given set of items
 * with no repetition
 *
 * @param n total number of items in the set
 * @param r number of items to select
 * @returns the number of r-subsets possible
 *
 * @example
 * mapToRSub(5, 3) // 10
 * mapToRSub(5, 5) // 1
 *
 * @example
 * ```ts
 * // es6 module
 * import mapToRSub from 'lib/r_permutations/mapToRSub';
 * // commonjs
 * const mapToRSub = require('lib/r_permutations/mapToRSub').default;
 *
 * mapToRSub(5, 3) // 10
 * ```
 *
 * @example
 * // cli
 * ```bash
 * $ node lib/r_permutations/mapToRSub/index.js 5 3
 * 10
 * ```
 */
export default function mapToRSub(n: number, r: number): number {
    return factorial(n, _memo) / (factorial(r, _memo) * factorial(n - r, _memo));
}

// set up cli interface
// node lib/r_permutations/mapToRSub/index.js 5 3
if (process.argv[1].includes(normalizePath('r_permutations/mapToRSub/index.ts'))
    || process.argv[1].includes(normalizePath('r_permutations/mapToRSub/index.js'))) {
    const [, , ...args] = process.argv;
    const [n, r] = args;

    console.log(mapToRSub(parseInt(n, 10), parseInt(r, 10)));
}
