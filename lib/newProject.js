const fse = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const { exec } = require('child_process');

module.exports = newProjectFunc = (projectName) => {
   exec('cd', (error, stdout, stderr) => {
      // if (error) {
      //    console.log(`error: ${error.message}`);
      //    return;
      // }
      // if (stderr) {
      //    console.log(`stderr: ${stderr}`);
      //    return;
      // }
      //    console.log(`stdout: ${stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + '\\new'}`);

      const location = stdout.toString().replace(/(\r\n|\n|\r)/gm, '');
      const newProjectPath = location + '\\' + projectName;

      fse.copy(path.join(__dirname, '..', 'source'), newProjectPath, (err) => {
         if (err) return console.error(err);

         console.log();
         console.log(chalk.bold.blue('Happy coding!'));
         console.log();
         console.log(chalk.bold.green('NEXT STEPS'));
         console.log(chalk.bold.yellow('1. cd ' + projectName));
         console.log(chalk.bold.yellow('2. npm install'));
         console.log(chalk.bold.yellow('3. npm run start:dev'));
      });
   });
};
