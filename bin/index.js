#!/usr/bin/env node

const createModule = require('../lib/createModule');
const removeModule = require('../lib/removeModule');
const version = require('../package.json').version;

// console.log(process.argv);
const command = process.argv[2];
const versionIsAsked = process.argv[2] === '-v' || process.argv === '--version';

const module_name = process.argv[3];
const componentExists = process.argv[4] === '-c';

// with and without component

if (versionIsAsked) {
   console.log(version);
}

if (command === 'create') {
   if (componentExists) {
      createModule('\\component\\' + module_name);
   } else {
      createModule('\\' + module_name);
   }
}

if (command === 'remove') {
   if (componentExists) {
      removeModule('\\component\\' + module_name);
   } else {
      removeModule('\\' + module_name);
   }
}
