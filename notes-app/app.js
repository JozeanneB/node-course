import * as validator from 'validator';

import name from './utils.js';
import getNotes from './notes.js'; 

console.log(name);
console.log(getNotes());

console.log(validator.isEmail('andrew@gmail.com'));
console.log(validator.isURL('https://keep.google.com'));