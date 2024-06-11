# 目录结构

```
PureChat
├── .vscode                    // vscode插件和设置
│   ├── extensions.json        // vscode推荐的插件(左侧点击扩展 筛选选中推荐可以一键安装)
│   └── settings.json          // vscode配置(在该项目中生效 可以复制到用户配置文件中)
├── dist_electron              // electron打包文件
├── dist                       // 打包文件
├── locales                    // 国际化语言包
├── node_modules               // 依赖包
├── public                     // 静态目录
├── src                        // 源代码
│   ├── ai                     // ai配置
│   ├── api                    // 所有请求
│   ├── assets                 // 主题字体图片 svg icons 等静态资源
│   ├── components             // 全局公用组件
│   ├── directives             // 自定义指令
│   ├── electron               // electron配置
│   ├── constants              // 常量
│   ├── directives             // 指令
│   ├── layout                 // 整体布局结构
│   ├── plugins                // 插件
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── views                  // view页面目录
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
├── static                     // 静态资源
├── .browserslistrc            // 配置兼容浏览器
├── .env                       // 全局环境变量
├── .env.development           // 开发环境变量
├── .env.local                 // 本地环境变量
├── .env.production            // 生产环境变量
├── .eslintignore              // eslint忽略项
├── .eslintrc.js               // eslint配置项
├── .gitignore                 // git忽略项
├── .npmrc                     // npm配置文件
├── .nvmrc                     // 指定node版本配置
├── .prettierignore            // prettier忽略项
├── babel.config.js            // babel-loader配置
├── commitlint.md              // Commitlint提交规范
├── jsconfig.json              // JavaScript配置
├── LICENSE                    // 开源协议
├── package.json               // 项目名称 项目版本 项目描述 项目运行的一些脚本(依赖)
├── prettier.config.js         // prettier配置
├── README.md                  // 说明
└── vite.config.js             // vite配置
```

