const fse = require('fs-extra');

fse.copy('./source', './dest', (err) => {
   if (err) return console.error(err);
   console.log('success!');
}); // copies directory, even if it has subdirectories or files
