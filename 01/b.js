const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'UTF-8');

let floor = 0;
let position;

for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
        floor++;
    } else if (input[i] === ')') {
        floor--;
    }

    if (floor === -1) {
        position = i + 1;
        break;
    }
}

console.log(position);