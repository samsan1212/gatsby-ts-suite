const del = require('del');
const chalk = require('chalk');
const path = require('path');

(async () => {
  console.log(`${chalk.blue('info')} clean previous compiled files`);
  await del([
    path.resolve(__dirname, '.cache/**'),
    path.resolve(__dirname, 'public/**')
  ]);
  console.log(`${chalk.green('success')} previous compiled files removed`);
})();
