# 快速上手

## 环境准备

确保你的环境满足以下要求

- **git**: 你需要git来克隆和管理项目版本 [安装地址](https://git-scm.com/)
- **nodejs**: >=16 或更高 [安装地址](https://nodejs.cn/)

## 拉取代码

从 GitHub 上拉取

```bash
git clone https://github.com/Hyk260/PureChat.git
```

从 gitee 上拉取

```bash
git clone https://gitee.com/H260788/PureChat.git
```

::: warning 注意
最新版本的代码以 github 为准。
:::


## 本地开发

本项目由 [node-admin](https://node-admin.cn) 提供 API，暂时因密钥安全后端源码暂时不公开， 测试可以使用线上地址
本地启动需将后端地址切换成线上地址 baseURL: "https://node-admin.cn/"。
[点我查看路径](https://gitee.com/H260788/PureChat/blob/master/src/utils/http/index.js#L10) 
暂时因密钥安全后端源码暂时不公开 测试使用线上地址

## SVG 图标使用

将 svg 图标文件放在 `src/icons/svg` 目录下

在项目中直接使用 `<svg-icon iconClass="图标文件命名" />` 即可

### 安装依赖

```
yarn install
```

### 启动项目

```
yarn serve
```

### 打包

```
yarn build
```
### 生成文件结构、模块大小以及依赖关系等信息

```
yarn report
```

### 自动修复一些代码问题，例如缩进、空格、引号等

```
yarn lint
```