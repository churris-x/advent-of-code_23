const sign = number => +number ? number > 0 ? 1 : -1 : +number;
const abs = number => number < 0 ? -1 * number : number;
const getDistance = (head, tail) => [head[0] - tail[0], head[1] - tail[1]];

const movePosition = (move, position) => {
    let [x, y] = position;
    switch (move) {
        case 'U': y++; break;
        case 'R': x++; break;
        case 'D': y--; break;
        case 'L': x--; break;
    }
    return [x, y];
}

const updateKnots = (knots, move) => knots.reduce((rope, knot, index) => {
    const head = rope[index -1];
    if (!head) return [movePosition(move, knot)];

    const [dx, dy] = getDistance(head, knot);

    if (abs(dx) > 1 || abs(dy) > 1) return [
        ...rope,
        [knot[0] + sign(dx), knot[1] + sign(dy)]
    ];
    
    return [...rope, knot];
 }, []);

const getRopeMoves = moves => moves
    .split('\n')
    .map(item => item[0].repeat(item.split(' ')[1]))
    .join('').split('')
    .reduce(([prevKnots, tiles], move) => {
        const prevTail = tiles.slice(-1)[0]
        
        const knots = updateKnots([...prevKnots, prevTail], move);
        
        return [knots.slice(0, -1), [...tiles, knots.slice(-1)[0]]];

    }, [[...Array(9)].map(i => [0,0]), [[0,0]] ])[1]
    .map(item => `${item[0]},${item[1]}`)
    .filter((tile, index, array) => array.indexOf(tile) === index)
    .length
