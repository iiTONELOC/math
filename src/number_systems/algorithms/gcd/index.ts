/**
 * Calculate the greatest common divisor of two numbers using the Euclidean algorithm
 * 
 * @param a - number (int) - the first number
 * @param b - number (int) - the second number
 * @returns number - the greatest common divisor
 * @throws Error - if a or b are not integers
 */

export default function gcd(a: number, b: number): number {
  if (!Number.isInteger(a) || !Number.isInteger(b)) {
    throw new Error("Both numbers must be integers");
  }

  // ensure that a and b are positive, if they are negative, convert them to positive
  a = Math.abs(a);
  b = Math.abs(b);

  if (b === 0) {
    return a;
  }

  return gcd(b, a % b);
}


//provide a cli interface for the gcd function
// node lib/number_systems/algorithms/gcd/index.js 10 5
// 5

if(process?.argv[1].includes('gcd/index.js')||
  process?.argv[1].includes('gcd/index.ts')) {
    try {
        const [a, b] = process.argv
          .slice(2)
          .map((n: string) => parseInt(n, 10));
        console.log(gcd(a, b));
    } catch (error) {
        console.error(error.message);
    }
}