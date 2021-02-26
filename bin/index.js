#!/usr/bin/env node

const createModule = require('../lib/createModule');

// console.log(process.argv);
const command = process.argv[2];
const module_name = process.argv[3];

if (command === 'create-module') {
   createModule(module_name);
}
