import { describe, expect, it } from '@jest/globals';
import hexToBinary from '.';

describe('hexToBinary', () => {
    it('should return the binary representation of a hex number', () => {

        const testCases: {
            input: string, expected: string
        }[] = [
                { input: '2F', expected: '00101111' },
                { input: '5D', expected: '01011101' }
            ];

        testCases.forEach(({ input, expected }) => {
            const actual = hexToBinary(input as string)

            expect(actual).toBe(expected)
        });
    });
});