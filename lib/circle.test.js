const { Circle } = require('./shape');

const text = 'GPM';
const color = 'white';
const shapeColor = 'black';

const logo = new Circle(text, color, shapeColor);

let output = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" r="50" stroke="white" stroke-width="3" fill="${logo.shapeColor}" />
                    <text x="50%" y="50%" text-anchor="middle" fill="${logo.color}" font-size="30px" font-family="sans-serif">${logo.text}</text>
                </svg>`;

test('Testing the Circle class render method', () => {
    expect(logo.render()).toBe(output);
  });
