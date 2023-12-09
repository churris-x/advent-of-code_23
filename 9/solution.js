const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    negative numbers as well! should the amount be positive?

    bruh
    14 13 12 11 10 9 8 7 6 5 4 3 2 1 0 -1 -2 -3 -4 -5 -6
*/

// recursive could be more efficient, will brute force it for now
// const getDiff = (array, prev, next) => next - prev === 0 ? next : getDiff(prev)

const getDiff = array => array.reduce((diffArray, item, index) =>
        +array[index + 1] ?
            // [...diffArray, Math.abs(Math.abs(array[index + 1]) - Math.abs(item))]
            // [...diffArray, Math.abs(array[index + 1]) - Math.abs(item)]
            [...diffArray, array[index + 1] - item]
        : diffArray
    , [])

const sumNextNumber = input => input
    .split('\n')
    .map(i => i.split(' ').map(i => +i))
    .reduce((sum, sequence) => {

        const steps = [sequence, getDiff(sequence)]

        while (steps[steps.length - 1].slice(-1)[0] !== 0) {
            steps.push(getDiff(steps[steps.length - 1]));

            console.log('stuck?', steps.map( i => i.join('  ')));
        }

        const nextNumber = steps.reduce((sum, numbers) => sum + numbers[numbers.length - 1], 0);

        console.log(steps, nextNumber);

        return sum + nextNumber
    }, 0)


console.log('1) eg: ', sumNextNumber(eg));
// console.log('1) input: ', sumNextNumber(input));

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
