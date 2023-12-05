const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
the difference between the range starts is helpful


n  + ( e -  s)
5  + (13 -  4) = 14
14 + ( 4 - 13) = 5

s  e r
4 13 5
-------
0  1  2  3  4  5  6  7  8  9 10 11 12 13
0  1  2  3 13 14 15 16 17 18 10 11 12 13

13 4 5
------
0 .. 11 12 13 14 15 16 17 18 19 20
0 .. 11 12  4  5  6  7  8 18 19 20

*/


const translate = (seed, [start, end, range]) => {
    if (seed >= start && seed <= start + range) return seed + end - start;

    return seed;
}

const placeholder = file => {
    const seeds = file
        .split('\n\n')[0]
        .split(' ')
        .slice(1)
        .map(i => +i);

    const maps = file
        .split('\n\n')
        .slice(1)
        .map(i => i
            .split('\n')
            .slice(1)
            .map(i => i.split(' ').map(i => +i))
        );

    const results = seeds.map(seed => {

        const location = maps.reduce((value, filters, index) => {

            console.log(index, value, filter);

            return translate(value, filter);

        }, seed);


        return location;

    })

    return results;
};

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
