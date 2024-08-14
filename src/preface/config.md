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
# 本地运行端口号
VITE_PORT = '8080'

# 项目名称
VITE_APP_NAME = 'PureChat'

# http代理
VITE_HTTP_PROXY = 'N'

# 是否开启pwa
VITE_PWA = 'N'

# 是否部署至vercel
VITE_VERCEL = 'Y'

# 是否在打包时使用cdn替换本地库
VITE_CDN = "N"

# 无服务器模式 (无需后端接口输入用户名即可登录)
VITE_NO_SERVICE = "N"

# 是否生成生产源映射
VITE_SOURCE_MAP = 'N'

# 开发环境读取配置文件路径
VITE_BASE_URL = '/'

# 腾讯IM SDKAppID https://cloud.tencent.com/product/im (必须)
VITE_IM_SDK_APPID = '1600010416'

# 腾讯IM密钥 密钥信息为敏感信息，请注意保密，不要泄露。(必须)(VITE_NO_SERVICE 为'Y'生效)
VITE_IM_SDK_KEY = ''

# openai api key (必须) 
VITE_OPENAI_API_KEY = ''

# openai api 代理 地址 (可选)
VITE_OPENAI_PROXY_URL = 'https://api.nextapi.fun/'

# 本地/远程ollama服务url
VITE_OLLAMA_PROXY_URL = 'http://127.0.0.1:11434/'

# 智谱 api key
VITE_ZHIPU_API_KEY = ''

# 智谱 api 地址 (可选)
VITE_ZHIPU_BASE_URL = 'https://open.bigmodel.cn/api/paas/v4/'

# 零一万物 api key
VITE_ZEROONE_API_KEY = ''

# 零一万物 api 地址 (可选)
VITE_ZEROONE_BASE_URL = 'https://api.lingyiwanwu.com/'

# 通义千问 api key
VITE_QWEN_API_KEY = ''

# 通义千问 api 地址 (可选)
VITE_QWEN_BASE_URL = 'https://dashscope.aliyuncs.com/api/v1/'

# chatgptID (可选)
VITE_ROBOT_GPT = '@RBT#001'

# 智谱ID (可选)
VITE_ROBOT_GLM = '@RBT#002'

# 零一万物ID (可选)
VITE_ROBOT_ZEROONE = '@RBT#003'

# 通义千问ID (可选)
VITE_ROBOT_QWEN = '@RBT#004'

# ollama
VITE_ROBOT_OLLAMA = '@RBT#005'

# cloud 对象存储url
VITE_CLOUD_BASE_URL = 'https://ljx-1307934606.cos.ap-beijing.myqcloud.com/'
```

## .npmrc

```
指定 npm 的仓库地址
registry=https://registry.npmmirror.com/

将共享的依赖项提升到项目根目录的 node_modules 文件夹中，以减小依赖树的大小 这可以减少重复的模块，提高性能
shamefully-hoist=true
```

## npm scripts

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
