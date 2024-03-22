import { normalizePath } from '../../../../utils';
import mod from '..';

/*
The definition of the mod function says that x = im + (x mod m) for some integer i.
Therefore x mod m is equal to x - im. By setting k = -i, the value of (x mod m) can be
expressed as x + km for some integer k. Note that k could be positive, negative or zero.
Similarly, y mod m = y + jm for some integer j.
*/

export enum Operation {
    ADDITION = '+',
    MULTIPLICATION = '*'
}


/**
 * @param x - number (int) - term 1
 * @param y - number (int) - term 2
 * @param z - number (int) - term 3
 * @param m - number (int) - modulus
 * @returns - number (int) - the result of the arithmetic expression
 *
 * @example
 * ```ts
 * // as an es module
 * import {arithmeticExpression} from './lib/number_systems';
 * // as a commonjs module
 * const {arithmeticExpression} = require('./lib/number_systems');
 *
 * // (43^17 + 32^1 + 139^1) mod 7
 * const result = arithmeticExpression({
 *    values: [43, 32, 139],
 *    exponents: [17, 1, 1],
 *    operations: [Operation.ADDITION, Operation.ADDITION],
 *    m: 7
 * });
 *
 * console.log(result); // 4
 * ```
 *
 * ```bash
 *
 * # or as cli
 * node lib/number_systems/algorithms/mod/arithmeticExpression/index.js 43 32 139 17 1 1 + * 7
 *
 * # (43^17 + 32^1 + 139^1) mod 7 = 4
 * ```
 */

export default function arithmeticExpression(props: { // NOSONAR
    values: number[];
    exponents: number[];
    operations: Operation[];
    m: number;
}
) {
    // check the values and make sure they are integers
    const { values, exponents, operations, m } = props;

    if (values.length !== exponents.length) {
        throw new Error('values and exponents must be the same length');
    }

    if (m <= 0) {
        throw new Error('m must be greater than 0');
    }

    // ensure that n and d are integers and not decimals
    if (values.some((value: number) => value % 1 !== 0)) {
        throw new Error('values must be integers');
    }

    if (exponents.some((exponent: number) => exponent % 1 !== 0)) {
        throw new Error('exponents must be integers');
    }

    if (m % 1 !== 0) {
        throw new Error('m must be an integer');
    }

    // calculate the result of the arithmetic expression according to order of operations
    // multiplication is done before addition
    const calMod = (x: number, m: number): number => mod(x, m);

    // calculate the result of the remaining terms

    // check if there are any multiplication operations
    const hasMultiplication = operations
        .some((operation: Operation) => operation === Operation.MULTIPLICATION);

    let result = -1;

    // adjust for the order of operations
    if (hasMultiplication) {
        const multiplicationValues: number[] = [];
        const multiplicationExponents: number[] = [];

        const additionValues: number[] = [];
        const additionExponents: number[] = [];

        for (let i = 0; i < values.length; i++) {
            const value: number = values[i];
            const exponent: number = exponents[i];
            const operation: Operation = operations[i];

            if (operation === Operation.MULTIPLICATION) {
                const nextVal: number | undefined = values[i + 1];
                const nextExp: number | undefined = exponents[i + 1];

                nextVal && nextExp && (() => {
                    multiplicationValues.push(value);
                    multiplicationExponents.push(exponent);
                    multiplicationValues.push(nextVal);
                    multiplicationExponents.push(nextExp);
                })();

                !nextVal && !nextExp && (() => {
                    multiplicationValues.push(value);
                    multiplicationExponents.push(exponent);
                })();
            } else {
                operation !== undefined && (() => {
                    additionValues.push(value);
                    additionExponents.push(exponent);
                })();
            }
        }


        const multiplicationResult: number = multiplicationValues.reduce((acc, value, index) => {
            const exponent = multiplicationExponents[index];
            return acc * Math.pow(calMod(value, m), exponent);
        }, 1);

        const additionResult: number = additionValues.reduce((acc, value, index) => {
            const exponent = additionExponents[index];
            return acc + Math.pow(calMod(value, m), exponent);
        }, 0);

        result = multiplicationResult + additionResult;

    } else {
        // there are no multiplication operations

        // loop through the values and exponents and calculate the result
        result = values.reduce((acc, value, index) => {
            const exponent = exponents[index];
            return acc + Math.pow(calMod(value, m), exponent);
        }, 0);
    }

    return result % m;
}

// provide a cli interface
// node lib/number_systems/algorithms/mod/arithmeticExpression/index.js 43 32 139 17 1 1 + * 7
if (process.argv[1]?.includes(normalizePath('mod/arithmeticExpression/index.ts'))
    || process.argv[1]?.includes(normalizePath('mod/arithmeticExpression/index.js'))) {

    // split the arguments into an array
    const args = process.argv.slice(2);

    // last argument is the modulus
    const m = Number(args.pop());

    const numOfOps = args.filter((arg: string) => arg === '+' || arg === '*').length;
    const numberOfValuesAndExponents = (args.length - numOfOps) / 2;

    const values: number[] = [];
    const exponents: number[] = [];
    const operations: Operation[] = [];

    // look for ops in the args

    const mid = numberOfValuesAndExponents - 1;

    for (let i = 0; i < args.length; i++) {
        // the index range for values will be 0 to
        // numberOfValuesAndExponents - 1

        if (i <= mid) {
            values.push(Number(args[i]));
        } else if (i > mid && i <= ((mid * 2) + 1)) {
            exponents.push(Number(args[i]));
        } else {
            switch (args[i]) {
                case '+':
                    operations.push(Operation.ADDITION);
                    break;
                case '*':
                    operations.push(Operation.MULTIPLICATION);
                    break;
                default:
                    throw new Error('operation not recognized');
            }
        }
    }

    const result = arithmeticExpression({
        values,
        exponents,
        operations,
        m
    });

    const expression = values.map((value, index) => {
        const exponent = exponents[index];
        const operation = operations[index] || '';
        return `${value}^${exponent} ${operation}`;
    }).join(' ');

    console.log(`(${expression.trim()}) mod ${m} = ${result}`);
}
