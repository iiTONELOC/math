import { describe, expect, it } from '@jest/globals';
import numDigitsRepBase from '.';

describe('hexToBinary', () => {
    it('should return the number of digits the expanded number contains', () => {

        const testCases: {
            n: number, b: number, expected: number
        }[] = [
                { n: 13, b: 2, expected: 4 },
                { n: 410, b: 5, expected: 4 },
                { n: 1677, b: 5, expected: 5 },
                { n: 2 ** 56, b: 2, expected: 56 },
                { n: 8 ** 7, b: 8, expected: 7 },
            ];

        testCases.forEach(({ n, b, expected }) => {
            const actual = numDigitsRepBase({ n, b })

            expect(actual).toBe(expected)
        });

    });
});