import { describe, expect, it } from '@jest/globals';
import mod from '.';

describe('Mod Algorithm', (): void => {
    it('should return the correct remainder', () => {
        const n = 10;
        const d = 3;
        const r = mod(n, d);
        expect(r).toBe(1);
    });

    it('should throw an error if d is less than or equal to 0', () => {
        const n = 10;
        const d = 0;
        expect(() => mod(n, d)).toThrow();
    });

    it('should throw an error if n or d are not integers', () => {
        const n = 10.5;
        const d = 3;
        expect(() => mod(n, d)).toThrow();
    });

    it('should throw an error if n or d are not integers', () => {
        const n = 10;
        const d = 3.5;
        expect(() => mod(n, d)).toThrow();
    });
});

const tests = [
    { x: 17, y: 6, expected: 5 },
    { x: 23, y: 5, expected: 3 },
    { x: -10, y: 5, expected: 0 },
    { x: -13, y: 6, expected: 5 },
]

// run a jest test for each test case
tests.forEach(({ x, y, expected }) => {
    it(`should return ${expected} when x = ${x} and y = ${y}`, () => {
        expect(mod(x, y)).toBe(expected);
    });
});