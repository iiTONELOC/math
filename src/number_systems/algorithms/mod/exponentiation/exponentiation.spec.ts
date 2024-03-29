import {describe, expect, it} from '@jest/globals';
import exponentiation from '.';

describe('Exponentiation Algorithm', (): void => {
  it('should throw an error if d is less than or equal to 0', () => {
    const n = 10n;
    const d = 0n;
    expect(() => exponentiation(n, d, 3n)).toThrow();
  });

  it('should throw an error if n or d are not integers', () => {
    const n = 10.5;
    const d = 3n;
    expect(() => exponentiation(BigInt(n), d, 3n)).toThrow();
  });

  it('should throw an error if a modulus is not an integer', () => {
    const n = 10n;
    const d = 3n;
    const m = 3.5;
    expect(() => exponentiation(n, d, BigInt(m))).toThrow();
  });

  // test more mod problems
  const tests = [
    {x: 2n, y: 50n, m: 7n, expected: 4n},
    {x: 3n, y: 65n, m: 7n, expected: 5n},
    {x: 5n, y: 100n, m: 7n, expected: 2n},
    {x: 7n, y: 1000n, m: 13n, expected: 9n},
  ];

  // run a jest test for each test case
  tests.forEach(({x, y, m, expected}) => {
    it(`should return ${expected.toString()} when x = ${x.toString()}, y = ${y.toString()} and m = ${m.toString()}`, () => {
      expect(exponentiation(x, y, m)).toBe(expected);
    });
  });
});
