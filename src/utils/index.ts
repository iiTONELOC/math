import * as path from 'path';

/**
 * Normalizes the path separator to be operating system specific
 * @param _path a path-like string to normalize
 * @returns string - the normalized path
 * @example
 * ```ts
 * // es module
 * import {normalizePath} from './lib/utils';
 * // common js
 * const {normalizePath} = require('./lib/utils');
 *
 *
 * const normalizedPath = normalizePath('path/to/file');
 *
 * console.log(normalizedPath);
 * // path\\to\\file - on windows
 * // path/to/file - on linux, unix, or mac
 * ```
 */
export function normalizePath(_path: string): string {
    return _path ? path.normalize(_path) : '';
}

const defaultExports = {
    normalizePath
};

export default defaultExports;
