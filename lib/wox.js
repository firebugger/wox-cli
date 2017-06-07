'use strict';

const fs = require('fs-extra');
const glob = require('glob');
const path = require('path');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const pathMap = require('../utils/path-map');
const modifyPkg = require('../utils/modify-pkg');
const getRepoInfo = require('../utils/get-repo-info');

module.exports = (type = 'react') => {
  const templateDir = path.resolve(__dirname, `../template/${pathMap[type]}/`);

  try {
    console.log(chalk.magenta.bold('\n📃  Generating template files...'));
    fs.copySync(templateDir, path.resolve(process.cwd(), './'));

    console.log(chalk.green.bold('\n✨  Initialize success!'));

    console.log(chalk.magenta.bold('\n📦  Installing dependencies...'));
    const installation = spawn('npm', ['install'], {
      stdio: 'inherit'
    });
    installation.on('close', () => {
      // 如果是 `git` 项目将会自动修改包名、仓库链接
      modifyPkg(getRepoInfo());

      console.log(chalk.green.bold('\n✨  Install dependencies success!\n'));
    });

    // TODO: 输出模板文件
    // glob(`**/*`, { dot: true, nodir: true }, (err, files) => {
    //   if (err) {
    //     console.log('check files error: ', err);
    //   }
    //   files.map(file => {
    //     try {
    //       console.log(`  ${chalk.green(file)}`);
    //     } catch(e) {
    //       console.log('check file error: ', e);
    //     }
    //   });
    //   console.log(chalk.green.bold('\n✨  Initialize success!'));
    //
    //   console.log(chalk.magenta.bold('\n📦  Installing dependencies...'));
    //   const installation = spawn('npm', ['install'], {
    //     stdio: 'inherit'
    //   });
    //   installation.on('close', () => {
    //     // 如果是 `git` 项目将会自动修改包名、仓库链接
    //     modifyPkg(getRepoInfo());
    //
    //     console.log(chalk.green.bold('\n✨  Install dependencies success!'));
    //   });
    // });
  } catch(e) {
    console.log('copy file error: ', e);
  }
};
