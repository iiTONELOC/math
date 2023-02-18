import { describe, expect, it } from '@jest/globals';

import rPermToRSub from '.';

const testCases: { n: number, r: number, expected: number }[] = [
    { n: 0, r: 0, expected: 1 },
    { n: 5, r: 3, expected: 10 },
    { n: 20, r: 5, expected: 15504 },
    { n: 5, r: 5, expected: 1 }
];

describe('Counts how many n permutations map to the r subset ', (): void => {
    it('should return the number of r-subsets possible', () => {
        testCases.forEach(({ n, r, expected }) => {
            expect(rPermToRSub(n, r)).toBe(expected);
        });
    });
});
