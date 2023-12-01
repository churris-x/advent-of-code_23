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
    jesus christ almighty, number parsing
    I will try to avoid using regex lol

    this is absolutely cursed
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
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const parseRecoverValue = document => document
    .split('\n')
    .reduce((sum, line) => {
        let parsedLine = line;

        while (fullNumbers.some(number => parsedLine.includes(number))) {
            fullNumbers.forEach((number, index) => {
                parsedLine = parsedLine.replace(number, index + 1);
            });
        }

        console.log(parsedLine);

        const numbers = parsedLine
            .split('')
            .filter(letter => !alphabet.includes(letter));

        const number = +[numbers[0], numbers.slice(-1)].join('')

        if (number) return number + sum;
        return sum;
    }, 0);

console.log('2) eg: ', parseRecoverValue(eg2));
// console.log('2) input: ', parseRecoverValue(input));

/*
Wrong guesses:

Correct:
    1) 56049
    2) 
*/
