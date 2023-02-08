
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// get input from the command line

const userInput = process.argv[2];

// if user input is a string
if (isNaN(parseInt(userInput, 10))) {
    // convert each letter to its corresponding number + 1
    // and return the resulting string of numbers

    const result = userInput.trim().split('').map((letter) => {
        const index = letters.indexOf(letter);
        // if the number is below 9 we need to add a 0 in front
        // to make it a two digit number
        if (index < 9) {
            return `0${index + 1}`;
        } else {
            return index + 1;
        }
    }).join('');


    console.log({ result: parseFloat(result) });
} else {
    // add a zero to the front of the number if we have an odd number of digits
    const number = userInput.length % 2 === 0 ? userInput : `0${userInput}`;

    // split the number into an array of two digit numbers
    const numberArray = number.match(/.{1,2}/g);

    // for each number in the array, convert it to its corresponding letter
    // and return the resulting string of letters
    const result = numberArray.map((number: string) => letters[parseInt(number, 10) - 1]).join('');

    console.log({ result });
}
