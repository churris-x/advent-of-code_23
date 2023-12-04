const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

const getPoints = cards => cards
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

        // console.log(scores, points);

        return sum + points
    }, 0);

console.log('1) eg: ', getPoints(eg));
console.log('1) input: ', getPoints(input));

// Part 2 ---------------------------------------------------------------------
/*
    Recursion!

    ok I think a lot of refactoring will be needed
*/

// returns [scores, numbers];
const parseCard = card => card
    .split(':')[1]
    .split('|')
    .map((numbers, index) =>
        numbers
            .split(' ')
            .filter(i => !!i)
    )

const countPoints = (scores, numbers) => numbers
    .reduce((points, number) =>
        scores.includes(number) ? points + 1 : points
    , 0);

const countCards = input => {
    const cardPoints = input
        .split('\n')
        .map((card, i) => parseCard(card))
        .map(([scores, numbers]) => countPoints(scores, numbers))


    const cards = cardPoints.map((points, index) => ([ index, points]));


    while (cards.length) {

    }

    const totalCards = [];



cards.forEach(i => console.log(i))
    // return cards;


};

console.log('2) eg: ', countCards(eg));
console.log('2) input: ', countCards(input));

/*
Wrong guesses:
    2) 108929 too low

Correct:
    1) 22193
    2) 
*/
