import { normalizePath } from '../../utils';

/**
 * fix an integer b >1
 *
 * Every positive integer n can be expressed uniquely as
 *
 * n = aK *bk + aK-1 *bk-1 + ... + a1 *b1 + a0 *b0
 *
 * @param props - the properties of the function
 * @param props.n - the number to convert
 * @param props.b - the base to convert to
 * @returns number - the result of the conversion
 * @example
 *
 * ```ts
 * import {baseBExpansionOfN} from './lib/number_representation';
 * or
 * const {baseBExpansionOfN} = require('./lib/number_representation');
 *
 * const result = baseBExpansionOfN({n: 410, b: 5});
 *
 * console.log(result); // 105
 * ```
 *
 * @example
 *
 * ```bash
 * # cli usage
 * node ./lib/number_representation/base_b_expansion_n/index.js 410 5
 * # 410 base 5 = 105
 * ```
 */

export default function baseBExpansionOfNDec(props: { // NOSONAR
    n: number;
    b: number;
}
): number {
    // check the values and make sure they are integers
    const { n, b } = props;

    if (n < 0) {
        throw new Error('n must be greater than or equal to 0');
    }

    if (b <= 1) {
        throw new Error('b must be greater than 1');
    }

    // ensure that n and d are integers and not decimals
    if (n % 1 !== 0) {
        throw new Error('n must be an integer');
    }

    if (b % 1 !== 0) {
        throw new Error('b must be an integer');
    }

    const base: number = b;
    const number: number = n;
    const digits: number[] = parseFloat(number.toString())
        .toString()
        .split('')
        .map((digit: string) => Number(digit));

    const results: number[] = [];

    for (const number in digits) { // NOSONAR
        const currentExp: number = ((digits.length - 1) - parseInt(number, 10));
        const result: number = digits[number] * (base ** currentExp);

        results.push(result);
    }
    return results.reduce((a, b) => a + b, 0);
}

// cli usage
//  node ./lib/number_representation/base_b_expansion_n/index.js 410 5
if (process.argv[1]?.includes(normalizePath('base_b_expansion_n_dec/index.ts'))
    || process.argv[1]?.includes(normalizePath('base_b_expansion_n_dec/index.js'))) {
    const n = Number(process.argv[2]);
    const b = Number(process.argv[3]);
    const result = baseBExpansionOfNDec({ n, b });

    console.log(`${n} base ${b} = ${result}`);
}
