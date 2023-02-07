import { describe, expect, it } from '@jest/globals';
import arithmeticExpression, { Operation } from '.';

describe('arithmeticExpression', () => {
    const testCases = [
        {
            // (43^17 + 32 + 139) mod 7 = 4
            values: [43, 32, 139],
            exponents: [17, 1, 1],
            operations: [Operation.ADDITION, Operation.MULTIPLICATION],
            m: 7,
            expected: 4,
        },
        {
            // (2^3, 2^2, 4) mod 5 = 0
            values: [2, 3, 4],
            exponents: [3, 2, 1],
            operations:
                [
                    Operation.MULTIPLICATION,
                    Operation.ADDITION,
                    Operation.ADDITION
                ],
            m: 5,
            expected: 0,
        },
        {
            // [31 + 41] mod 8 = 0
            values: [31, 41],
            exponents: [1, 1],
            operations: [Operation.ADDITION],
            m: 8,
            expected: 0,
        },
        {
            // [77 · 13] mod 9 = 2
            values: [77, 13],
            exponents: [1, 1],
            operations: [Operation.MULTIPLICATION],
            m: 9,
            expected: 2,
        },
        {
            // [22 · 16] mod 5 = 2
            values: [22, 16],
            exponents: [1, 1],
            operations: [Operation.MULTIPLICATION],
            m: 5,
            expected: 2,
        },
        {
            // [29 · 66] mod 8 = 2
            values: [29, 66],
            exponents: [1, 1],
            operations: [Operation.MULTIPLICATION],
            m: 8,
            expected: 2,
        },
        {
            //[77 · 31 · 28] mod 6 = 2
            values: [77, 31, 28],
            exponents: [1, 1, 1],
            operations: [Operation.MULTIPLICATION, Operation.MULTIPLICATION],
            m: 6,
            expected: 2
        },
        {
            // [91^59 + 58] mod 9 = 5
            values: [91, 58],
            exponents: [59, 1],
            operations: [Operation.ADDITION],
            m: 9,
            expected: 5
        }
    ];

    testCases.forEach((testCase) => {
        it(`Should perform modular arithmetic for ${testCase.values} and ${testCase.exponents} and ${testCase.operations} and ${testCase.m}`, () => {
            const result = arithmeticExpression({
                values: testCase.values,
                exponents: testCase.exponents,
                operations: testCase.operations,
                m: testCase.m,
            });

            expect(result).toBe(testCase.expected);
        });
    });
});