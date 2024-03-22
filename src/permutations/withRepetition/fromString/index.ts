import { normalizePath } from '../../../utils';
import distinctSequences from '..';
// count the number of ways to permute the letters in a string
// with repetition



// formula for distinct sequences  = n! / n1!n2!n3!...nk!
export default function permutationsWithRepetition(str: string): number {
    // given the string 'PEPPER'
    // we can count the number of ways to permute the letters with repetition
    // by counting the number of distinct sequences possible for a given set of items

    // first we need to count the number of times each letter appears in the string
    // we can do this by creating a map of the letters and their counts
    const letterCounts = new Map<string, number>();
    for (const letter of str) {
        if (letterCounts.has(letter)) {
            letterCounts.set(letter, letterCounts.get(letter) + 1);
        } else {
            letterCounts.set(letter, 1);
        }
    }

    // now we can count the number of distinct sequences possible for a given set of items
    // by passing the total number of items in the set and the number of times each letter appears
    // in the string to the distinctSequences function
    return distinctSequences(str.length, ...Array.from(letterCounts.values()));
}

// set up cli interface
// node lib/permutations/withRepetition/fromString/index.js PEPPER
if (process.argv[1].includes(normalizePath('permutations/withRepetition/fromString/index.ts'))
    || process.argv[1].includes(normalizePath('permutations/withRepetition/fromString/index.js'))) {
    const [, , ...args] = process.argv;
    const [str] = args;

    console.log(permutationsWithRepetition(str));
}
