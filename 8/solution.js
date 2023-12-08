const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    I will need to create some memoization here

    const result = {
        'JSON stringified params': result
    }

    node['L'] = 'BBB';

    WHAT THE FUCK DO YOU MEAN IT"S NOT THE FIRST ITEM?
    FOR REAL?

*/


const placeholder = input => {
    const [movement, rawNodes] = input.split('\n\n').map(i => i.split('\n'))

    const steps = movement[0] //.split('');
    const nodes = rawNodes
        .map(i => i.replaceAll(/\(|\)|\,/gi, '').split(' '))
        .reduce((nodes, node) => ({...nodes, [node[0]]: {L: node[2], R: node[3] }}), {})

    // const moveNode = (node, step) => nodes[node]?.[step] ?? node;
    const moveNode = (node, step) => nodes[node][step];
    const cache = {};

    let currentNode = rawNodes[0].slice(0, 3);
    const lastNode = rawNodes.slice(-1)[0].slice(0, 3)

    let index = 0;

    while (currentNode !== lastNode) {
        const currentStep = steps[index % steps.length];

        console.log(currentStep, currentNode, nodes[currentNode][currentStep]);

        currentNode = moveNode(currentNode, currentStep);

        index++;
    }


    return [currentNode, index];
};

console.log('1) eg: ', placeholder(eg));
console.log('1) input: ', placeholder(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:
    1) 236 ????????? WHY ARE YOU SO SHIT
Correct:
    1) 
    2) 
*/
