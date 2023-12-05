const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------

const parseCard = card => card
    .split(':')[1]
    .split('|')
    .map((numbers, index) =>
        numbers
            .split(' ')
            .filter(i => !!i)
    )

const getPoints = cards => cards
    .split('\n')
    .map(card => parseCard(card))
    .reduce((sum, card) => {
        const [scores, numbers] = card;


        const points = numbers.reduce((points, number) => {
            if (scores.includes(number)) {
                if (points) return points * 2;
                return 1;
            }

            return points
        }, 0)

        return sum + points
    }, 0);

console.log('1) eg: ', getPoints(eg));
console.log('1) input: ', getPoints(input));

// Part 2 ---------------------------------------------------------------------
/*
    +/- 2 hours :'-(
    Optimization skills: abysmal
*/

const countPoints = (scores, numbers) => numbers
    .reduce((points, number) =>
        scores.includes(number) ? points + 1 : points
    , 0);

const countCards = input => {
    const cardPoints = input
        .split('\n')
        .map((card, i) => parseCard(card))
        .map(([scores, numbers], index) => [index, countPoints(scores, numbers)])

    const cards = [...cardPoints];

    let total = 0;

    while (cards.length > 0) {

        total++;

        if (total % 100000 === 0) console.log(`${total * 100/5000000} %`);

        const [index, points] = cards.shift();

        if (!points) continue;

        cards.push(...cardPoints.slice(index + 1, index + 1 + points))

    }

    return total;
};

console.log('2) eg: ', countCards(eg));
console.log('2) input: ', countCards(input));

/*
Wrong guesses:
    2) 108929 too low
    2) 339658 too low

Correct:
    1) 22193
    2) 5625994
*/
