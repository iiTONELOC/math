import mod from '../index';
import { normalizePath } from '../../../../utils';

/**
 * @param a number (int) - the first number to multiply
 * @param b number (int) - the second number to multiply
 * @param z number (int) - the modulus
 * @returns number (int) - the product of a and b mod z
 *
 * @throws Error - if z is less than or equal to 0
 * @throws Error - if a or b are not integers
 * @throws Error - if z is not an integer
 *
 * @example
 * ```md
 * What is the value of 4 * 9 in the ring Z/6Z?
 *
 * 4 * 9 = 36
 * 36 mod 6 = 0
 * ```
 * ```ts
 * 
 * // as an es module
 * import {modularMultiplication} from './lib/number_systems';
 * // as a commonjs module
 * const {modularMultiplication} = require('./lib/number_systems');
 *
 *
 * const modularProduct:number = modularMultiplication(4, 9, 6);
 *
 * console.log(modularProduct); // 0
 * ```
 * @example
 * ```bash
 * # as a cli tool:
 *
 * node lib/number_systems/algorithms/mod/multiply/index.js 4 9 6
 * # (4 * 9) mod 6 = 0
 * ```
 */
export default function modularMultiplication(a: number, b: number, z: number): number {
    return mod(a * b, z);
}

// cli
// node lib/number_systems/algorithms/mod/multiply/index.js 4 9 6
if (process.argv[1]?.includes(normalizePath('mod/multiply/index.ts'))
    || process.argv[1]?.includes(normalizePath('mod/multiply/index.js'))) {
    const a: number = parseInt(process.argv[2], 10);
    const b: number = parseInt(process.argv[3], 10);
    const z: number = parseInt(process.argv[4], 10);
    const sum: number = modularMultiplication(a, b, z);

    console.log(`(${a} * ${b}) mod ${z} = ${sum}`);
}

