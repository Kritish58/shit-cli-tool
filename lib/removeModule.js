const { exec } = require('child_process');

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

      //   const newlyCreatedDirPath = stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + `\\${module_name}`;

      exec(
         `rm -r ${stdout.toString().replace(/(\r\n|\n|\r)/gm, '') + '\\component\\' + module_name}`,
         (error, stdout, stderr) => {
            //   if (error) {
            //      console.log(`error: ${error.message}`);
            //      return;
            //   }
            //   if (stderr) {
            //      console.log(`stderr: ${stderr}`);
            //      return;
            //   }
            //   console.log(`stdout: ${stdout}`);
         }
      );
   });
};
