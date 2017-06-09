# wox-cli

scaffold for wox

## Installation

```
$ npm install wox-cli -g
```

## Usage

* help

```
$ wox --help

  Usage: wox [options] [command]

  Commands:

    init [type]  initialize, default: react component

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

* init [type]

> `init` 命令用于初始化一个模板项目，`[type]` 默认支持 `react`，用于初始化一个 react 基础组件；支持 `react-admin-toolkit`，用于初始化一个后台项目模板

```
$ wox init [type]
```
