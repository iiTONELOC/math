import { normalizePath } from '../utils';
/*
Consider a function whose domain has at least n elements and whose target has k elements,
for n and k positive integers. Then there is an element y in the target such that f maps at least
[n/k] elements in the domain to y.
 */


/**
 * Counts the number of elements in the target such that f maps at least [n/r]
 * elements in the domain to y
 * @param n the number of elements in the domain
 * @param r the number of elements in the target
 * @returns the number of elements in the target such that f maps at least [n/r]
 * elements in the domain to y
 *
 * @example
 * generalizedPigeonhole(5, 3) // 2
 * generalizedPigeonhole(5, 5) // 1
 *
 * @example
 * ```ts
 * // es6 module
 * import generalizedPigeonhole from 'lib/generalizedPigeonhole';
 * // commonjs
 * const generalizedPigeonhole = require('lib/generalizedPigeonhole').default;
 *
 * generalizedPigeonhole(5, 3) // 2
 * ```
 *
 * @example
 * // cli
 * ```bash
 * $ node lib/generalizedPigeonhole/index.js 5 3
 * 2
 * ```
 */
export default function generalizedPigeonhole(n: number, r: number): number {
    const nDivR = Math.ceil(n / r);
    return !Number.isNaN(nDivR) && nDivR ? nDivR : 0;
}

// set up cli interface
// node lib/generalizedPigeonhole/index.js 5 3
if (process.argv[1].includes(normalizePath('generalizedPigeonhole/index.ts'))
    || process.argv[1].includes(normalizePath('generalizedPigeonhole/index.js'))) {
    const [, , ...args] = process.argv;
    const [n, r] = args;

    console.log(generalizedPigeonhole(parseInt(n, 10), parseInt(r, 10)));
}
