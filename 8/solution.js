const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    node['L'] = 'BBB';
*/

const stepsToNode = input => {
    const [movement, rawNodes] = input.split('\n\n').map(i => i.split('\n'))

    const steps = movement[0] //.split('');
    const nodes = rawNodes
        .map(i => i.replaceAll(/\(|\)|\,/gi, '').split(' '))
        .reduce((nodes, node) => ({...nodes, [node[0]]: {L: node[2], R: node[3] }}), {})

    const moveNode = (node, step) => nodes[node][step];
    const cache = {};

    // let currentNode = rawNodes[0].slice(0, 3);
    // const lastNode = rawNodes.slice(-1)[0].slice(0, 3)

    // this feels stupid haha
    let currentNode = 'AAA';
    const lastNode = 'ZZZ';

    let index = 0;

    while (currentNode !== lastNode) {
        const currentStep = steps[index % steps.length];

        console.log(currentStep, currentNode, nodes[currentNode][currentStep]);

        currentNode = moveNode(currentNode, currentStep);

        index++;
    }

    return [currentNode, index];
};

console.log('1) eg: ', stepsToNode(eg));
console.log('1) input: ', stepsToNode(input));

// Part 2 ---------------------------------------------------------------------

// const placeholder = () => {};

// console.log('2) eg: ', placeholder(eg));
// console.log('2) input: ', placeholder(input));

/*
Wrong guesses:
    1) 236
Correct:
    1) 12361
    2) 
*/
