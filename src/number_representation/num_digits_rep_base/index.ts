import { normalizePath } from '../../utils';

/**
 * Calculates the number of digits in the base b representation of a positive integer n
 * @param n - number (int) - The number to be expanded
 * @param b - number (int) - The base to expand the number to
 * @returns number (int) - The number of digits in the base b representation of n
 * @example
 *
 * ```ts
 * // es module
 * import numDigitsRepBase from './lib/number_representation/num_digits_rep_base';
 * // common js
 * const numDigitsRepBase = require('./lib/number_representation/num_digits_rep_base');
 * const result = numDigitsRepBase({n: 13, b: 2});
 * console.log(result); // 4
 * ```
 *
 * @example
 * ```bash
 * # cli usage
 * node ./lib/number_representation/num_digits_rep_base/index.js 410 5
 * # 13 base 2 = 4 digits
 * ```
*/

export default function numDigitsRepBase({ n, b }: { n: number; b: number }): number {
    return Math.round(Math.log(n + 1) / Math.log(b));
}

// cli usage
// node ./lib/number_representation/num_digits_rep_base/index.js 13 2
if (process.argv[1]?.includes(normalizePath('num_digits_rep_base/index.ts'))
    || process.argv[1]?.includes(normalizePath('num_digits_rep_base/index.js'))) {
    const n = Number(process.argv[2]);
    const b = Number(process.argv[3]);
    const result = numDigitsRepBase({ n, b });
    console.log(`${n} base ${b} = ${result} digits`);
}
