import { normalizePath } from '../utils';
import factorial, { _factorialMemo as _memo } from '../factorial';

/**
 * Counts the number of permutations possible for a given set of items
 * with no repetition
 *
 * @param n number of items in the set
 * @returns the number of permutations possible
 *
 * @example
 * permutation(5) // 120
 *
 * @example
 * ```ts
 * // es6 module
 * import permutation from 'lib/permutations';
 * // commonjs
 * const permutation = require('lib/permutations').default;
 *
 * permutation(5) // 120
 * ```
 *
 * @example
 * // cli
 * ```bash
 * $ node lib/permutations/index.js 5
 * 120
 * ```
 *
 * */

export default function permutation(n: number): number {
    // P(n,n) = n x (n-1) x (n-2) x (n-3) x ... x 1 = n!
    return factorial(n, _memo);
}

// set up cli interface
// node lib/permutations/index.js 5
if (process.argv[1].includes(normalizePath('permutations/index.ts'))
    || process.argv[1].includes(normalizePath('permutations/index.js'))) {
    const [, , ...args] = process.argv;
    const [n] = args;

    console.log(permutation(parseInt(n, 10)));
}
