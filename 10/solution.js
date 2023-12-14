const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    Change all letters to box drawing chars

    const [N, E, S, W] = [0, 1, 2, 4]

    NESW

    ╵    NORTH => N---
    ╶    EAST  => -E--
    ╷    SOUTH => --S-
    ╴    WEST  => ---W

    ─    EAST WEST   => -E-W
    │    NORTH SOUTH => N-S-
    ┌    EAST SOUTH  => -ES-
    ┐    SOUTH WEST  => --SW
    └    NORTH EAST  => NE--
    ┘    WEST NORTH  => N--W

    ├
    ┤
    ┬
    ┴

    ┼
*/

const [eg0, eg1] = eg.split('\n\n');

const inputSymbols = {'|': 0, '-': 0, 'L': 0, 'J': 0, 7: 0, 'F': 0};

const placeholder = input => input
    .replaceAll('.', '·')
    .replaceAll('|', '│')
    .replaceAll('-', '─')
    .replaceAll('L', '└')
    .replaceAll('J', '┘')
    .replaceAll('7', '┐')
    .replaceAll('F', '┌')  // ahhh much better

console.log('1) eg0: ');
console.log(placeholder(eg0));
console.log('\n');
console.log('1) eg1: ');
console.log(placeholder(eg1));

// console.log('\n');
// console.log('1) input: ');
// console.log(placeholder(input));

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
