'use strict';

const version = require('../package.json').version;
const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const spawn = require('cross-spawn');
const axios = require('axios');
const semver = require('semver');
const prompts = require('prompts');

const pathMap = require('../utils/path-map');
const modifyPkg = require('../utils/modify-pkg');
const getRepoInfo = require('../utils/get-repo-info');

module.exports = (type = 'react', option = 'component') => {
  const templateDir = path.resolve(__dirname, `../template/${pathMap[type + '-' + option]}/`);
  const gitignoreTemp = path.resolve(__dirname, `../template/_gitignore`);

  try {
    console.log(chalk.magenta.bold('\n🔍  Updating cli...'));
    axios.get('http://registry.npmjs.org/wox-cli').then(res => {
      /**
       * 版本强制检查升级
       */
      const latest = res.data['dist-tags']['latest'];
      if (semver.lt(version, latest)) {
        console.log(chalk.red(`\n❌  wox-cli@${version} has out of date, please run \`${chalk.white.bold('npm install -g wox-cli@' + latest)}\` to install the latest version!\n`));
        process.exit(0);
      }
      console.log(chalk.green.bold('\n✨  You are using the latest version!'));

      if (option === 'page') {
        console.log('\n');
        (async function() {
          const response = await prompts([{
            type: 'text',
            name: 'pageName',
            initial: 'page',
            message: 'What is the name of page?',
          }], {
            onCancel: () => {
              return true;
            }
          });
          const { pageName } = response;

          try {
            if (!pageName) {
              return;
            }

            await fs.ensureDir(pageName);
            console.log(chalk.magenta.bold('\n📃  Adding page files...'));
            fs.copySync(templateDir, path.resolve(process.cwd(), `./${pageName}`));
            fs.moveSync(path.resolve(process.cwd(), `./${pageName}/page.entry.js`), path.resolve(process.cwd(), `./${pageName}/${pageName}.entry.js`));
            console.log(chalk.green.bold('\n✨  Add page files success!'));
          } catch (err) {
            console.error(err);
          }
        })();
        return;
      }

      /**
       * 模板文件初始化
       */
      console.log(chalk.magenta.bold('\n📃  Initialize template files...'));
      fs.copySync(templateDir, path.resolve(process.cwd(), './'));
      fs.copySync(gitignoreTemp, path.resolve(process.cwd(), './.gitignore'));
      console.log(chalk.green.bold('\n✨  Initialize template success!'));

      /**
       * 依赖安装
       */
      console.log(chalk.magenta.bold('\n📦  Installing dependencies...\n'));
      const installation = spawn('yarn', ['install'], {
        stdio: 'inherit'
      });
      installation.on('close', () => {
        // 如果是 `git` 项目将会自动修改包名、仓库链接
        modifyPkg(getRepoInfo());

        console.log(chalk.green.bold('\n✨  Install dependencies success!\n'));
      });
      installation.on('error', (err) => {
        console.log(chalk.red('\n❌  Failed to install dependencies: '), err);
      });
    }).catch(e => {
      console.log(e);
    });
  } catch(e) {
    console.log('copy file error: ', e);
  }
};
