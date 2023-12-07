const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    if type === type, check first card, then seconds, etc

    const types = [
        'abxyz',      // High card
        'AAxyz',      // One pair
        'AABBx',      // Two pair
        'AAAxy',      // Three of a kind
        'AAABB',      // Full house
        'AAAAx',      // Four of a kind
        'AAAAA',      // Five of a kind
    ];

    rank compared to other hands

    win amount = bid * rank

    Ohhh this is not as easy as I thought.... will have to re-iterate

             str    int  int   int
    hand  = [cards, bid, type, rank]

    three of a kind:
        AAAxy    {A: 3, x: 1, y: 1}
        xAAAy
        xyAAA

*/

const cards = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

const parseCard = card => Number.parseInt(`0x${card.split('').map(i => cards.indexOf(i).toString(16)).join('')}`);

const getWinnings = bets => bets
    .split('\n')
    .map(bet => {
        const [cards, bid] = bet.split(' ');

        const types = Object.entries(cards.split('').reduce((dictionary, card) => ({
            ...dictionary,
            [card]: (dictionary[card] ?? 0) + 1}
        ), {}));

        if (types.length === 5) return [cards, bid, 0];                     // high card

        if (types.length === 1) return [cards, bid, 6];                     // five of a kind

        if (types.find(([card, sum]) => sum === 4)) return [cards, bid, 5]; // four of a kind

        if (types.length <= 2) return [cards, bid, 4];                      // full house

        if (types.find(([card, sum]) => sum === 3)) return [cards, bid, 3]; // three of a kind

        if (types.length <= 3) return [cards, bid, 2];                      // two pair

        return [cards, bid, 1];                                             // one pair

    })
    .sort((a, b) => {
        if (a[2] - b[2] !== 0) return a[2] - b[2];  // sort by highest type

        return parseCard(a[0]) - parseCard(b[0]); //  sort by best cards
    })
    .reduce((sum, [hand, bid, type], rank) => {
        return sum + (bid * (rank + 1));
    }, 0)

console.log('1) eg: ', getWinnings(eg));
console.log('1) input: ', getWinnings(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:
    1) 249530956 too low
    1) 251469544 too low

Correct:
    1) 251545216
    2) 
*/
