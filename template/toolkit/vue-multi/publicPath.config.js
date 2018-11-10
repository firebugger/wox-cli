const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

// windows 路径问题 replace 转下
const currentDir = __dirname.substr(__dirname.replace(/\\/g, '/').lastIndexOf('/') + 1);
let gitVersion = 'daily/0.0.1';
let versionNum = '0.0.1';

try {
  const gitHead = fs.readFileSync(path.resolve(__dirname, './.git/HEAD'), 'utf8');
  gitVersion = gitHead.split('/heads/')[1].replace(/\s/g, '');
  versionNum = gitVersion.split('/')[1];
} catch (e) { 
  console.log(chalk.yellowBright.bold('✘ not a git project!\n'));
}

const publicPath = `//h5.quimg.com/${currentDir}/${versionNum}/dist/`;

module.exports = { publicPath, gitVersion };
// module.exports = { publicPath: '//www.quimg.com', gitVersion: 'daily/0.0.1' };