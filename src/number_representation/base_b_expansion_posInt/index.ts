import { normalizePath } from '../../utils';

/**
 * Input: Integers n and b. b > 1 and n ≥ 1.
Output: Base b expansion of n. Base b digits are output in reverse order.

x := n
while ( x > 0 )
      Output( x mod b )
      x := x div b
End-while
 */

/**
 * Calculates the base b expansion of a positive integer n
 * @param n - number (int) - The number to be expanded
 * @param b - number (int) - The base to expand the number to
 *
 *
 * @returns number (int) - The base b expansion of n
 *
 * @example
 *
 * ```ts
 *  // es module
 * import baseBExpansion from './lib/number_representation/base_b_expansion_posInt';
 * // common js
 * const baseBExpansion = require('./lib/number_representation/base_b_expansion_posInt');
 *
 * const result = baseBExpansion({n: 410, b: 5});
 *
 * console.log(result); // 3120
 * ```
 *
 * @example
 *
 * ```bash
 * # cli usage
 * node ./lib/number_representation/base_b_expansion_posInt/index.js 410 5
 * # 410 base 5 = 3120
 * ```
 */

export default function baseBExpansion({ n, b }: { n: number; b: number }): number {
    let x = n;
    let output = 0;
    let i = 0;

    while (x > 0) {
        output += (x % b) * Math.pow(10, i);
        x = Math.floor(x / b);
        i++;
    }

    return output;
}

// cli usage
if (process.argv[1]?.includes(normalizePath('base_b_expansion_posInt/index.ts'))
    || process.argv[1]?.includes(normalizePath('base_b_expansion_posInt/index.js'))) {
    const n = Number(process.argv[2]);
    const b = Number(process.argv[3]);
    const result = baseBExpansion({ n, b });

    console.log(`${n} base ${b} = ${result}`);
}

