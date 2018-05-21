# wox-cli  [![image](https://img.shields.io/npm/v/wox-cli.svg)](https://www.npmjs.com/package/wox-cli)

scaffold for wox

## Installation

```
$ npm install wox-cli -g
```

## Environment

* node: **>=8.0.0**

## Usage

* wox --help

```
$ wox --help

  Usage: wox [options] [command]

  Options:

    -v, --version     output the version number
    -h, --help        output usage information

  Commands:

    toolkit [type]    initialize a toolkit, example: `wox toolkit ca-admin`
    page [type]       add a page, example: `wox page ca-admin`
    component [type]  initialize a component, example: `wox component react`
```

* wox [[command]](#command) [[type]](#type)

```
$ wox toolkit ca-admin  // 初始化套件

$ wox page ca-admin     // 新增页面

$ wox component react   // 初始化组件
```

## Command

#### toolkit

> 初始化一个套件

#### page

> 增加一个页面

#### component

> 初始化一个组件


## Type

#### component

> 目前支持的组件类型如下

* **react**: 初始化一个 `react` 基础组件。支持 `less`、`css-modules`

* **vue**: 初始化一个 `vue` 基础组件。

#### toolkit

> 目前支持的套件类型如下

* **react-admin**: 初始化一个基于 `react` 的后台系统项目。支持 `redux`、`redux-saga`、`less`、`css-modules`

* **react-general**: 初始化一个基于 `react` 的通用项目。支持 `redux`、`redux-saga`、`less`、`css-modules`

* **react-spa**: 初始化一个基于 `react` 的单页面应用项目。支持 `react-router`、`redux`、`redux-saga`、`less`、`css-modules`

* **vue-multi**: 初始化一个基于 `vue` 的多页面应用项目。支持 `vuex`

* **vue-spa**: 初始化一个基于 `vue` 的单页面应用项目。支持 `vue-router`、`vuex`

#### page

> `需要手动进入相关目录再进行初始化` 目前支持的页面类型如下

* **react-admin**: 初始化一个基于 `react` 的后台系统的页面。支持 `redux`、`redux-saga`、`less`、`css-modules`

## TODO

- [x] `react-*-toolkit` webpack 升级到 3.x
- [x] `react-*-toolkit` antd 升级到 3.x
- [x] `react-*-toolkit` react 升级到 16.x
