const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    Change all letters to box drawing chars

    ╴    WEST
    ╵    NORTH
    ╶    EAST
    ╷    SOUTH

    ─    EAST WEST
    │    NORTH SOUTH
    ┌    EAST SOUTH
    ┐    SOUTH WEST
    └    NORTH EAST
    ┘    WEST NORTH

    ├
    ┤
    ┬
    ┴

    ┼
*/

const inputSymbols = {'|': 0, '-': 0, 'L': 0, 'J': 0, 7: 0, 'F': 0};

const placeholder = input => input;

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
