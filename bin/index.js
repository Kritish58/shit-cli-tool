#!/usr/bin/env node

const createModule = require('../lib/createModule');
const removeModule = require('../lib/removeModule');

// console.log(process.argv);
const command = process.argv[2];
const module_name = process.argv[3];

if (command === 'create') {
   createModule(module_name);
}

if (command === 'remove') {
   removeModule(module_name);
}
