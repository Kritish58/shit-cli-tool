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

      if (fse.existsSync(newProjectPath)) {
         console.log(chalk.bold.red('project already exists'));
         return;
      }

      fse.copy(path.join(__dirname, '..', 'source'), newProjectPath, (err) => {
         if (err) return console.error(err);

         console.log();
         console.log(chalk.bold.blue('New project created'));
         console.log();
         console.log(chalk.bold.green('NEXT STEPS: '));
         console.log(chalk.bold.yellow('1. cd ' + projectName));
         console.log(chalk.bold.yellow('2. npm install'));
         console.log(chalk.bold.yellow('3. npm run dev'));
         console.log();
         console.log('(Optinal) If you want to update all packages to latest dependencies: ');
         console.log(chalk.bold.yellow('1. npm i -g npm-check-updates'));
         console.log(chalk.bold.yellow('2. ncu -u'));
         console.log(chalk.bold.yellow('3. npm install'));
         console.log();
         console.log(
            '(Optional) If you want to check which modules are outdated: ',
            chalk.bold.yellow('npm outdated ')
         );
         console.log();
         console.log(
            chalk.bold.white('shit -h, -shit --help'),
            chalk.bold.cyan('//'),
            chalk.bold.cyan('to view list of commands')
         );
      });
   });
};
