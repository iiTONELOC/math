import { mod } from '../../number_systems';
import { normalizePath } from '../../utils';

/**
 * Decrypts a message using RSA encryption method
 *
 * @param c - number (int) - The encrypted message
 * @param d - number (int) - The private key
 * @param N - number (int) - The modulus
 *
 * @returns number (int) - The decrypted message
 *
 * @example
 * ```ts
 * // es module
 * import rsaDecrypt from './lib/decryption/rsa';
 * // common js
 * const rsaDecrypt = require('./lib/decryption/rsa');
 *
 * const result = rsaDecrypt(18, 5, 26);
 * console.log(result); // 13
 * ```
 *
 * @example
 * ```bash
 * # cli usage
 * node ./lib/decryption/rsa/index.js 18 5 26
 * # 18 decrypted with key 5 and modulus 26 = 13
 * ```
 */
export default function rsaDecrypt(c: number, d: number, N: number): number {
    return mod((c ** d), N);
}


// cli usage
// node ./lib/decryption/rsa/index.js 18 5 26
if (process.argv[1]?.includes(normalizePath('decryption/rsa/index.ts'))
    || process.argv[1]?.includes(normalizePath('decryption/rsa/index.js'))) {

    const c = Number(process.argv[2]);
    const d = Number(process.argv[3]);
    const N = Number(process.argv[4]);

    const result = rsaDecrypt(c, d, N);

    console.log(`${c} decrypted with key ${d} and modulus ${N} = ${result}`);
}
