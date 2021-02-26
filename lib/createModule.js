const { exec } = require('child_process');
const chalk = require('chalk');

module.exports = createModule = (module_name) => {
   exec('cd', (error, stdout, stderr) => {
      //    if (error) {
      //       console.log(`error: ${error.message}`);
      //       return;
      //    }
      //    if (stderr) {
      //       console.log(`stderr: ${stderr}`);
      //       return;
      //    }
      //    console.log(`stdout: ${stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + '\\new'}`);

      const newlyCreatedDirPath = stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + `${module_name}`;

      exec(`mkdir ${stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + module_name}`, (error, stdout, stderr) => {
         if (error) {
            // console.log(`error: ${error.message}`);
            if (error.message.includes('already exists.')) {
               console.log(
                  chalk.bold.red(module_name.split('\\')[module_name.split('\\').length - 1] + ' module already exists')
               );
            }
            return;
         }
         //   if (stderr) {
         //      console.log(`stderr: ${stderr}`);
         //      return;
         //   }
         //   console.log(`stdout: ${stdout}`);
         console.log(chalk.bold.green(module_name.split('\\')[module_name.split('\\').length - 1] + ' module created'));

         exec(`touch ${newlyCreatedDirPath}/schema.js`, (error, stdout, stderr) => {
            //  if (error) {
            //     console.log(`error: ${error.message}`);
            //     return;
            //  }
            //  if (stderr) {
            //     console.log(`stderr: ${stderr}`);
            //     return;
            //  }
            //  console.log(`stdout: ${stdout}`);
         });

         exec(`touch ${newlyCreatedDirPath}/controllers.js`, (error, stdout, stderr) => {
            //  if (error) {
            //     console.log(`error: ${error.message}`);
            //     return;
            //  }
            //  if (stderr) {
            //     console.log(`stderr: ${stderr}`);
            //     return;
            //  }
            //  console.log(`stdout: ${stdout}`);
         });

         exec(`touch ${newlyCreatedDirPath}/routes.js`, (error, stdout, stderr) => {
            //  if (error) {
            //     console.log(`error: ${error.message}`);
            //     return;
            //  }
            //  if (stderr) {
            //     console.log(`stderr: ${stderr}`);
            //     return;
            //  }
            //  console.log(`stdout: ${stdout}`);
         });
         exec(`mkdir ${newlyCreatedDirPath}\\services`, (error, stdout, stderr) => {
            //  if (error) {
            //     console.log(`error: ${error.message}`);
            //     return;
            //  }
            //  if (stderr) {
            //     console.log(`stderr: ${stderr}`);
            //     return;
            //  }
            //  console.log(`stdout: ${stdout}`);
         });
      });
   });
};
