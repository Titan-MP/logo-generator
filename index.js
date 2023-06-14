const {prompt} = require('inquirer');
const { questions, svgGen } = require('./lib');

prompt(questions).then(svgGen);