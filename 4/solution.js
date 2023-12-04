const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

const placeholder = cards => cards
    .split('\n')
    .map(card => card
        .split(':')[1]
        .split('|')
        .map(numbers => numbers
            .split(' ')
            .filter(i => !!i)
        )
    )
    .reduce((sum, card) => {
        const [scores, numbers] = card;


        const points = numbers.reduce((points, number) => {
            if (scores.includes(number)) {
                if (points) return points * 2;
                return 1;
            }

            // scores.includes(number) ? points ? 1 : points * 2 : points

            return points
        }, 0)

        console.log(scores, points);

        return sum + points
    }, 0);

console.log('1) eg: ', placeholder(eg));
console.log('1) input: ', placeholder(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:

Correct:
    1) 22193
    2) 
*/
