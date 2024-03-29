import {describe, expect, it} from '@jest/globals';
import primeFactorization from '.';

describe('Largest Primes Factorization Algorithm', (): void => {
  it('should throw an error if n is not an integer', () => {
    expect(() => primeFactorization(1.5)).toThrow('n must be an integer');
  });

  it('should throw an error if n is less than 2', () => {
    expect(() => primeFactorization(1)).toThrow('n must be greater than 1');
  });

  it('should return the prime factors of 17', () => {
    const factors = primeFactorization(17);
    expect(factors).toEqual([1, 17]);
  });

  it('should return the prime factors of 15', () => {
    const factors = primeFactorization(15);
    expect(factors).toEqual([3, 5]);
  });

  it('should return the prime factors of 21', () => {
    const factors = primeFactorization(21);
    expect(factors).toEqual([3, 7]);
  });

  it('should return the prime factors of 25', () => {
    const factors = primeFactorization(25);
    expect(factors).toEqual([5, 5]);
  });

  it('should return the prime factors of 35', () => {
    const factors = primeFactorization(35);
    expect(factors).toEqual([5, 7]);
  });

  it('should return the prime factors of 49', () => {
    const factors = primeFactorization(49);
    expect(factors).toEqual([7, 7]);
  });

  it('should return the prime factors of 77', () => {
    const factors = primeFactorization(77);
    expect(factors).toEqual([7, 11]);
  });

  it('should return the prime factors of 51', () => {
    const factors = primeFactorization(51);
    expect(factors).toEqual([3, 17]);
  });

  it('should return the prime factors of 57', () => {
    const factors = primeFactorization(57);
    expect(factors).toEqual([3, 19]);
  });

  it('should return the prime factors of 391', () => {
    const factors = primeFactorization(391);
    expect(factors).toEqual([17, 23]);
  });

  it('should return the prime factors of 65', () => {
    const factors = primeFactorization(65);
    expect(factors).toEqual([5, 13]);
  });

  it('should return the prime factors of 103,881,453,218,209', () => {
    const factors = primeFactorization(103881453218209);
    expect(factors).toEqual([10152463, 10232143]);
  });
});
