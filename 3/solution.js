const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

const alphabet = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789'
const symbols = '!@£$%^&*()_+/=-#'

const placeholder = input => input
        .split('\n')
        .reduce((sum, line, index, array) => {

            const prevLine = array[index - 1];
            const nextLine = array[index + 1];


            let currentLine = line;

            const lineNumbers = line
                .split('.')
                .flatMap(i => i.split('!'))
                .flatMap(i => i.split('@'))
                .flatMap(i => i.split('£'))
                .flatMap(i => i.split('$'))
                .flatMap(i => i.split('%'))
                .flatMap(i => i.split('^'))
                .flatMap(i => i.split('&'))
                .flatMap(i => i.split('*'))
                .flatMap(i => i.split('('))
                .flatMap(i => i.split(')'))
                .flatMap(i => i.split('_'))
                .flatMap(i => i.split('+'))
                .flatMap(i => i.split('/'))
                .flatMap(i => i.split('='))
                .flatMap(i => i.split('-'))
                .flatMap(i => i.split('#'))
                .reduce((sum, number) => {
                    if (!number || !+number) return sum;

                    const i = currentLine.search(number)
                    const prev = currentLine.substring(0, i)
                    const next = currentLine.substring(i + number.length, line.length)

                    // console.log();
                    // console.log(currentLine);

                    currentLine = `${prev}${'.'.repeat(number.length)}${next}`

                    // console.log(currentLine, '\n');


                    const preffix = '.'.repeat(prev.length)
                    const suffix = '.'.repeat(next.length)

                    return [...sum, `${preffix}${number}${suffix}`];
                }, [])

            const validNumbers = lineNumbers.map(number => ([
                +number.split('.').reduce((sum, i) => i ? [...sum, i] : sum, []),
                number
                .split('')
                .reduce((isPart, char, i) => {
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

                    const chars = line.split('')

                    const prevChar = chars[i - 1];
                    const nextChar = chars[i + 1];

                    if (prevChar && symbols.includes(prevChar)) return true
                    if (nextChar && symbols.includes(nextChar)) return true

                    return false

                }, false)
            ]));

            const lineSum = validNumbers.reduce((sum, [number, isValid]) => isValid ? sum + number : sum , 0)

            // console.log(validNumbers, lineSum, sum);

            return sum + lineSum;

        }, 0)


console.log('1) eg: ', placeholder(eg));
console.log('1) input: ', placeholder(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:
    1) 437637 too low
    1) 4402283 too high

Correct:
    1) 512794
    2) 
*/
