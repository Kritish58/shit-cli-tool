const fse = require('fs-extra');
const path = require('path');
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
      });
   });
};
