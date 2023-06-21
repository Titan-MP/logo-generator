const { Triangle } = require('./shape');

const text = 'GPM';
const color = 'white';
const shapeColor = 'black';

const logo = new Triangle(text, color, shapeColor);

let output = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="50,0 100,100 0,100" style="fill:${logo.shapeColor};stroke:${logo.color};stroke-width:3" />
                    <text x="50px" y="90px" text-anchor="middle" fill="${logo.color}" font-size="30px" font-family="sans-serif">${logo.text}</text>
                </svg>`;

test('Testing the Triangle class render method', () => {
    expect(logo.render()).toBe(output);
  });

test('Testing for object class', () => expect(typeof logo).toBe('object'));