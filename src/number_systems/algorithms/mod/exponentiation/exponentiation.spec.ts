import {describe, expect, it} from '@jest/globals';
import exponentiation from '.';

describe('Exponentiation Algorithm', (): void => {
  it('should return the correct remainder', () => {
    const n = 10;
    const d = 3;
    const r = exponentiation(n, d, 3);
    expect(r).toBe(1);
  });

  it('should throw an error if d is less than or equal to 0', () => {
    const n = 10;
    const d = 0;
    expect(() => exponentiation(n, d, 3)).toThrow();
  });

  it('should throw an error if n or d are not integers', () => {
    const n = 10.5;
    const d = 3;
    expect(() => exponentiation(n, d, 3)).toThrow();
  });

  it('should throw an error if a modulus is not an integer', () => {
    const n = 10;
    const d = 3;
    const m = 3.5;
    expect(() => exponentiation(n, d, m)).toThrow();
  });

  // test more mod problems
  const tests = [
    {x: 2, y: 50, m: 7, expected: 4},
    {x: 3, y: 65, m: 7, expected: 5},
    {x: 5, y: 100, m: 7, expected: 2},
    {x: 7, y: 1000, m: 13, expected: 9},
  ];

  // run a jest test for each test case
  tests.forEach(({x, y, m, expected}) => {
    it(`should return ${expected} when x = ${x}, y = ${y} and m = ${m}`, () => {
      expect(exponentiation(x, y, m)).toBe(expected);
    });
  });
});
