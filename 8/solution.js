const fs = require('fs');
const eg = fs.readFileSync(require.resolve('./eg.txt')).toString().slice(0, -1);
const input = fs.readFileSync(require.resolve('./input.txt')).toString().slice(0, -1);

// Part 1 ---------------------------------------------------------------------
/*
    node['L'] = 'BBB';

    Starting node is always AAA, not the first node in the list
*/

const stepsToNode = input => {
    const [movement, rawNodes] = input.split('\n\n').map(i => i.split('\n'));

    const steps = movement[0];
    const nodes = rawNodes
        .map(i => i.replaceAll(/\(|\)|\,/gi, '').split(' '))
        .reduce((nodes, node) => ({...nodes, [node[0]]: {L: node[2], R: node[3] }}), {});

    const moveNode = (node, step) => nodes[node][step];

    let currentNode = 'AAA';
    const lastNode = 'ZZZ';

    let index = 0;

    while (currentNode !== lastNode) {
        const currentStep = steps[index % steps.length];

        currentNode = moveNode(currentNode, currentStep);

        index++;
    }

    return [currentNode, index];
};

console.log('1) eg: ', stepsToNode(eg));
console.log('1) input: ', stepsToNode(input));

// Part 2 ---------------------------------------------------------------------
/*
    Took a while to figure out the lowest common multiple

    gcd => if the modulus is 0, then you have the right number

    keep comparing the lcm, until go through all
*/

const placeholder = input => {
    const [movement, rawNodes] = input.split('\n\n').map(i => i.split('\n'));

    const steps = movement[0];
    const nodes = rawNodes
        .map(i => i.replaceAll(/\(|\)|\,/gi, '').split(' '))
        .reduce((nodes, node) => ({...nodes, [node[0]]: {L: node[2], R: node[3] }}), {});

    const findSteps = (startNode) => {
        const moveNode = (node, step) => nodes[node][step];

        let currentNode = startNode;

        let index = 0;

        while (currentNode[2] !== 'Z') {
            const currentStep = steps[index % steps.length];

            currentNode = moveNode(currentNode, currentStep);

            index++;
        }

        return [startNode, currentNode, index];
    };

    // https://en.wikipedia.org/wiki/Least_common_multiple
    // lcm(a, b) = a / gcd(a, b) * b

    const gcd = (a, b) => b == 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => a / gcd(a, b) * b;

    const nodeSteps = Object.keys(nodes)
        .reduce((array, node) => node[2] === 'A' ? [...array, findSteps(node)] : array, [])
        .reduce((multiple, node) => lcm(multiple, node[2]), 1);

    return nodeSteps;
};

console.log('2) eg: ', placeholder(eg));
console.log('2) input: ', placeholder(input));

/*
Wrong guesses:
    1) 236
Correct:
    1) 12361
    2) 18215611419223
*/
