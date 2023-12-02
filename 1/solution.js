const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

const numbers = '123456789';

const recoverValue = document => document
    .split('\n')
    .reduce((sum, line) => {
        const parsedNumbers = line
            .split('')
            .filter(letter => numbers.includes(letter));

        const number = +[parsedNumbers[0], parsedNumbers.slice(-1)].join('')

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
        no zeros
*/

const eg2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const matches        = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const reverseMatches = ['eno', 'owt', 'eerht', 'ruof', 'evif', 'xis', 'neves', 'thgie', 'enin'];

const findFirstNumber = (letters, matches) => letters
    .reduce(([line, number], letter) => {
        if (number) return [line, number];
        if (numbers.includes(letter)) return [line, letter];

        const currentLine = line + letter;

        const newNumber = matches.find((item, index) => currentLine.includes(item));
        if (newNumber) return [line, matches.indexOf(newNumber) + 1];

        return [currentLine, number];
    }, ['', ''])[1]

const parseNumbers = document => document
    .split('\n')
    .map(line => +`${
        findFirstNumber(line.split(''), matches)
    }${
        findFirstNumber(line.split('').reverse(), reverseMatches)
    }`)
    .reduce((sum, number) => sum + number, 0);


console.log('2) eg: ', parseNumbers(eg2));
console.log('2) input: ', parseNumbers(input));

/*
Wrong guesses:
    2) 54538 too high

Correct:
    1) 56049
    2) 54530
*/
