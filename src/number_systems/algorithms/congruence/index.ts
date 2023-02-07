import mod from '../mod/';
import { normalizePath } from '../../../utils';

/**
 * x is congruent to y mod m if x mod m = y mod m
 *
 * @param x - number (int) - the first number to compare
 * @param y - number (int) - the second number to compare
 * @param m - number (int) - the modulus
 * @returns boolean - true if x is congruent to y mod m, false otherwise
 *
 * @example
 *
 * ```md
 * Are 17 and 88 congruent to mod 11?
 *
 * 17 mod 11 = 6
 * 88 mod 11 = 0
 *
 * 17 is not congruent to 88 mod 11
 * ```
 *
 * ```ts
 * // as an es module
 * import {congruence} from './lib/number_systems';
 * 
 * // as a commonjs module
 * const {congruence} = require('./lib/number_systems');
 *
 * const isCongruent = congruence(17, 88, 11);
 * console.log(isCongruent); // false
 * ```
 *
 * @example
 * ```bash
 * # as a cli tool:
 * node lib/number_systems/algorithms/congruence/index.js 17 88 11
 * # false: 17 is not congruent to 88 mod 11
 * ```
 */
export default function congruence(x: number, y: number, m: number): boolean {
    return mod(x, m) === mod(y, m);
}

// cli api
// node lib/number_systems/algorithms/congruence/index.js 17 88 11
if (process.argv[1]?.includes(normalizePath('congruence/index.ts')) ||
    process.argv[1]?.includes(normalizePath('congruence/index.js'))) {

    const x: number = parseInt(process.argv[2], 10);
    const y: number = parseInt(process.argv[3], 10);
    const m: number = parseInt(process.argv[4], 10);

    const isCongruent: boolean = congruence(x, y, m);

    console.log(`${isCongruent}: ${x} is ${isCongruent ? 'congruent' : 'not congruent'} to ${y} mod ${m}`);
}
