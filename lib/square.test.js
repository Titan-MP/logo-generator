const { Square } = require('./shape');

const text = 'GPM';
const color = 'white';
const shapeColor = 'black';

const logo = new Square(text, color, shapeColor);

let output = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="100" height="100" style="fill:${logo.shapeColor};stroke-width:3;stroke:${logo.color}" />
                    <text x="50px" y="60px" text-anchor="middle" fill="${logo.color}" font-size="30px" font-family="sans-serif">${logo.text}</text>
                </svg>`;

test('Testing the Square class render method', () => {
    expect(logo.render()).toBe(output);
  });
