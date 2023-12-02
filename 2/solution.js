const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    created array of arrays ['Game 4', numbers...]
*/

const colors = {
    red: 12,
    green: 13,
    blue: 14
};

const placeholder = games => games
    .split('\n')
    .map(game => game
        .split(',')
        .flatMap(i => i.split(';'))
        .flatMap(i => i.split(':'))
    )
    .reduce((sum, game) => {

        const isPossible = game
            .slice(1)
            .reduce((isGamePossible, cubes) => {
                const [_, number, color] = cubes.split(' ')

                if (!isGamePossible) return false;

                return +number <= colors[color];
            }, true);


        if (!isPossible) return sum;

        // returns the Game ID sum
        return +game[0].split(' ')[1] + sum;
    }, 0)

console.log('1) eg: ', placeholder(eg));
console.log('1) input: ', placeholder(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:

Correct:
    1) 2369
    2) 
*/
