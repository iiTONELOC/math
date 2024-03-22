import { mod } from '../number_systems';
import { normalizePath } from '../utils';

// c = (m+k) mod n encryption
// m = (c-k) mod n decryption

/**
 * Encrypts a message using the c = (m+k) mod n encryption method
 * Note: This is a very simple encryption method and should not be used for anything important
 * @param m - number (int) - The message to be encrypted
 * @param k - number (int) - The key to be used for encryption
 * @param n - number (int) - The modulus to be used for encryption
 * @returns number (int) - The encrypted message
 * @example
 * ```ts
 * // es module
 * import cModNEncryption from './lib/encryption';
 * // common js
 * const cModNEncryption = require('./lib/encryption');
 * const result = cModNEncryption({m: 13, k: 5, n: 26});
 * console.log(result); // 18
 * ```
 * @example
 * ```bash
 * # cli usage
 * node ./lib/encryption/index.js 13 5 26
 * # 13 encrypted with key 5 and modulus 26 = 18
 * ```
 */
export default function cModNEncryption({ m, k, n }: { m: number; k: number; n: number }): number {
    return mod(m + k, n);
}

// cli usage

// node ./lib/encryption/index.js 13 5 26
if (process.argv[1]?.includes(normalizePath('encryption/index.ts'))
    || process.argv[1]?.includes(normalizePath('encryption/index.js'))) {

    const m = Number(process.argv[2]);
    const k = Number(process.argv[3]);
    const n = Number(process.argv[4]);

    const result = cModNEncryption({ m, k, n });

    console.log(`${m} encrypted with key ${k} and modulus ${n} = ${result}`);
}
