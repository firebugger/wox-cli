# wox-cli  [![image](https://img.shields.io/npm/v/wox-cli.svg)](https://www.npmjs.com/package/wox-cli)

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

* init [[type]](#type)

```
$ wox init [type]
```

## Type

* **react** *(default)*: 初始化一个 `react` 基础组件
* **react-admin-toolkit**: 初始化一个后台系统页面的项目
* **react-general-toolkit**: 初始化一个通用的项目
* **react-spa-toolkit**: 初始化一个单页面应用的项目
