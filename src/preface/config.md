# 项目配置

## 环境变量

```
├── .env                  # 基础环境变量配置文件（优先级最低）
├── .env.local            # 本地环境变量配置文件（优先级最高 会被git忽略）
├── .env.development      # 开发环境变量配置文件
├── .env.production       # 生产环境变量配置文件
```

## 具体配置

```
# IM sdk日志级别
VUE_APP_LOG_LEVEL = 3

# 运行端口号
VUE_APP_PORT = 8080

# 代理
VUE_APP_PROXY = 'false'

# 打包路径
VUE_APP_PUBLIC_PATH = /

# 路由历史模式 (项目中测试环境使用"history" 生产环境使用"hash")
VUE_APP_ROUTER_HISTORY = "hash"

# 接口地址
VUE_APP_PROXY_DOMAIN_REAL = ""

# IM SDKAppID
VUE_APP_SDK_APPID = ""

# 您的openai api密钥(必需)
VUE_APP_OPENAI_API_KEY = ""

# openai api 默认url (可选)
VUE_APP_BASE_URL = ""

# electron 更新地址
VUE_APP_UPDATE_SERVER_URL = ""

```

## .npmrc

```
指定 npm 的仓库地址
registry=https://registry.npmmirror.com/

将共享的依赖项提升到项目根目录的 node_modules 文件夹中，以减小依赖树的大小 这可以减少重复的模块，提高性能
shamefully-hoist=true
```

## jsconfig.json

https://www.typescriptlang.org/zh/tsconfig

```json
{
  "compilerOptions": {
    // 设置目标 ECMAScript 版本
    "target": "es6",
    // 设置模块生成方式
    "module": "esnext",
    // 设置基础路径，用于解析非相对模块的根目录
    "baseUrl": ".",
    // 生成源映射文件
    "sourceMap": true,
    // 定义模块解析别名
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "exclude": ["node_modules", "dist"],
  "include": ["src/**/*"]
}
```

## electron 配置

```js
pluginOptions: {
  electronBuilder: {
    // 主进程入口文件
    mainProcessFile: "src/electron/main.js",
    // 渲染进程也可以获取原生node包
    nodeIntegration: true,
    // 检测主进程文件在更改时将重新编译主进程并重新启动
    mainProcessWatch: ["src/electron"],
    // 预加载文件
    preload: "src/electron/preload/index.js", // 预加载文件
    // 打包配置
    builderOptions: {
      // 应用名称
      productName: "PureChat",
      // 安装包名称
      artifactName: "PureChat_${version}.${ext}",
      copyright: "PureChat",
      // 应用更新服务器地址
      publish: [
        {
          provider: "generic",
          url: process.env.VUE_APP_UPDATE_SERVER_URL,
        },
      ],
      win: {
        target: ["nsis", "zip"],
        icon: "images/log.png",
      },
      mac: {
        icon: "images/log-512x512.png",
      },
      electronDownload: {
        mirror: "https://npm.taobao.org/mirrors/electron/",
      },
      nsis: {
        oneClick: false, // true: 一键安装 false: 辅助安装
        perMachine: true, // false: 可选择为所有人或当前用户安装 true: 为所有人安装
        allowElevation: true, // 是否允许请求提升（仅辅助安装程序）
        allowToChangeInstallationDirectory: true, // 是否允许用户修改安装目录
        createDesktopShortcut: true, // 是否创建桌面快捷方式
        createStartMenuShortcut: true, // 是否创建开始菜单快捷方式
        installerIcon: "images/icon.ico", // 安装图标
        uninstallerIcon: "images/icon.ico", // 卸载图标
        installerHeaderIcon: "images/icon.ico", // 安装时头部图标
      },
      asar: false, // 是否开启asar打包
      //打包后拷贝静态文件到指定位置,
      extraResources: [
        {
          from: "static",
          to: "./",
          filter: ["**/*"],
        },
      ],
    },
  },
}
```

## package.json

```json
{
  "scripts": {
    // 启动
    "dev": "vite",
    // 打包（生产环境）
    "build": "vite build",
    // 打包（测试环境）
    "build:dev": "vite build --mode development",
    // 本地环境预览构建后的dist
    "preview": "vite preview",
  }
}
```
