import division from '../division';
import * as path from 'path';

/**
 * Calculates the remainder of a division of two numbers
 *
 * @param x - number (int) - the dividend
 * @param y - number (int) - the divisor
 * @returns number - the remainder
 * @throws Error - if y is less than or equal to 0
 * @throws Error - if x or y are not integers
 * 
 * @example
 * ```md
 * What is the value of 10 mod 3?
 * ```
 *
 * ```ts
 * import mod from './mod';
 * or
 * const mod = require('./mod').default;
 *
 * const r:number = mod(10, 3);
 * console.log(r); // 1
 *
 * as a cli program
 *
 * node lib/mod/index.js 10 3
 * // 10 mod 3 = 1
 * ```
 */

export default function mod(x: number, y: number): number {
    const [, r]: number[] = division(x, y);
    return r;
}

// run as a cli program
if (process.argv[1]?.includes(path.normalize('mod/index.ts'))
    || process.argv[1]?.includes(path.normalize('mod/index.js'))) {
    const x = parseInt(process.argv[2], 10);
    const y = parseInt(process.argv[3], 10);

    try {
        const r: number = mod(x, y);
        r >= 0 && console.log(`${x} mod ${y} = ${r}`);
    } catch (error) {
        console.error(error.message);
    }
}
