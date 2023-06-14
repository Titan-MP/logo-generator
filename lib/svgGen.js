const {Square, Circle, Triangle} = require('./shape');
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

    writeFile('./dist/Logo.svg', shape.render(), err => {
        if (err) console.log(err);

        console.log('Logo created! Check out Logo.svg in "dist" folder to see it!');
    })
}

module.exports = svgGen;