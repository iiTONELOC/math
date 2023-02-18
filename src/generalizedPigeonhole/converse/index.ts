import { normalizePath } from '../../utils';

/**
 * Determines the number that makes the generalized pigeonhole principle true
 * n = k(b-1) + 1
 * @param b the desired goal
 * @param k the size of the domain set
 * @returns the number that makes the generalized pigeonhole principle true
 * n = k(b-1) + 1
 *
 * @example
 * generalizedPigeonholeConverse(5, 3) // 7
 * generalizedPigeonholeConverse(5, 5) // 1
 *
 * @example
 * ```ts
 * // es6 module
 * import generalizedPigeonholeConverse from 'lib/generalizedPigeonhole/converse';
 * // commonjs
 * const generalizedPigeonholeConverse = require('lib/generalizedPigeonhole/converse').default;
 *
 * generalizedPigeonholeConverse(5, 3) // 7
 * ```
 *
 * @example
 * // cli
 * ```bash
 * $ node lib/generalizedPigeonhole/converse/index.js 5 3
 * 7
 * ```
 */
export default function generalizedPigeonholeConverse(b: number, k: number): number {
    return k * (b - 1) + 1;
}

// set up cli interface
// node lib/generalizedPigeonhole/converse/index.js 5 3
if (process.argv[1].includes(normalizePath('generalizedPigeonhole/converse/index.ts'))
    || process.argv[1].includes(normalizePath('generalizedPigeonhole/converse/index.js'))) {
    const [, , ...args] = process.argv;
    const [n, k] = args;

    console.log(generalizedPigeonholeConverse(parseInt(n, 10), parseInt(k, 10)));
}
