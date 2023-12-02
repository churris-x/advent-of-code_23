const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const recoverValue = document => document
    .split('\n')
    .reduce((sum, line) => {
        const numbers = line
            .split('')
            .filter(letter => !alphabet.includes(letter));

        const number = +[numbers[0], numbers.slice(-1)].join('')

        if (number) return number + sum;
        return sum;
    }, 0);

console.log('1) eg: ', recoverValue(eg));
console.log('1) input: ', recoverValue(input));

// Part 2 ---------------------------------------------------------------------
/*
    Hidden rules:
        xxxx3xxxx = 33
        eightwo = 82
*/

const fullNumbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
];

const eg2 = `two1nine
eight
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const parseRecoverValue = document => document
    .split('\n')
    .reduce((sum, line) => {
        const numbers = line
            .split('')
            .reduce((sum, letter) => {

                let currentLine = sum + letter;

                // if there are numbers in the line, parse them
                if (fullNumbers.some(number => currentLine.includes(number))) {
                    fullNumbers.forEach((number, index) => {
                        currentLine = currentLine
                            // trick to allow for intersecting number to be parsed
                            .replace(number, `${number[0]}${index + 1}${number.slice(-1)}`);
                    });
                }

                return currentLine;
            }, '')
            .split('')
            .filter(letter => !alphabet.includes(letter));

        const number = +[numbers[0], numbers.slice(-1)].join('')

        if (number) return number + sum;
        return sum;
    }, 0);

console.log('2) eg: ', parseRecoverValue(eg2));
console.log('2) input: ', parseRecoverValue(input));

/*
Wrong guesses:
    2) 54538 too high

Correct:
    1) 56049
    2) 54530
*/
