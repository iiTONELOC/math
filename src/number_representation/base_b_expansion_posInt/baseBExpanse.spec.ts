import { describe, expect, it } from '@jest/globals';
import baseBExpansion from '.';

describe('baseBExpansion', () => {
    it('should return the base b expansion of a number', () => {
        const testCases = [
            {
                value: 1677,
                b: 9,
                expected: 2263
            },
            {
                value: 345,
                b: 9,
                expected: 423
            },
            {
                value: 28,
                b: 2,
                expected: 11100
            },
            {
                value: 116,
                b: 7,
                expected: 224
            }
        ];

        testCases.forEach(({ value, b, expected }) => {
            const actual = baseBExpansion({
                n: Number(value),
                b
            });
            expect(actual).toBe(expected);
        });
    });
});
