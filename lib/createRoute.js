const { exec } = require('child_process');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const fse = require('fs-extra');

const createRoute = (route_name) => {
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
      //      `mkdir -p ${stdout}${insideComponent ? '\\component' : ''}\\${moduleName}\\services\\${route_name}`,
      //      (error, stdout, stderr) => {
      //         console.log('stdout ', stdout);
      //      }
      //   );

      const pathToModuleDir = `${stdout.toString().replace(/(\r\n|\n|\r)/gm, '')}${'\\routes'}`;

      mkdirp(pathToModuleDir)
         .then((res) => {
            const filePath = `${pathToModuleDir}\\${capitalizeString(route_name)}.routes.js`;
            if (fse.existsSync(filePath)) {
               console.log(chalk.bold.red('route already exists'));
               return;
            }
            fse.writeFileSync(
               filePath,
               `const express = require('express');\nconst router = express.Router();\n\nmodule.exports = router;`
            );
            console.log(chalk.bold.green('route created'));
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

module.exports = createRoute;
