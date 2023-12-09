const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    calculate the distance

*/

const getWinnings = input => {
    const [times, distances] = input
        .split('\n')
        .map(i => i
            .split(' ')
            .reduce((array, item) => item ? [...array, item] : array , [])
        );

    const races = times.map((item, index) => [item, distances[index]]);


    const waysToWin = races.reduce((sum, race) => {

        const [time, distance] =;

        while ()

        return sum;
    }, 0);

    console.log(races, waysToWin);

    return waysToWin;

}

console.log('1) eg: ', getWinnings(eg));
// console.log('1) input: ', placeholder(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:
    wrongly inputed these from another puzzle, you are an idiot
    1) 1757008022 too high
    2) 1757008019 too high

Correct:
    1) 
    2) 
*/
