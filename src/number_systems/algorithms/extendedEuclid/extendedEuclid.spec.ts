import {describe, expect, it} from '@jest/globals';
import extendedEuclid from '.';

describe('Extended Euclid Algorithm', (): void => {
  const tests = [
    {a: 10, b: 5, expected: {gcd: 5, x: 0, y: 1}},
    {a: 5, b: 10, expected: {gcd: 5, x: 1, y: 0}},
    {a: 10, b: 3, expected: {gcd: 1, x: 1, y: -3}},
    {a: 3, b: 10, expected: {gcd: 1, x: -3, y: 1}},
    {a: 0, b: 5, expected: {gcd: 5, x: 0, y: 1}},
    {a: 5, b: 0, expected: {gcd: 5, x: 1, y: 0}},
    {a: 0, b: 0, expected: {gcd: 0, x: 1, y: 0}},
    {a: 1, b: 1, expected: {gcd: 1, x: 0, y: 1}},
    {a: 1, b: 0, expected: {gcd: 1, x: 1, y: 0}},
    {a: 0, b: 1, expected: {gcd: 1, x: 0, y: 1}},
    {a: 65, b: 25, expected: {gcd: 5, x: 2, y: -5}},
    {a: 482, b: 365, expected: {gcd: 1, x: 78, y: -103}},
  ];

  // run a jest test for each test case
  tests.forEach(({a, b, expected}) => {
    it(`should return ${JSON.stringify(expected)} when a = ${a} and b = ${b}`, () => {
      expect(extendedEuclid(a, b)).toEqual(expected);
    });
  });
});
