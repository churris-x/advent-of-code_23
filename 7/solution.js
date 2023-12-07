const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    if type === type, check first card, then seconds, etc

    rank compared to other hands

    win amount = bid * rank

    Ohhh this is not as easy as I thought.... will have to re-iterate

             str    int  int   int
    hand  = [cards, bid, type, rank]
*/

const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];
const types = [
    'abxyz',      // High card
    'AAxyz',      // One pair
    'AABBx',      // Two pair
    'AAAxy',      // Three of a kind
    'AAABB',      // Full house
    'AAxAA',      // Four of a kind
    'AAAAA',      // Five of a kind
];

const getWinnings = bets => bets
    .split('\n')
    .map(i => {
        return i.split(' ')
    })  // calc type
    .sort((a, b) => {
        if (b[2] - a[2] !== 0) return b[2] - a[2];  // sort by highest type

        // order same type cards somehow
        return b[2] - a[2]
    })
    .reduce((sum, [hand, bid, type], rank) => {
        // calc winnings
    }, 0)

console.log('1) eg: ', getWinnings(eg));
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
