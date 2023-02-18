import { describe, expect, it } from '@jest/globals';
import rPermutation from '.';

const testCases: { n: number, r: number, expected: number }[] = [
    {
        n: 5,
        r: 3,
        expected: 60
    },
    {
        n: 10,
        r: 5,
        expected: 30240
    },
    {
        n: 10,
        r: 10,
        expected: 3628800
    },

    {
        n: 10,
        r: 0,
        expected: 1
    },
    {
        n: 8,
        r: 5,
        expected: 6720
    },
    {
        n: 5,
        r: 8,
        expected: 20
    }
];

describe('r-Permutation', (): void => {
    it('should return the number of permutations given n and r', () => {
        testCases.forEach(({ n, r, expected }) => {
            expect(rPermutation(n, r)).toBe(expected);
        });
    });
});