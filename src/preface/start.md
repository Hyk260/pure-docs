# 快速上手

## 环境准备

::: tip
 - Node.js 版本 18.20+
 - pnpm >= 8.7.0，推荐最新版本。
:::

## VSCode插件

本项目推荐使用 VSCode 进行开发，项目里面已内置 VSCode 配置，包含推荐的插件和设置。

以下为推荐的插件：
- [CodeGeeX](https://marketplace.visualstudio.com/items?itemName=aminer.codegeex) - 智能编程助手 代码生成与补全 自动添加注释等
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) - 自动刷新和架设本地服务器环境
- [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost) - 显示依赖的大小
- [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag) - 自动添加 HTML/XML 结束标签
- [Auto Complete Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag) - 为 HTML/XML 添加关闭标签和自动重命名成对的标签
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag) - 自动重命名成对的 HTML/XML 标签
- [DotENV](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv) - 高亮.env 文件
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) - 统一不同编辑器的一些配置
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码检查
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph) - Git 图形化操作工具
- [GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) - 显示具体某行代码的 git 信息
- [i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally) - i18n 国际化插件
- [javascript console utils](https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils) - 提供快捷键 ctrl+l 直接输入 console.log()
- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme) - 图标主题，显示文件和文件多种图标
- [One Dark Pro](https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme) - 主题
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 代码格式化插件
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - Vue 服务插件
- [Vue VSCode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets) - Vue2、Vue3 写法提示插件

## 拉取代码

::: code-group
  ```bash [GitHub]
  git clone https://github.com/Hyk260/PureChat.git
  ```
  ```bash [gitee]
  git clone https://gitee.com/H260788/PureChat.git
  ```
:::

<Callout type='warning'>
  最新版本的代码以github为准
</Callout>

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

## SVG 图标使用

将 svg 图标文件放在 `src/icons/svg` 目录下

在项目中直接使用 `<svg-icon iconClass="图标文件命名" />` 即可
