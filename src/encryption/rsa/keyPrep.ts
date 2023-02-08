import { normalizePath } from '../../utils';
/*
Preparation of public and private keys in RSA.
Bob selects two large prime numbers, p and q.
Bob computes N = pq and TH= (p-1)(q-1)
Bob finds an integer e such that gcd(e, TH) = 1.
Bob computes the multiplicative inverse of e mod TH: an integer d such that (ed mod TH) = 1.

Public (encryption) key: N and e.
Private (decryption) key: d.

Encryption: c = m^e mod N
Decryption: m = c^d mod N
*/

function gcd(a: number, b: number): number {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

/**
 * Prepares the public and private keys for RSA encryption
 *
 * @param p - number (int) - The first prime number
 * @param q - number (int) - The second prime number
 * @returns  { publicKey: { N: number; e: number; }; privateKey: { N: number; d: number; }; } - The public and private keys
 * @example
 * ```ts
 * // es module
 * import keyPrep from './lib/encryption/rsa/keyPrep';
 * // common js
 * const keyPrep = require('./lib/encryption/rsa/keyPrep');
 * const { publicKey, privateKey } = keyPrep(3, 11);
 * console.log(publicKey); // { N: 33, e: 7 }
 * console.log(privateKey); // { N: 33, d: 3 }
 * ```
 * @example
 * ```bash
 * # cli usage
 * node ./lib/encryption/rsa/keyPrep.js 3 11
 * # Public key: N = 33, e = 7
 * # Private key: N = 33, d = 3
 * ```
*/
export default function keyPrep(p: number, q: number, e?: number, d?: number): {
    publicKey: { N: number; e: number; };
    privateKey: { N: number; d: number; };
    TH: number;
} {
    const N = p * q;

    const TH = (p - 1) * (q - 1);

    // find e such that gcd(e, TH) = 1
    const _e = (): number => {
        for (let i = 2; i < TH; i++) {
            if (gcd(i, TH) === 1) {
                return i;
            }
        }
        return 0;
    };

    // compute the multiplicative inverse of e mod TH: an integer d such that (ed mod TH) = 1
    const _d = (): number => {
        for (let i = 2; i < TH; i++) {
            if ((i * _e()) % TH === 1) {
                return i;
            }
        }
        return 0;
    };

    const publicKey = { N, e: e ? e : _e() };
    const privateKey = { N, d: d ? d : _d() };

    return {
        publicKey,
        privateKey,
        TH
    };
}

// cli usage
// node ./lib/encryption/rsa/keyPrep.js 3 11
if (process.argv[1]?.includes(normalizePath('keyPrep.ts'))
    || process.argv[1]?.includes(normalizePath('keyPrep.js'))) {

    const p = Number(process.argv[2]);
    const q = Number(process.argv[3]);
    // look for e and d in the command line
    const e = Number(process.argv[4]);
    const d = Number(process.argv[5]);

    const { publicKey, privateKey, TH } = keyPrep(p, q, e, d);

    console.log(`Public key: e = ${publicKey.e} N = ${publicKey.N},`);
    console.log(`Private key:  d = ${privateKey.d} N = ${privateKey.N},`);
    console.log(`TH = ${TH}`);
}

