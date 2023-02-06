import * as path from 'path';

/*
Input: Integers n and d > 0.
Output: q = n div d, and r = n mod d.
*/

/**
 * The Division Algorithm
 *
 * q := 0
 * r := n
 *
 * Case 1: n < 0:
 *
 * While ( r < 0 )
 *  q := q - 1
 *  r := r + d
 *
 * Case 2: n >= 0:
 *
 * While ( r ≥ d )
 *  q := q + 1
 *  r := r - d
 *
 * Calculate the quotient and remainder of two integers
 *
 * @param n - number (int) - the dividend
 * @param d - number (int) - the divisor
 * @returns [q, r] - the quotient and remainder
 * @throws Error - if d is less than or equal to 0
 * @throws Error - if n or d are not integers
 *
 * @example
 * ```md
 * What is the value of 10 div 3?
 * ```
 *
 * ```ts
 * import division from './division';
 * or
 * const division = require('./division').default;
 *
 * const [q, r]:number[] = division(10, 3);
 * console.log(q, r); // 3 1
 *
 * as a cli program
 *
 * node lib/division/index.js 10 3
 * // 10 div 3 = 3
 *
 * node lib/division/index.js 10 3 --show-mod
 *
 * // 10 div 3 = 3 and 10 mod 3 = 1
 *```
 */

export default function division(n: number, d: number): [number, number] {
    let q = 0;
    let r = n;

    // ensure that we have valid integers
    if (d <= 0) {
        throw new Error('d must be greater than 0');
    }

    // ensure that n and d are integers and not decimals
    if (n % 1 !== 0 || d % 1 !== 0) {
        throw new Error('n and d must be integers');
    }

    if (n < 0) {
        while (r < 0) {
            q = q - 1;
            r = r + d;
        }
    } else {
        while (r >= d) {
            q = q + 1;
            r = r - d;
        }
    }

    return [q, r];
}

// provide a cli interface
if (process?.argv[1]?.includes(path.normalize('division/index.ts')) || process?.argv[1]?.includes(path.normalize('division/index.js'))) {

    const n = parseInt(process.argv[2], 10);
    const d = parseInt(process.argv[3], 10);
    const showMod = process.argv[4] === '--show-mod';
    try {
        const [q, r]: number[] = division(n, d);
        console.log(`${n} div ${d} = ${q} ${showMod ? `and ${n} mod ${d} = ${r}` : ''}`);
    } catch (error) {
        console.error(error.message);
    }
}
