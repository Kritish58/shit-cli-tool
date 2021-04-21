const { exec } = require('child_process');
const mkdirp = require('mkdirp');
const chalk = require('chalk');
const fse = require('fs-extra');

const createModel = (model_name) => {
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
      //      `mkdir -p ${stdout}${insideComponent ? '\\component' : ''}\\${moduleName}\\services\\${model_name}`,
      //      (error, stdout, stderr) => {
      //         console.log('stdout ', stdout);
      //      }
      //   );

      const pathToModuleDir = `${stdout.toString().replace(/(\r\n|\n|\r)/gm, '')}${'\\models'}`;

      mkdirp(pathToModuleDir)
         .then((res) => {
            const filePath = `${pathToModuleDir}\\${capitalizeString(model_name)}.js`;
            if (fse.existsSync(filePath)) {
               console.log(chalk.bold.red('model already exists'));
               return;
            }
            fse.writeFileSync(
               filePath,
               `const mongoose = require('mongoose');\nconst { Schema } = mongoose;\n\nconst ${capitalizeString(
                  model_name
               )} = new Schema({});\n\nmodule.exports = mongoose.model('${model_name}s', ${capitalizeString(
                  model_name
               )});`
            );
            console.log(chalk.bold.green('model created'));
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

module.exports = createModel;
