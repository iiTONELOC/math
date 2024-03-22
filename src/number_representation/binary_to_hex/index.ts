import { normalizePath } from '../../utils';

export const binaryToHexMap = {
    '0000': '0',
    '0001': '1',
    '0010': '2',
    '0011': '3',
    '0100': '4',
    '0101': '5',
    '0110': '6',
    '0111': '7',
    '1000': '8',
    '1001': '9',
    '1010': 'A',
    '1011': 'B',
    '1100': 'C',
    '1101': 'D',
    '1110': 'E',
    '1111': 'F'
};

/**
 * Convert a binary number to a hex number
 * @param binary - string representation of a binary number
 * @returns string representation of a hex number
 * 
 * @example
 * ```ts
 * // es module
 * import {binaryToHex} from './lib/number_representation';
 * // common js
 * const {binaryToHex} = require('./lib/number_representation');
 *
 * const result = binaryToHex('1010');
 *
 * console.log(result); // A
 * ```
 *
 * @example
 * ```bash
 * # cli usage
 * node ./lib/number_representation/binary_to_hex/index.js 1010
 * # 1010 in hex is A
 * ```
 *
 */
export default function binaryToHex(binary: string): string {
    // Convert binary to hex

    // need to split the binary into groups of 4
    // then convert each group to hex
    // then join the hex groups together

    const binaryGroups = binary.split('').join('').match(/.{1,4}/g) ?? [];

    // map each group and add the padding 0s to the front if each group is not 4 digits long
    const padded = binaryGroups.map(group => {
        if (group.length < 4) {
            const padding = '0'.repeat(4 - group.length);
            return padding + group;
        } else {
            return group;
        }
    });

    // convert each group to hex
    return padded.map(group => binaryToHexMap[group]).join('');
}

// cli
// node lib/number_representation/binary_to_hex/index.js 1010
if (process.argv[1]?.includes(normalizePath('binary_to_hex/index.ts'))
    || process.argv[1]?.includes(normalizePath('binary_to_hex/index.js'))) {
    const input = process.argv[2];
    const result = binaryToHex(input);

    console.log(`${input} in hex is ${result}`);
}
