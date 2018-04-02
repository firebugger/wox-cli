const fs = require('fs');
const path = require('path');

const currentDir = __dirname.substr(__dirname.lastIndexOf('/') + 1);
let gitVersion = fs.readFileSync(path.resolve(__dirname, './.git/HEAD'), 'utf8');
gitVersion = gitVersion.split('/heads/')[1].replace(/\s/g, '');
const versionNum = gitVersion.split('/')[1];

const publicPath = `//www.quimg.com/${currentDir}/${versionNum}/`;

module.exports = { publicPath, gitVersion };
// module.exports = { publicPath: '//www.quimg.com', gitVersion: 'daily/0.0.1' };