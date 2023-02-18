import { normalizePath } from '../utils';
import mapToRSub from '../r_permutations/mapToRSub';

// a combination is a permutation that maps to a subset
// so we can use the mapToRSub function to count the number of combinations
// for a given set of items
export default function combination(n: number, r: number): number {
    return mapToRSub(n, r);
}

// set up cli interface
// node lib/combinations/index.js 5 3
if (process.argv[1].includes(normalizePath('combinations/index.ts'))
    || process.argv[1].includes(normalizePath('combinations/index.js'))) {
    const [, , ...args] = process.argv;
    const [n, r] = args;

    console.log(combination(parseInt(n, 10), parseInt(r, 10)));
}
