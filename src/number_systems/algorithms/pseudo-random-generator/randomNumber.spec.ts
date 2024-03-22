import { describe, expect, it } from '@jest/globals';
import numberGenerator from '.';


describe('Random Number Generator', (): void => {
    it('should return an object with a random number and a seed', () => {
        const seed = 123;
        const randomNumber: {
            next(): { value: number; done: boolean };
        } = numberGenerator({ seed });

        expect(randomNumber.next).toBeDefined();
    });

    it('should return an object with a random number and a seed', () => {
        const seed = 123;
        const randomNumber: {
            next(): { value: number; done: boolean };
        } = numberGenerator({ seed });

        const nextNumber = randomNumber.next();
        const number2 = randomNumber.next();

        expect(nextNumber).not.toBe(number2);
    });
});