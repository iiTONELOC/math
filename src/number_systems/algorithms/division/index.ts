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
