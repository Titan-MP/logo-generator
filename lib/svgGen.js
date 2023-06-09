const {Square, Circle, Triangle} = require('./lib');
const {writeFile} = require('fs');

const svgGen = data => {
    let shape;
    switch(data.shape) {
        case 'square':
            shape = new Square(data.text, data.color, data.shapeColor);
            break;
        case 'circle':
            shape = new Circle(data.text, data.color, data.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(data.text, data.color, data.shapeColor);
            break;
    }
    return shape.getSVG();
}