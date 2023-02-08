import { mod } from '../number_systems';
import { normalizePath } from '../utils';

// c = (m+k) mod n encryption
// m = (c-k) mod n decryption


/**
 * Decrypts a message using the c = (m+k) mod n encryption method
 * Note: This is a very simple encryption method and should not be used for anything important
 * @param c - number (int) - The message to be decrypted
 * @param k - number (int) - The key to be used for decryption
 * @param n - number (int) - The modulus to be used for decryption
 * @returns number (int) - The decrypted message
 *
 * @example
 * ```ts
 * // es module
 * import cModNDecryption from './lib/decryption';
 * // common js
 * const cModNDecryption = require('./lib/decryption');
 * const result = cModNDecryption({c: 18, k: 5, n: 26});
 * console.log(result); // 13
 * ```
 *
 * @example
 * ```bash
 * # cli usage
 * node ./lib/decryption/index.js 18 5 26
 * # 18 decrypted with key 5 and modulus 26 = 13
 * ```
 */
export default function cModNDecryption({ c, k, n }: { c: number; k: number; n: number }): number {
    return mod(c - k, n);
}

// cli usage
// node ./lib/decryption/index.js 18 5 26
if (process.argv[1]?.includes(normalizePath('decryption/index.ts'))
    || process.argv[1]?.includes(normalizePath('decryption/index.js'))) {

    const c = Number(process.argv[2]);
    const k = Number(process.argv[3]);
    const n = Number(process.argv[4]);

    const result = cModNDecryption({ c, k, n });

    console.log(`${c} decrypted with key ${k} and modulus ${n} = ${result}`);
}
