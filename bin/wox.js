#!/usr/bin/env node

'use strict';
const program = require('commander');
const woxInit = require('../lib/wox');
const pkgJSON = require('../package.json');
let cmd, type;

program
  .version(pkgJSON.version)
  .command('init [type]')
  .description('initialize template, default: `react-component`, also support `react-admin-toolkit | react-general-toolkit | react-spa-toolkit | vue-multi-toolkit | vue-spa-toolkit`')
  .action((type) => {
    woxInit(type);
  });

if (!process.argv.slice(2).length) {
  program.outputHelp();
}


program.parse(process.argv);
