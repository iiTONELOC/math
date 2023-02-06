import division from '../division';
import * as path from 'path';

/**
 * Calculates the remainder of a division of two numbers
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
