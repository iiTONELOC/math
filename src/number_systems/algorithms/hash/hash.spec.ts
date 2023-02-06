import { describe, expect, it } from '@jest/globals';
import hash from '.';

describe('Hash', (): void => {
    it('should return the correct hash value', () => {
        const n = 6;
        const c = 3;
        const T = 4;
        const h = hash(n, c, T);
        expect(h).toBe(2);
    });

    it('should throw an error if T is less than or equal to 0', () => {
        const n = 6;
        const c = 3;
        const T = 0;
        expect(() => hash(n, c, T)).toThrow();
    });

    it('should throw an error if n is not an integer', () => {
        const n = 6.5;
        const c = 3;
        const T = 4;
        expect(() => hash(n, c, T)).toThrow();
    });

    it('should throw an error if c is not an integer', () => {
        const n = 6;
        const c = 3.5;
        const T = 4;
        expect(() => hash(n, c, T)).toThrow();
    });

    it('should throw an error if T is not an integer', () => {
        const n = 6;
        const c = 3;
        const T = 4.5;
        expect(() => hash(n, c, T)).toThrow();
    });
});