const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter three letters for logo:',
        validate: text => text.length == 3 || 'Please enter three letters.', 
        default: 'ABC'
    },
    {
        type: 'input',
        name: 'color',
        message: 'What color would you like your text to be:',
        default: 'white'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['square', 'circle', 'triangle'], 
        default: 'circle'

    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like your shape color to be?',
        default: 'blue'
    }

];

module.exports = questions;