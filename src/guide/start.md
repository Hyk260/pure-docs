# 快速上手

## 环境准备

确保你的环境满足以下要求

- **git**: 你需要git来克隆和管理项目版本 [安装地址](https://git-scm.com/)
- **nodejs**: >=16 或更高 [安装地址](https://nodejs.cn/)

## 拉取代码

::: code-group
  ```bash [GitHub]
  git clone https://github.com/Hyk260/PureChat.git
  ```
  ```bash [gitee]
  git clone https://gitee.com/H260788/PureChat.git
  ```
:::

## 选择包管理工具
::: code-group
  ```bash [npm]
  https://www.npmrc.cn/
  ```
  ```bash [cnpm]
  https://npmmirror.com/
  ```
  ```bash [yarn]
  https://yarn.nodejs.cn/
  ```
  ```bash [pnpm]
  https://www.pnpm.cn/
  ```
:::

#### 安装依赖

```
pnpm install
```

#### 启动项目

```
pnpm dev
```

#### 打包

```
pnpm build
```

::: warning 注意
最新版本的代码以github为准
:::

::: warning 本地开发需注意
本项目由 [pure-backend](https://github.com/Hyk260/pure-backend.git) 提供API 测试可以使用线上地址 
本地启动需将后端地址切换成线上地址 baseURL: "https://apichat.fun/" 
[代码路径](https://gitee.com/H260788/PureChat/blob/master/src/utils/http/index.js#L10) 
:::

## SVG 图标使用

将 svg 图标文件放在 `src/icons/svg` 目录下

在项目中直接使用 `<svg-icon iconClass="图标文件命名" />` 即可
