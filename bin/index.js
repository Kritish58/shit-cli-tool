#!/usr/bin/env node

const createModule = require('../lib/createModule');
const removeModule = require('../lib/removeModule');
const helpAskedFunc = require('../lib/helpAskedFunc');
const version = require('../package.json').version;
const newProjectFunc = require('../lib/newProject');

const chalk = require('chalk');

// console.log(process.argv);
const command = process.argv[2];
const versionAsked = process.argv[2] === '-v' || process.argv[2] === '--version';
const helpAsked = process.argv[2] === '-h' || process.argv[2] === '--help';
const createNewProject = process.argv[2] === 'new';

const module_name = process.argv[3];
const componentExists = process.argv[4] === '-c';

// inside or outside component

if (versionAsked) {
   console.log(chalk.bold.yellow(version));
   return;
}

if (helpAsked) {
   helpAskedFunc();
   return;
}

if (createNewProject) {
   const project_name = process.argv[3] || 'new-shit-project';
   newProjectFunc(project_name);
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

helpAskedFunc();
