import { describe, expect, it } from '@jest/globals';
import generalizedPigeonhole from '.';

const testCases: { n: number, r: number, expected: number }[] = [
    { n: 0, r: 0, expected: 0 },
    { n: 5, r: 3, expected: 2 },
    { n: 10, r: 3, expected: 4 },
    { n: 20, r: 6, expected: 4 },
];

describe('Generalized Pigeonhole', (): void => {
    it('It should return the number of elements in the target such that f maps to at least [n/4]', () => {
        testCases.forEach(({ n, r, expected }) => {
            expect(generalizedPigeonhole(n, r)).toBe(expected);
        });
    });
});