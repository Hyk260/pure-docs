# 项目配置

## 环境变量

### 配置文件

```
├── .env                  # 基础环境变量配置文件（优先级最低）
├── .env.local            # 本地环境变量配置文件（优先级最高 会被git忽略）
├── .env.development      # 开发环境变量配置文件
├── .env.production       # 生产环境变量配置文件

```

## 具体配置

```
# IM sdk日志级别 https://gitee.com/H260788/PureAdmin/blob/master/src/utils/IM/im-sdk/tim.js#L15
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
VUE_APP_PROXY_DOMAIN_REAL = "https://node-admin.cn/"

# IM SDKAppID
VUE_APP_SDK_APPID = ""

# 您的openai api密钥(必需)
VUE_APP_OPENAI_API_KEY = ""

# openai api 默认url (可选)
VUE_APP_BASE_URL = "https://api.nextapi.fun/openai/"

# electron 更新地址
VUE_APP_UPDATE_SERVER_URL = "http://127.0.0.1:5500/"

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

```
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

## package.json

```
{
  "scripts": {
    "serve": "vue-cli-service serve", // 启动
    "build": "vue-cli-service build", // 打包（生产环境）
    "build:dev": "vue-cli-service build --mode development", // 打包（测试环境）
    "lint": "vue-cli-service lint --fix", // Eslint格式化并修复
    "electron:serve": "vue-cli-service electron:serve", // electron 启动
    "electron:build:mac": "vue-cli-service electron:build -p never -m", // electron 打包 mac
    "electron:build:win": "vue-cli-service electron:build -p never -w", // electron 打包 window
    "electron:build:dev:mac": "vue-cli-service electron:build --mode development --mac",
    "electron:build:dev:win": "vue-cli-service electron:build --mode development --win",
    "prepare": "husky install", // 生成husky
    "report": "vue-cli-service serve --report" // 生成文件大小图形化分析
  }
}
```
