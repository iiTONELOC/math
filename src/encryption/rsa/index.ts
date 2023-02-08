import { normalizePath } from '../../utils';
// Encryption: c = m^e mod N


/**
 * Encrypts a message using RSA encryption method
 *
 * @param m - number (int) - The message to encrypt
 * @param e - number (int) - The public key
 * @param N  - number (int) - The modulus
 * @returns  number (int) - The encrypted message
 *
 * @example
 * ```ts
 * // es module
 * import rsaEncrypt from './lib/encryption/rsa';
 * // common js
 * const rsaEncrypt = require('./lib/encryption/rsa');
 *
 * const result = rsaEncrypt(13, 7, 33);
 * console.log(result); // 18
 * ```
 *
 * @example
 * ```bash
 * # cli usage
 * node ./lib/encryption/rsa/index.js 13 7 33
 * # 13 encrypted with key 7 and modulus 33 = 18
 * ```
 */

export default function rsaEncrypt(m: number, e: number, N: number): number {
    return ((m ** e) % N);
}

// cli usage
// node ./lib/encryption/rsa/index.js 13 7 33
if (process.argv[1]?.includes(normalizePath('rsa/index.ts'))
    || process.argv[1]?.includes(normalizePath('rsa/index.js'))) {

    const m = Number(process.argv[2]);
    const e = Number(process.argv[3]);
    const N = Number(process.argv[4]);

    console.log(`m: ${m}, e: ${e}, N: ${N}`);
    const result = rsaEncrypt(m, e, N);

    console.log(`${m} encrypted with key ${e} and modulus ${N} = ${result}`);
}
