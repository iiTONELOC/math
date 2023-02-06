import { describe, expect, it } from '@jest/globals';
import division from '.';

describe('Division Algorithm', (): void => {
    it('should return the correct quotient and remainder', () => {
        const n = 10;
        const d = 3;
        const [q, r]: number[] = division(n, d);
        expect(q).toBe(3);
        expect(r).toBe(1);
    });

    it('should throw an error if d is less than or equal to 0', () => {
        const n = 10;
        const d = 0;
        expect(() => division(n, d)).toThrow();
    });

    it('should throw an error if n or d are not integers', () => {
        const n = 10.5;
        const d = 3;
        expect(() => division(n, d)).toThrow();
    });

    it('should throw an error if n or d are not integers', () => {
        const n = 10;
        const d = 3.5;
        expect(() => division(n, d)).toThrow();
    });
});