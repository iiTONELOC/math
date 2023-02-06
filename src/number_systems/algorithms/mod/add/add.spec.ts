import { describe, expect, it } from '@jest/globals';
import add from '.';

describe('Modular Addition', (): void => {
    it('should return the correct sum', () => {
        const a = 6;
        const b = 8;
        const m = 4;
        const s = add(a, b, m);
        expect(s).toBe(2);
    });

    it('should throw an error if m is less than or equal to 0', () => {
        const a = 6;
        const b = 8;
        const m = 0;
        expect(() => add(a, b, m)).toThrow();
    });

    it('should throw an error if a or b are not integers', () => {
        const a = 8.5;
        const b = 8;
        const m = 4;
        expect(() => add(a, b, m)).toThrow();
    });

    it('should throw an error if a or b are not integers', () => {
        const a = 6;
        const b = 8.5;
        const m = 4;
        expect(() => add(a, b, m)).toThrow();
    });

    it('should throw an error if m is not an integer', () => {
        const a = 6;
        const b = 8;
        const m = 4.5;
        expect(() => add(a, b, m)).toThrow();
    });
});

