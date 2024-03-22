import { describe, expect, it } from '@jest/globals';
import factorial from '.';

const testCases: { n: number, expected: number }[] = [
    { n: 0, expected: 1 },
    { n: 1, expected: 1 },
    { n: 2, expected: 2 },
    { n: 3, expected: 6 },
    { n: 4, expected: 24 },
    { n: 5, expected: 120 },
    { n: 6, expected: 720 },
    { n: 7, expected: 5040 },
    { n: 8, expected: 40320 },
    { n: 9, expected: 362880 },
    { n: 10, expected: 3628800 },
    { n: 11, expected: 39916800 },
    { n: 12, expected: 479001600 },
    { n: 13, expected: 6227020800 },
    { n: 14, expected: 87178291200 },
    { n: 15, expected: 1307674368000 },
    { n: 16, expected: 20922789888000 },
    { n: 17, expected: 355687428096000 },
    { n: 99, expected: 9.33262154439441e+155 }
]

describe('Factorial', (): void => {
    it('should return the factorial of a number', () => {
        testCases.forEach(({ n, expected }) => {
            expect(factorial(n)).toBe(expected);
        });
    });
});
