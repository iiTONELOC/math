import { normalizePath } from '../../../utils';

/**
 * Generates a pseudo-random number using the Linear Congruential Generator
 * algorithm.
 *
 * Creates a generator function that can be used to generate a pseudo-random
 * number.
 *
 * @param {number} seed - The seed value for the generator if not provided zero is used
 * @param {number} a - The multiplier - if not provided 1103515245 is used
 * @param {number} c - The increment - if not provided 12345 is used
 * @param {number} m - The modulus - if not provided 2 ** 31 is used
 *
 * @returns {number} The pseudo-random number
 *
 *
 * @throws Error - if seed is not an integer
 * @throws Error - if a is not an integer
 * @throws Error - if c is not an integer
 * @throws Error - if m is not an integer
 * @throws Error - if m is less than or equal to 0
 *
 * @example
 *
 * ```ts
 * // as an es module
 * import {randomNumberGenerator} from './lib/number_systems';
 * // as a commonjs module
 * const {randomNumberGenerator} = require('./lib/number_systems');
 *
 *
 * const generator = randomNumberGenerator({
 *    seed: 0,
 *    a: 1103515245,
 *    c: 12345,
 *    m: 2 ** 31
 * });
 *
 * const randomNumber = generator.next().value;
 *
 * console.log(randomNumber); // 12345
 * ```
 *
 * @example
 * ```bash
 *
 * # as a cli tool:
 * node lib/number_systems/algorithms/pseudo-random-generator/index.js
 * # 12345
 * ```
 */

export default function randomNumberGenerator(props: {
    seed?: number;
    a?: number;
    c?: number;
    m?: number;
}): {
    next(): { value: number; done: boolean };
} {

    const { seed = 0, a = 1103515245, c = 12345, m = 2 ** 31 } = props;

    // check that seed is an integer
    if (!Number.isInteger(seed)) {
        throw new Error('seed must be an integer');
    }
    // check that a is an integer
    if (!Number.isInteger(a)) {
        throw new Error('a must be an integer');
    }
    // check that c is an integer
    if (!Number.isInteger(c)) {
        throw new Error('c must be an integer');
    }
    // check that m is an integer
    if (!Number.isInteger(m)) {
        throw new Error('m must be an integer');
    }
    // check that m is greater than 0
    if (m <= 0) {
        throw new Error('m must be greater than 0');
    }

    // create the generator function
    function* generator(): Generator<number> {
        let x = seed;
        while (true) {
            x = (a * x + c) % m;
            yield x;
        }
    }

    // return a callable function next that returns the next pseudo-random number
    return {
        next: generator().next.bind(generator())
    };
}

// as a cli tool:

// node lib/number_systems/algorithms/pseudo-random-generator/index.js

if (process?.argv[1]?.includes(normalizePath('pseudo-random-generator/index.ts'))
    || process?.argv[1]?.includes(normalizePath('pseudo-random-generator/index.js'))) {
    const generator = randomNumberGenerator({ seed: 0, a: 11345268, c: 12345, m: 2 ** 31 });

    const n = Math.floor(Math.random() * Math.random() * 1000);

    let val = -1;

    for (let i = 0; i < n; i++) {
        val = generator.next().value;
    }

    console.log(val);
}
