const fs = require('fs');
const input = fs.readFileSync('./input.txt', 'UTF-8');

const presents = input.split('\r\n');

let totalRibbon = 0;
presents.forEach(present => {
    const dimensions = present.split('x');
    const length = parseInt(dimensions[0]);
    const width = parseInt(dimensions[1]);
    const height = parseInt(dimensions[2]);
    
    let ribbon;
    if (length >= width && length >= height) {
        ribbon = 2 * width + 2 * height;
    } else if (width >= length && width >= height) {
        ribbon = 2 * length + 2 * height;
    } else {
        ribbon = 2 * length + 2 * width;
    }

    let bow = length * width * height;

    totalRibbon += ribbon + bow;
});

console.log(totalRibbon);