#!/usr/bin/env node

const createModule = require('../lib/createModule');
const removeModule = require('../lib/removeModule');
const helpAskedFunc = require('../lib/helpAskedFunc');
const version = require('../package.json').version;
const newProjectFunc = require('../lib/newProject');

const chalk = require('chalk');
const createService = require('../lib/createService');

// console.log(process.argv);
// const command = process.argv[2];
const versionAsked = process.argv[2] === '-v' || process.argv[2] === '--version';
const helpAsked = process.argv[2] === '-h' || process.argv[2] === '--help';
const createNewProject = process.argv[2] === 'new';

const createNewService =
   (process.argv[2] === 'create' || process.argv[2] === 'c') &&
   (process.argv[3] === 'service' || process.argv[3] === 's');

const createNewModule =
   (process.argv[2] === 'create' || process.argv[2] === 'c') && (process.argv[3] === 'comp' || process.argv[3] === 'c');

// const createNewService = process.argv[3] === 'service' || process.argv[2] === 's';

// const module_name = process.argv[3];
// const componentExists = process.argv[4] === '-c';

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
   const serviceFileName = process.argv[4];
   const moduleName = process.argv[5];
   const insideComponent = process.argv[6] === '-c';
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

if (createNewModule) {
   const module_name = process.argv[4];
   const insideComponent = process.argv[5] === '-c';
   if (!module_name) {
      console.log(chalk.bold.red('invalid module name'));
      console.log();
      console.log(chalk.bold.yellow('shit create module <module_name>'));
      return;
   }
   if (insideComponent) {
      createModule('\\components\\' + module_name);
   } else {
      createModule('\\' + module_name);
   }
   return;
}

if (process.argv[2] === 'remove' || process.argv[2] === 'rm') {
   const module_name = process.argv[3];
   const insideComponent = process.argv[4];
   if (!module_name) {
      console.log(chalk.bold.red('module name not found'));
      console.log();
      console.log(chalk.bold.yellow('shit remove <module_name>'));
      return;
   }

   if (insideComponent) {
      removeModule('\\components\\' + module_name);
      return;
   }
   removeModule('\\' + module_name);
   return;
}

// command not identified

helpAskedFunc();
