#!/usr/bin/env node

const createModule = require('../lib/createModule');
const removeModule = require('../lib/removeModule');
const helpAskedFunc = require('../lib/helpAskedFunc');
const version = require('../package.json').version;

const YELLOW_TEXT_CODE = '\x1b[33m';
// const WHITE_TEXT_CODE = '\x1b[37m';
// const GREEN_TEXT_CODE = '\x1b[32m';
// const MAGENTA_TEXT_CODE = '\x1b[35m';
// const CYAN_TEXT_CODE = '\x1b[36m';

// console.log(process.argv);
const command = process.argv[2];
const versionAsked = process.argv[2] === '-v' || process.argv[2] === '--version';
const helpAsked = process.argv[2] === '-h' || process.argv[2] === '--help';

const module_name = process.argv[3];
const componentExists = process.argv[4] === '-c';

// inside or outside component

if (versionAsked) {
   console.log(YELLOW_TEXT_CODE, version);
   return;
}

if (helpAsked) {
   helpAskedFunc();
   return;
}

if (command === 'create') {
   if (componentExists) {
      createModule('\\component\\' + module_name);
   } else {
      createModule('\\' + module_name);
   }
   return;
}

if (command === 'remove') {
   if (componentExists) {
      removeModule('\\component\\' + module_name);
   } else {
      removeModule('\\' + module_name);
   }
   return;
}

// command not identified
