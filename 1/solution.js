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

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:

Correct:
    1) 56049
    2) 
*/
