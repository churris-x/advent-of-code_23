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
    .map(numbers => numbers
        .split(' ')
        .filter(i => !!i)
    );

const countPoints = (scores, numbers) => numbers
    .reduce((points, number) =>
        scores.includes(number) ? points + 1 : points
    , 0)

const totalCards = [];

const placeholder = lines => lines
    .split('\n')
    .map(card => parseCard(card))
    .reduce((sum, card, index, cards) => {
        const [scores, numbers] = card;

        const points = countPoints(scores, numbers);

        const nextCards = cards.slice(index + 1, points + 1);

        totalCards.push([card, index + 1])
        nextCards.forEach((card, i) => totalCards.push([card, index + 1]))


        if (index === 0){
            console.log(
                // nextCards,
                points,
            );
        }

        return sum + points
    }, 0);


console.log('2) eg: ', placeholder(eg));
console.log(totalCards);
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:

Correct:
    1) 22193
    2) 
*/
