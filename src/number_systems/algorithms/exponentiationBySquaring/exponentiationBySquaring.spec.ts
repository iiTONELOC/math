import {describe, expect, it} from '@jest/globals';
import exponentiation from '.';

describe('Exponentiation Algorithm', (): void => {
  const tests = [
    {x: 2, y: 1, expected: 2},
    {x: 2, y: 2, expected: 4},
    {x: 2, y: 3, expected: 8},
    {x: 2, y: 4, expected: 16},
    {x: 2, y: 5, expected: 32},
    {x: 2, y: 6, expected: 64},
    {x: 2, y: 7, expected: 128},
    {x: 2, y: 8, expected: 256},
    {x: 2, y: 9, expected: 512},
    {x: 2, y: 10, expected: 1024},
    {x: 2, y: 11, expected: 2048},
    {x: 2, y: 12, expected: 4096},
    {x: 2, y: 13, expected: 8192},
    {x: 2, y: 14, expected: 16384},
    {x: 2, y: 30, expected: 1073741824},
    {x: 2, y: 50, expected: 1125899906842624},
    {x: 3, y: 0, expected: 1},
    {x: 3, y: 1, expected: 3},
    {x: 3, y: 2, expected: 9},
    {x: 3, y: 3, expected: 27},
    {x: 3, y: 4, expected: 81},
    {x: 3, y: 5, expected: 243},
    {x: 3, y: 6, expected: 729},
    {x: 3, y: 7, expected: 2187},
    {x: 3, y: 8, expected: 6561},
    {x: 3, y: 9, expected: 19683},
    {x: 3, y: 10, expected: 59049},
    {x: 3, y: 11, expected: 177147},
    {x: 3, y: 12, expected: 531441},
    {x: 3, y: 13, expected: 1594323},
    {x: 3, y: 14, expected: 4782969},
    {x: 3, y: 30, expected: 205891132094649},
    {x: 3, y: 65, expected: 1.0301051460877538e31},
    {x: 5, y: 100, expected: 7.88860905221012e69},
  ];

  // run a jest test for each test case
  tests.forEach(({x, y, expected}) => {
    it(`should return ${expected} when x = ${x} and y = ${y}`, () => {
      expect(exponentiation(x, y)).toBe(expected);
    });
  });
});
