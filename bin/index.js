#!/usr/bin/env node

const createModule = require('../lib/createModule');
const removeModule = require('../lib/removeModule');
const helpAskedFunc = require('../lib/helpAskedFunc');
const version = require('../package.json').version;
const newProjectFunc = require('../lib/newProject');

const chalk = require('chalk');
const createService = require('../lib/createService');

// console.log(process.argv);
const command = process.argv[2];
const versionAsked = process.argv[2] === '-v' || process.argv[2] === '--version';
const helpAsked = process.argv[2] === '-h' || process.argv[2] === '--help';
const createNewProject = process.argv[2] === 'new';
const createNewService = process.argv[2] === 'service' || false;

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
   return;
}

if (createNewService) {
   const serviceFileName = process.argv[3];
   const moduleName = process.argv[4];
   const insideComponent = process.argv[5] === '-c';
   if (!serviceFileName) {
      console.log(chalk.bold.red('please specify service name'));
      return;
   }
   if (!moduleName) {
      console.log(chalk.bold.red('please specify module name'));
      return;
   }
   if (insideComponent) {
      createService({ insideComponent: true, moduleName, serviceName: serviceFileName });
      return;
   }
   if (!insideComponent) {
      createService({ insideComponent: false, moduleName, serviceName: serviceFileName });
      return;
   }
   return;
}

// for creating and removing modules
if (command === 'module') {
   if (componentExists) {
      createModule('\\components\\' + module_name);
   } else {
      createModule('\\' + module_name);
   }
   return;
}

if (command === 'remove') {
   if (componentExists) {
      removeModule('\\components\\' + module_name);
   } else {
      removeModule('\\' + module_name);
   }
   return;
}

// command not identified

helpAskedFunc();
