const chalk = require('chalk');

module.exports = helpAskedFunc = () => {
   console.log();
   console.log(chalk.bold.yellow('SHIT JS'));
   console.log(chalk.bold.yellow('*************************'));
   console.log(chalk.bold.white('shit -h, shit --help'));
   console.log(
      chalk.green('shit new <project_name>'),
      chalk.white('//'),
      chalk.white('command to create new node project')
   );
   console.log(chalk.green('shit create <module_name>'), chalk.white('//'), chalk.white('command to create a module'));

   console.log(chalk.green('shit remove <module_name>'), chalk.white('//'), chalk.white('command to delete a module'));

   console.log(
      chalk.green('shit create <module_name> -c'),
      chalk.white('//'),
      chalk.white('command to create a module inside component folder')
   );

   console.log(
      chalk.green('shit remove <module_name> -c'),
      chalk.white('//'),
      chalk.white('command to delete a module inside component folder')
   );
};
