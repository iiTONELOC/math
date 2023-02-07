import { normalizePath } from '../../../utils';

/**
 * Hash input using the h(n) = cn mod T algorithm
 *
 * @param n - number (int) - the number to hash
 * @param c - number (int) - the constant to use in the hash function
 * @param T - number (int) - the size of the hash table
 *
 * @returns number (int) - the hash value
 *
 * @throws Error - if T is less than or equal to 0
 * @throws Error - if n is not an integer
 * @throws Error - if c is not an integer
 * @throws Error - if T is not an integer
 *
 * @example
 * ```md
 * What is the hash value of 6 using the h(n) = 3n mod 4 algorithm?
 *
 * 6 mod 4 = 2
 * ```
 *
 * ```ts
 * // as an es module
 * import {hash} from './lib/number_systems';
 * // as a commonjs module
 * const {hash} = require('./lib/number_systems');
 *
 *
 * const hashValue:number = hash(6, 3, 4);
 * console.log(hashValue); // 2
 * ```
 *
 * @example
 * ```bash
 * # as a cli tool:
 *
 * node lib/number_systems/algorithms/hash/index.js 6 3 4
 * # 6 mod 4 = 2
 * ```
*/

export default function hash(n: number, c: number, T: number): number {
    // check that T is greater than 0
    if (T <= 0) {
        throw new Error('T must be greater than 0');
    }
    // check that n is an integer
    if (!Number.isInteger(n)) {
        throw new Error('n must be an integer');
    }
    // check that c is an integer
    if (!Number.isInteger(c)) {
        throw new Error('c must be an integer');
    }
    // check that T is an integer
    if (!Number.isInteger(T)) {
        throw new Error('T must be an integer');
    }
    // return the hash value
    return (c * n) % T;
}


// as a cli tool:
// node lib/number_systems/algorithms/hash/index.js 6 3 4
if (process?.argv[1]?.includes(normalizePath('hash/index.ts')) ||
    process?.argv[1]?.includes(normalizePath('hash/index.js'))) {

    const n: number = parseInt(process.argv[2], 10);
    const c: number = parseInt(process.argv[3], 10);
    const T: number = parseInt(process.argv[4], 10);

    const hashValue: number = hash(n, c, T);

    console.log(`${n} mod ${T} = ${hashValue}`);
}
