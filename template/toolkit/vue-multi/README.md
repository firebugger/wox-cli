# vue cli

## 目录结构

```
.
├── dist                                    // 打包输出目录
│   ├── css
│   │   └── pages                         // 打包输出样式文件
│   │       └── list
│   │           ├── list.entry.css
│   │           └── list.entry.css.map
│   ├── images                              // 打包输出图片文件
│   │   └── logo.82b9c7a.png
│   ├── index.html                          // 打包输出 html 文件
│   └── js                                  // 打包输出脚本文件
│       └── pages                         
│           └── list
│               ├── list.entry.js
│               └── list.entry.js.map
├── index.html                              // html 模板
├── src                                     // 源代码
│   ├── api                                 // API 接口
│   │   └── index.js
│   ├── components                          // 通用组件
│   │   └── HelloWorld.vue
│   ├── images                              // 通用图片
│   │   └── logo.png
│   ├── util                                // 工具类函数
│   └── pages                               // 页面
│       ├── detail
│       ├── index
│       └── list
│           ├── components
│           ├── store                       // 应用状态相关(vuex)
│           │   ├── actions.js              // 异步处理，最终状态更改通过 mutations
│           │   ├── getters.js              // state 派生状态处理
│           │   ├── mutations.js            // 更改 state    
│           │   └── index.js
│           ├── App.vue
│           └── list.entry.js.map
├── webpack.base.conf.js                    // webpack 基础配置
├── webpack.dev.conf.js                     // webpack 开发配置
└── webpack.prod.conf.js                    // webpack 生产配置
```
## 相关链接

> [vue-loader相关配置](https://vue-loader.vuejs.org/zh-cn/)

> [webpack相关配置](https://doc.webpack-china.org/configuration/#-)

## 构建流程

#### 安装依赖

``` bash
$ yarn install
```

#### 本地调试

``` bash
$ npm start
```

#### 生产构建

```bash
$ npm run build
```