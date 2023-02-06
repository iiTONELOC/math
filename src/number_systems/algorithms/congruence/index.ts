import mod from '../mod/';
import * as path from 'path';

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
 * import congruence from './congruence';
 *
 * or
 * const congruence = require('./congruence').default;
 *
 * const isCongruent = congruence(17, 88, 11);
 * console.log(isCongruent); // false
 *
 * as a cli tool:
 * node lib/congruence/index.js 17 88 11
 * // false: 17 is not congruent to 88 mod 11
 * ```
 */
export default function congruence(x: number, y: number, m: number): boolean {
    return mod(x, m) === mod(y, m);
}

// cli api

if (process.argv[1]?.includes(path.normalize('congruence/index.ts')) ||
    process.argv[1]?.includes(path.normalize('congruence/index.js'))) {

    const x: number = parseInt(process.argv[2], 10);
    const y: number = parseInt(process.argv[3], 10);
    const m: number = parseInt(process.argv[4], 10);

    const isCongruent: boolean = congruence(x, y, m);

    console.log(`${isCongruent}: ${x} is congruent to ${y} mod ${m}`);
}
