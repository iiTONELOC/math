import { describe, expect, it } from '@jest/globals';
import baseBExpansion from '.';

describe('baseBExpansion', () => {
    it('should return the base b expansion of a number', () => {
        const testCases = [
            {
                value: '0010011',
                b: 2,
                expected: 19
            },
            {
                value: 410,
                b: 5,
                expected: 105
            },
            {
                value: 10,
                b: 17,
                expected: 17
            },
            {
                value: 116,
                b: 7,
                expected: 62
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
