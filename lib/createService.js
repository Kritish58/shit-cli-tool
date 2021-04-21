const { exec } = require('child_process');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const fse = require('fs-extra');

module.exports = createService = ({ moduleName, serviceName }) => {
   exec(`cd`, (error, stdout, stderr) => {
      //  if (error) {
      //     console.log(`error: ${error.message}`);
      //     return;
      //  }
      //  if (stderr) {
      //     console.log(`stderr: ${stderr}`);
      //     return;
      //  }
      //  console.log(`stdout: ${stdout}`);
      //   console.log('stdout: ', stdout);
      //   exec(
      //      `mkdir -p ${stdout}${insideComponent ? '\\component' : ''}\\${moduleName}\\services\\${serviceName}`,
      //      (error, stdout, stderr) => {
      //         console.log('stdout ', stdout);
      //      }
      //   );

      const pathToModuleDir = `${stdout.toString().replace(/(\r\n|\n|\r)/gm, '')}${'\\components'}\\${moduleName}`;
      if (!fse.existsSync(pathToModuleDir)) {
         console.log(chalk.bold.red('module does not exist'));
         return;
      }
      const pathToServicesDir = `${stdout
         .toString()
         .replace(/(\r\n|\n|\r)/gm, '')}${'\\components'}\\${moduleName}\\services`;

      mkdirp(pathToServicesDir)
         .then((res) => {
            const filePath = `${pathToServicesDir}\\${serviceName}.service.js`;
            if (fse.existsSync(filePath)) {
               console.log(chalk.bold.red('service already exists'));
               return;
            }
            fse.writeFileSync(
               filePath,
               `class ${capitalizeString(serviceName)}Services {} \r\n\r\nmodule.exports = ${capitalizeString(
                  serviceName
               )}Services;`
            );
            console.log(chalk.bold.green('service created'));
         })
         .catch((err) => {
            console.log('mkdirp error', err);
         });
   });
   return;
};

const capitalizeString = (str) => {
   return str.charAt(0).toUpperCase() + str.slice(1);
};
