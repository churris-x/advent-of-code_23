const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

const colors = {
    red: 12,
    green: 13,
    blue: 14
};

const addPossibleGames = games => games
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

        // returns the Game ID + sum
        return +game[0].split(' ')[1] + sum;
    }, 0)

console.log('1) eg: ', addPossibleGames(eg));
console.log('1) input: ', addPossibleGames(input));

// Part 2 ---------------------------------------------------------------------

const findPossibleCubes = games => games
    .split('\n')
    .map(game => game
        .split(',')
        .flatMap(i => i.split(';'))
        .flatMap(i => i.split(':'))
    )
    .reduce((sum, game) => {

        const power = game
            .slice(1)
            .reduce((colors, cubes, index, array) => {
                const [_, number, color] = cubes.split(' ');

                if (+number > colors[color]) colors[color] = +number;

                const {red, green, blue} = colors;
                if (index === array.length -1) return red * green * blue;

                return colors;
            }, {red: 1, green: 1, blue: 1})

            return sum + power;
    }, 0)

console.log('2) eg: ', findPossibleCubes(eg));
console.log('2) input: ', findPossibleCubes(input));

/*
Wrong guesses:

Correct:
    1) 2369
    2) 66363
*/
