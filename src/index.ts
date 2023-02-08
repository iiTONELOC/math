import {
    modularAddition as add, mod, hash, modularDivision as divide,
    modularMultiplication as multiply, congruence,
    pseudoRandom, arithmeticExpression, Operation
} from './number_systems';

const a = 10;
const b = 3;
const c = 5;
const d = 7;
const e = 11;

const addModulus = 5;
const hashTableSize = 5;
const multiplicationModulus = 9;

const _add: Operation = Operation.ADDITION;
const _multiply: Operation = Operation.MULTIPLICATION;


const r1: number = add(a, b, addModulus);
const r2: number = mod(a, b);
const r3: number = hash(a, b, hashTableSize);
const r4: number[] = divide(a, b);
const r5: number = multiply(a, b, multiplicationModulus);
const r6: boolean = congruence(a, b, c);

const r7: { value: number, done: boolean } = pseudoRandom(
    { seed: 120, a: 5, c: 3, m: 7 }).next();

const r8 = arithmeticExpression({
    values: [a, b, c, d, e],
    exponents: [2, 18, 48, 10, 1],
    operations: [
        _multiply,
        _add,
        _add,
        _add
    ],
    m: 5
});

console.log({ r1, r2, r3, r4, r5, r6, r7: r7.value, r8 });

/* Expected output:
    {
        r1: 3,
        r2: 1,
        r3: 0,
        r4: [ 3, 1 ],
        r5: 3,
        r6: false,
        r7: { value: 1, done: false },
        r8: 3
    }
*/




