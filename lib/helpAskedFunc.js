const YELLOW_TEXT_CODE = '\x1b[33m';
const WHITE_TEXT_CODE = '\x1b[37m';
const GREEN_TEXT_CODE = '\x1b[32m';
// const MAGENTA_TEXT_CODE = '\x1b[35m';
// const CYAN_TEXT_CODE = '\x1b[36m';

module.exports = helpAskedFunc = () => {
   console.log(YELLOW_TEXT_CODE);
   console.log('SHIT JS');
   console.log('*************************');
   console.log(WHITE_TEXT_CODE);
   console.log('-h, --help');
   console.log(
      GREEN_TEXT_CODE,
      'shit create <module_name>',
      WHITE_TEXT_CODE,
      '//',
      WHITE_TEXT_CODE,
      'command to create a module'
   );
   console.log(
      GREEN_TEXT_CODE,
      'shit remove <module_name>',
      WHITE_TEXT_CODE,
      '//',
      WHITE_TEXT_CODE,
      'command to delete a module'
   );
   console.log(
      GREEN_TEXT_CODE,
      'shit create <module_name> -c',
      WHITE_TEXT_CODE,
      '//',
      WHITE_TEXT_CODE,
      'command to create a module inside component folder'
   );
   console.log(
      GREEN_TEXT_CODE,
      'shit remove <module_name> -c',
      WHITE_TEXT_CODE,
      '//',
      WHITE_TEXT_CODE,
      'command to delete a module inside component folder'
   );
};
