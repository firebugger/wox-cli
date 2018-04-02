#!/usr/bin/env node

'use strict';
const program = require('commander');
const woxInit = require('../lib/wox');
const pkgJSON = require('../package.json');

program.version(pkgJSON.version, '-v, --version');

/**
 * 初始化套件
 */
program
  .command('toolkit [type]')
  .description('initialize a toolkit, example: `wox toolkit ca-admin`')
  .action((type) => {
    if (!type) {
      return;
    }

    woxInit(type, 'toolkit');
  });

/**
 * 新增页面
 */
program
  .command('page [type]')
  .description('add a page, example: `wox page ca-admin`')
  .action((type) => {
    if (!type) {
      return;
    }

    woxInit(type, 'page');
  });

/**
 * 初始化组件
 */
program
  .command('component [type]')
  .description('initialize a component, example: `wox component react`')
  .action((type) => {
    if (!type) {
      return;
    }

    woxInit(type, 'component');
  });

if (
  !process.argv.slice(2).length ||
  ['-v', '--version', '-h', '--help'].indexOf(process.argv.slice(2)[0]) === -1 && !process.argv.slice(3).length
) {
  program.outputHelp();
}

program.parse(process.argv);
