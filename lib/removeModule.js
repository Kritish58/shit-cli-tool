const { exec } = require('child_process');

const RED_TEXT_CODE = '\x1b[31m';
const GREEN_TEXT_CODE = '\x1b[32m';

module.exports = createModule = (module_name) => {
   exec('cd', (error, stdout, stderr) => {
      // if (error) {
      //    console.log(`error: ${error.message}`);
      //    return;
      // }
      //    if (stderr) {
      //       console.log(`stderr: ${stderr}`);
      //       return;
      //    }
      //    console.log(`stdout: ${stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + '\\new'}`);

      //   const newlyCreatedDirPath = stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + `\\${module_name}`;

      exec(`rm -r ${stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + module_name}`, (error, stdout, stderr) => {
         if (error) {
            // console.log(`error: ${error.message}`);
            if (error.message.includes('No such file or directory')) {
               console.log(RED_TEXT_CODE, module_name.split('\\')[1] + ' module does not exist');
            }
            return;
         }
         //   if (stderr) {
         //      console.log(`stderr: ${stderr}`);
         //      return;
         //   }
         //   console.log(`stdout: ${stdout}`);
         console.log(GREEN_TEXT_CODE, module_name.split('\\')[1] + ' module removed');
      });
   });
};
