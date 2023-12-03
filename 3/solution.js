const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

const alphabet = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789'
const symbols = '!@£$%^&*()_+/=-'

const placeholder = input => input
        .split('\n')
        .reduce(([sum, number], line, index, array) => {

            const prevLine = array[index - 1];
            const nextLine = array[index + 1];


            let currentLine = line;

            const lineNumbers = line
                .split('.')
                .reduce((sum, i) => i ? [...sum, i] : sum, [])

            // const isPart = lineNumbers
                // .map(yarg => yarg
            const isPart = line
                .split('')
                .reduce((isPart, char, i, chars) => {

//                     console.log(offset);
//
//                     const i = currI + offset;

                    if (isPart) return isPart;
                    if (!numbers.includes(char)) return isPart;

                    if (prevLine) {
                        if (
                        symbols.includes(prevLine[i - 1]) ||
                        symbols.includes(prevLine[i]) ||
                        symbols.includes(prevLine[i + 1])
                        ) return true;
                    }

                    if (nextLine) {
                        if (
                        symbols.includes(nextLine[i - 1]) ||
                        symbols.includes(nextLine[i]) ||
                        symbols.includes(nextLine[i + 1])
                        ) return true;
                    }

                    const prevChar = chars[i - 1];
                    const nextChar = chars[i + 1];

                    if (prevChar && symbols.includes(prevChar)) return true
                    if (nextChar && symbols.includes(nextChar)) return true

                    return false

                }, false)
            // );


            console.log(lineNumbers, isPart);

            return [sum, number];

        }, [0, []])


console.log('1) eg: ', placeholder(eg));
// console.log('1) input: ', placeholder(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:

Correct:
    1) 
    2) 
*/
