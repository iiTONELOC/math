import { normalizePath } from '../../utils';
import factorial from '../../factorial';



/**
 * Counts the number of distinct sequences possible for a given set of items
 * with repetition
 *
 * @param n the total number of items in the set
 * @param r an array of the number of items to select from the set
 * @returns the number of distinct sequences possible
 */
export default function distinctSequences(n: number, ...r: number[]): number {

    // formula for distinct sequences  = n! / n1!n2!n3!...nk!
    return factorial(n) / r.reduce((acc: number, x: number) => acc * factorial(x), 1);
}

// set up cli interface
// node lib/distinct_sequences/index.js 5 3 2 1
if (process.argv[1].includes(normalizePath('distinct_sequences/index.ts'))
    || process.argv[1].includes(normalizePath('distinct_sequences/index.js'))) {
    const [, , ...args]: string[] = process.argv;
    const [n, ...r]: string[] = args;

    console.log(distinctSequences(parseInt(n, 10), ...r.map((x: string) => parseInt(x, 10))));
}
