#!/usr/bin/env node

'use strict';
const program = require('commander');
const woxInit = require('../lib/wox');
let cmd, type;

program
  .version('0.0.1')
  .command('init [type]')
  .description('initialize, default: react component')
  .action((type) => {
    woxInit(type);
  });

if (!process.argv.slice(2).length) {
  program.outputHelp();
}


program.parse(process.argv);
