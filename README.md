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

    init [type]  initialize, default: react

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

* init [[type]](#type)

```
$ wox init [type]
```

## Type

#### react *(default)*

> 初始化一个 `react` 基础组件。支持 `less`、`css-modules`

#### react-admin-toolkit

> 初始化一个基于 `react` 的后台系统项目。支持 `redux`、`redux-saga`、`less`、`css-modules`

#### react-general-toolkit

> 初始化一个基于 `react` 的通用项目。支持 `redux`、`redux-saga`、`less`、`css-modules`

#### react-spa-toolkit

> 初始化一个基于 `react` 的单页面应用项目。支持 `react-router`、`redux`、`redux-saga`、`less`、`css-modules`

#### vue-multi-toolkit

> 初始化一个基于 `vue` 的多页面应用项目。支持 `vuex`

#### vue-spa-toolkit

> 初始化一个基于 `vue` 的单页面应用项目。支持 `vue-router`、`vuex`

## TODO

- [ ] `react-*-toolkit` webpack 升级到 2.x(or 3.x)
