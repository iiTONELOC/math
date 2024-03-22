import { describe, expect, it } from '@jest/globals';
import generalizedPigeonholeConverse from '.';

const testCases: { n: number, r: number, expected: number }[] = [
    { n: 0, r: 0, expected: 1 },
    { n: 5, r: 3, expected: 13 },
    { n: 4, r: 4, expected: 13 },
    { n: 20, r: 6, expected: 115 },
];

describe('Generalized Pigeonhole Converse', (): void => {
    it('It should return the minimum number to make the Generalized Pigeonhole true', () => {
        // must be at least n(r - 1) + 1
        testCases.forEach(({ n, r, expected }) => {
            expect(generalizedPigeonholeConverse(n, r)).toBe(expected);
        });
    });
});
