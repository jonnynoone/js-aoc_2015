const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'UTF-8');

const presents = input.split('\r\n');

let totalPaper = 0;
presents.forEach(present => {
    const dimensions = present.split('x');
    const length = parseInt(dimensions[0]);
    const width = parseInt(dimensions[1]);
    const height = parseInt(dimensions[2]);

    const sides = []
    sides[0] = length * width;
    sides[1] = length * height;
    sides[2] = width * height;

    let smallestSide;
    if (sides[0] <= sides[1] && sides[0] <= sides[2]) {
        smallestSide = sides[0];
    } else if (sides[1] <= sides[0] && sides[1] <= sides[2]) {
        smallestSide = sides[1];
    } else {
        smallestSide = sides[2];
    }

    let surfaceArea = 2 * (sides[0] + sides[1] + sides[2]);
    
    totalPaper += (surfaceArea + smallestSide);
});

console.log(totalPaper);