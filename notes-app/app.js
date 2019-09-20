import * as validator from 'validator';

import name from './utils.js';
import getNotes from './notes.js'; 

const chalk = require('chalk');

console.log(name);
console.log(getNotes());

console.log(validator.isEmail('andrew@gmail.com'));
console.log(validator.isURL('https://keep.google.com'));

console.log(chalk.green('Success!!!'));