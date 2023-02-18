import { normalizePath } from '../utils';
export const _factorialMemo: { [key: number]: number } = {};

/**
 * Iteratively calculates the factorial of a number
 *
 * @param n the integer to calculate the factorial of
 * @param memo optional memoization object to override the default
 * @returns the factorial of the number
 *
 * @example
 * factorial(5) // 120
 * factorial(0) // 1
 * factorial(-5) // 120
 *
 * @example
 * // memoization
 * const memo = {};
 * factorial(5, memo) // 120
 * factorial(7, memo) // doesn't recalculate 5!
 *
 * @example
 * ```ts
 * // es6 module
 * import factorial from 'lib/factorial';
 * // commonjs
 * const factorial = require('lib/factorial').default;
 *
 * factorial(5) // 120
 *
 * // or with custom memoization
 * const memo = {};
 * factorial(5, memo) // 120
 * factorial(7, memo) // doesn't recalculate 5!
 * ```
 *
 * @example
 * // cli
 * ```bash
 * $ node lib/factorial/index.js 5
 * 120
 * ```
 */
export default function factorial(n: number, memo = _factorialMemo): number {

    if (n < 0) {
        n = Math.abs(n);
    }

    if (n === 0) {
        return 1;
    }

    if (memo[n]) {
        return memo[n];
    }

    let result = 1;

    for (let i = 1; i <= n; i++) {

        result *= i;
        memo[i] = result;
    }

    return result;
}


// cli

// node lib/factorial/index.js 5
if (process.argv[1].includes(normalizePath('factorial/index.ts'))
    || process.argv[1].includes(normalizePath('factorial/index.js'))) {
    const [, , ...args] = process.argv;
    const [n] = args;

    console.log(factorial(parseInt(n, 10)));
}
