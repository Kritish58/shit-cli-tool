const { exec } = require('child_process');

const RED_TEXT_CODE = '\x1b[31m';
const GREEN_TEXT_CODE = '\x1b[32m';

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
                  RED_TEXT_CODE,
                  module_name.split('\\')[module_name.split('\\').length - 1] + ' module already exists'
               );
            }
            return;
         }
         //   if (stderr) {
         //      console.log(`stderr: ${stderr}`);
         //      return;
         //   }
         //   console.log(`stdout: ${stdout}`);
         console.log(GREEN_TEXT_CODE, module_name.split('\\')[module_name.split('\\').length - 1] + ' module created');

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
