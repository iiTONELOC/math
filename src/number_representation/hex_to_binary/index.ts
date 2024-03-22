import { normalizePath } from '../../utils';

export const hexMap /*: { [key: string]: number[] } */ = {
    '0': [0, '0000'],
    '1': [1, '0001'],
    '2': [2, '0010'],
    '3': [3, '0011'],
    '4': [4, '0100'],
    '5': [5, '0101'],
    '6': [6, '0110'],
    '7': [7, '0111'],
    '8': [8, '1000'],
    '9': [9, '1001'],
    'A': [10, '1010'],
    'B': [11, '1011'],
    'C': [12, '1100'],
    'D': [13, '1101'],
    'E': [14, '1110'],
    'F': [15, '1111']
};

/**
 * Converts a hex number to a binary number
 * @param input - string representation of a hex number
 * @returns string representation of a binary number
 *
 * @example
 *
 * ```ts
 * import {hexToBinary} from './lib/number_representation';
 * or
 * const {hexToBinary} = require('./lib/number_representation');
 *
 * const result = hexToBinary('5D');
 *
 * console.log(result); // 00101111
 * ```
 *
 * @example
 * ```bash
 * # cli usage
 *  node ./lib/number_representation/hex_to_binary/index.js 5D
 * # 5D in binary is = 00101111
 * ```
 */
export default function hexToBinary(input: string): string {
    // check the values and make sure they are integers
    if (input.length === 0) {
        throw new Error('input must not be empty');
    }

    // ensure that n and d are integers and not decimals
    if (input.split('').some((digit: string) => !hexMap[digit])) {
        throw new Error('input must be a valid hex number');
    }

    // convert the hex number to a binary number
    const binaryDigits: number[] = input
        .split('')
        .map((digit: string) => hexMap[digit][1])
        .join('')
        .split('')
        .map((digit: string) => Number(digit));

    // convert the binary digits to a binary number
    const binaryNumber: string = binaryDigits.join('');

    return binaryNumber;
}

// cli usage

if (process.argv[1]?.includes(normalizePath('hex_to_binary/index.ts'))
    || process.argv[1]?.includes(normalizePath('hex_to_binary/index.js'))) {
    const input = process.argv[2];
    const result = hexToBinary(input);

    console.log(`${input} in binary is ${result}`);
}
