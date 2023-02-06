import mod from '../index';
import * as path from 'path';

/**
 * 
 * @param a number (int) - the first number to add
 * @param b number (int) - the second number to add
 * @param z number (int) - the modulus
 * @returns number (int) - the sum of a and b mod z
 *
 * @throws Error - if z is less than or equal to 0
 * @throws Error - if a or b are not integers
 * @throws Error - if z is not an integer
 *
 * @example
 * ```md
 * What is the value of 6 + 8 in the ring Z/4Z?
 *
 *  6 + 8 = 14
 *  14 mod 4 = 2
 * ```
 *
 * ```ts
 * import modularAddition from './modularAddition';
 * or
 * const modularAddition = require('./modularAddition').default;
 * 
 * const modularSum:number = modularAddition(6, 8, 4);
 * console.log(modularSum); // 2
 *
 * as a cli tool:
 * node lib/mod/add/index.js 6 8 4
 * // (6 + 8) mod 4 = 2
 * ```
 */
export default function modularAddition(a: number, b: number, z: number): number {
    return mod(a + b, z);
}

// cli api

if (process.argv[1]?.includes(path.normalize('mod/add/index.ts'))
    || process.argv[1]?.includes(path.normalize('mod/add/index.js'))) {
    const a: number = parseInt(process.argv[2], 10);
    const b: number = parseInt(process.argv[3], 10);
    const z: number = parseInt(process.argv[4], 10);
    const sum: number = modularAddition(a, b, z);

    console.log(`(${a} + ${b}) mod ${z} = ${sum}`);
}
