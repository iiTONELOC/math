import { describe, expect, it } from '@jest/globals';
import congruence from '.';

describe('congruence', () => {
    it('should return false if x is congruent to y mod m', () => {
        expect(congruence(17, 88, 11)).toBe(false);
    });

    it('should return true if x is congruent to y mod m', () => {
        expect(congruence(25, -8, 11)).toBe(true);
    });
});