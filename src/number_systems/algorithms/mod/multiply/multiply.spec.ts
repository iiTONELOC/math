import { describe, expect, it } from '@jest/globals';
import multiply from '.';

describe('Modular multiplication', () => {
    it('should multiply two numbers and return its modulated value', () => {
        const testCases = [
            {
                values: [2, 3],
                m: 5,
                expected: 1,
            },
            {
                values: [2, 3],
                m: 9,
                expected: 6,
            },
            {
                values: [18, 3],
                m: 4,
                expected: 2,
            }
        ];

        testCases.forEach(({ values, m, expected }) => {
            const actual = multiply(values[0], values[1], m);
            expect(actual).toBe(expected);
        });
    });
});