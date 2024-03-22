import { describe, expect, it } from '@jest/globals';
import binaryToHex from '.';

describe('Binary to hex', () => {
    it('should return the hex representation of a binary number', () => {

        const testCases: {
            input: string, expected: string
        }[] = [
                { input: '00101111', expected: '2F' },
                {
                    input: '01011101', expected: '5D'
                }
            ];

        testCases.forEach(({ input, expected }) => {
            const actual = binaryToHex(input as string)

            expect(actual).toBe(expected)
        });
    });
});