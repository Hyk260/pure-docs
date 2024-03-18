import{_ as s,c as n,o as a,a4 as p}from"./chunks/framework.BG254jyF.js";const g=JSON.parse('{"title":"项目配置","description":"","frontmatter":{},"headers":[],"relativePath":"guide/config.md","filePath":"guide/config.md","lastUpdated":1710144041000}'),e={name:"guide/config.md"},l=p(`<h1 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h1><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><h3 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>├── .env                  # 基础环境变量配置文件（优先级最低）</span></span>
<span class="line"><span>├── .env.local            # 本地环境变量配置文件（优先级最高 会被git忽略）</span></span>
<span class="line"><span>├── .env.development      # 开发环境变量配置文件</span></span>
<span class="line"><span>├── .env.production       # 生产环境变量配置文件</span></span></code></pre></div><h2 id="具体配置" tabindex="-1">具体配置 <a class="header-anchor" href="#具体配置" aria-label="Permalink to &quot;具体配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span># IM sdk日志级别 https://gitee.com/H260788/PureAdmin/blob/master/src/utils/IM/im-sdk/tim.js#L15</span></span>
<span class="line"><span>VUE_APP_LOG_LEVEL = 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 运行端口号</span></span>
<span class="line"><span>VUE_APP_PORT = 8080</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 代理</span></span>
<span class="line"><span>VUE_APP_PROXY = &#39;false&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 打包路径</span></span>
<span class="line"><span>VUE_APP_PUBLIC_PATH = /</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 路由历史模式 (项目中测试环境使用&quot;history&quot; 生产环境使用&quot;hash&quot;)</span></span>
<span class="line"><span>VUE_APP_ROUTER_HISTORY = &quot;hash&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 接口地址</span></span>
<span class="line"><span>VUE_APP_PROXY_DOMAIN_REAL = &quot;https://node-admin.cn/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># IM SDKAppID</span></span>
<span class="line"><span>VUE_APP_SDK_APPID = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 您的openai api密钥(必需)</span></span>
<span class="line"><span>VUE_APP_OPENAI_API_KEY = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># openai api 默认url (可选)</span></span>
<span class="line"><span>VUE_APP_BASE_URL = &quot;https://api.nextapi.fun/openai/&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># electron 更新地址</span></span>
<span class="line"><span>VUE_APP_UPDATE_SERVER_URL = &quot;http://127.0.0.1:5500/&quot;</span></span></code></pre></div><h2 id="npmrc" tabindex="-1">.npmrc <a class="header-anchor" href="#npmrc" aria-label="Permalink to &quot;.npmrc&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>指定 npm 的仓库地址</span></span>
<span class="line"><span>registry=https://registry.npmmirror.com/ </span></span>
<span class="line"><span></span></span>
<span class="line"><span>将共享的依赖项提升到项目根目录的 node_modules 文件夹中，以减小依赖树的大小 这可以减少重复的模块，提高性能</span></span>
<span class="line"><span>shamefully-hoist=true</span></span></code></pre></div><h2 id="jsconfig-json" tabindex="-1">jsconfig.json <a class="header-anchor" href="#jsconfig-json" aria-label="Permalink to &quot;jsconfig.json&quot;">​</a></h2><p><a href="https://www.typescriptlang.org/zh/tsconfig" target="_blank" rel="noreferrer">https://www.typescriptlang.org/zh/tsconfig</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span>    // 设置目标 ECMAScript 版本</span></span>
<span class="line"><span>    &quot;target&quot;: &quot;es6&quot;,</span></span>
<span class="line"><span>    // 设置模块生成方式</span></span>
<span class="line"><span>    &quot;module&quot;: &quot;esnext&quot;,</span></span>
<span class="line"><span>    // 设置基础路径，用于解析非相对模块的根目录</span></span>
<span class="line"><span>    &quot;baseUrl&quot;: &quot;.&quot;,</span></span>
<span class="line"><span>    // 生成源映射文件</span></span>
<span class="line"><span>    &quot;sourceMap&quot;: true, </span></span>
<span class="line"><span>    // 定义模块解析别名</span></span>
<span class="line"><span>    &quot;paths&quot;: {</span></span>
<span class="line"><span>      &quot;@/*&quot;: [&quot;src/*&quot;]</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>  &quot;exclude&quot;: [&quot;node_modules&quot;, &quot;dist&quot;],</span></span>
<span class="line"><span>  &quot;include&quot;: [&quot;src/**/*&quot;]</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="electron-配置" tabindex="-1">electron 配置 <a class="header-anchor" href="#electron-配置" aria-label="Permalink to &quot;electron 配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>pluginOptions: {</span></span>
<span class="line"><span>  electronBuilder: {</span></span>
<span class="line"><span>    // 主进程入口文件</span></span>
<span class="line"><span>    mainProcessFile: &quot;src/electron/main.js&quot;,</span></span>
<span class="line"><span>    // 渲染进程也可以获取原生node包</span></span>
<span class="line"><span>    nodeIntegration: true,</span></span>
<span class="line"><span>    // 检测主进程文件在更改时将重新编译主进程并重新启动</span></span>
<span class="line"><span>    mainProcessWatch: [&quot;src/electron&quot;],</span></span>
<span class="line"><span>    // 预加载文件</span></span>
<span class="line"><span>    preload: &quot;src/electron/preload/index.js&quot;, // 预加载文件</span></span>
<span class="line"><span>    // 打包配置</span></span>
<span class="line"><span>    builderOptions: {</span></span>
<span class="line"><span>      // 应用名称</span></span>
<span class="line"><span>      productName: &quot;PureAdmin&quot;,</span></span>
<span class="line"><span>      // 安装包名称</span></span>
<span class="line"><span>      artifactName: &quot;PureAdmin_\${version}.\${ext}&quot;,</span></span>
<span class="line"><span>      copyright: &quot;PureAdmin&quot;,</span></span>
<span class="line"><span>      // 应用更新服务器地址</span></span>
<span class="line"><span>      publish: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          provider: &quot;generic&quot;,</span></span>
<span class="line"><span>          url: process.env.VUE_APP_UPDATE_SERVER_URL,</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>      win: {</span></span>
<span class="line"><span>        target: [&quot;nsis&quot;, &quot;zip&quot;],</span></span>
<span class="line"><span>        icon: &quot;images/log.png&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      mac: {</span></span>
<span class="line"><span>        icon: &quot;images/log-512x512.png&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      electronDownload: {</span></span>
<span class="line"><span>        mirror: &quot;https://npm.taobao.org/mirrors/electron/&quot;,</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      nsis: {</span></span>
<span class="line"><span>        oneClick: false, // true: 一键安装 false: 辅助安装</span></span>
<span class="line"><span>        perMachine: true, // false: 可选择为所有人或当前用户安装 true: 为所有人安装</span></span>
<span class="line"><span>        allowElevation: true, // 是否允许请求提升（仅辅助安装程序）</span></span>
<span class="line"><span>        allowToChangeInstallationDirectory: true, // 是否允许用户修改安装目录</span></span>
<span class="line"><span>        createDesktopShortcut: true, // 是否创建桌面快捷方式</span></span>
<span class="line"><span>        createStartMenuShortcut: true, // 是否创建开始菜单快捷方式</span></span>
<span class="line"><span>        installerIcon: &quot;images/icon.ico&quot;, // 安装图标</span></span>
<span class="line"><span>        uninstallerIcon: &quot;images/icon.ico&quot;, // 卸载图标</span></span>
<span class="line"><span>        installerHeaderIcon: &quot;images/icon.ico&quot;, // 安装时头部图标</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>      asar: false, // 是否开启asar打包</span></span>
<span class="line"><span>      //打包后拷贝静态文件到指定位置,</span></span>
<span class="line"><span>      extraResources: [</span></span>
<span class="line"><span>        {</span></span>
<span class="line"><span>          from: &quot;static&quot;,</span></span>
<span class="line"><span>          to: &quot;./&quot;,</span></span>
<span class="line"><span>          filter: [&quot;**/*&quot;],</span></span>
<span class="line"><span>        },</span></span>
<span class="line"><span>      ],</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>}</span></span></code></pre></div><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>{</span></span>
<span class="line"><span>  &quot;scripts&quot;: {</span></span>
<span class="line"><span>    &quot;serve&quot;: &quot;vue-cli-service serve&quot;, // 启动</span></span>
<span class="line"><span>    &quot;build&quot;: &quot;vue-cli-service build&quot;, // 打包（生产环境）</span></span>
<span class="line"><span>    &quot;build:dev&quot;: &quot;vue-cli-service build --mode development&quot;, // 打包（测试环境）</span></span>
<span class="line"><span>    &quot;lint&quot;: &quot;vue-cli-service lint --fix&quot;, // Eslint格式化并修复</span></span>
<span class="line"><span>    &quot;electron:serve&quot;: &quot;vue-cli-service electron:serve&quot;, // electron 启动</span></span>
<span class="line"><span>    &quot;electron:build:mac&quot;: &quot;vue-cli-service electron:build -p never -m&quot;, // electron 打包 mac</span></span>
<span class="line"><span>    &quot;electron:build:win&quot;: &quot;vue-cli-service electron:build -p never -w&quot;, // electron 打包 window</span></span>
<span class="line"><span>    &quot;electron:build:dev:mac&quot;: &quot;vue-cli-service electron:build --mode development --mac&quot;,</span></span>
<span class="line"><span>    &quot;electron:build:dev:win&quot;: &quot;vue-cli-service electron:build --mode development --win&quot;,</span></span>
<span class="line"><span>    &quot;prepare&quot;: &quot;husky install&quot;, // 生成husky</span></span>
<span class="line"><span>    &quot;report&quot;: &quot;vue-cli-service serve --report&quot; // 生成文件大小图形化分析</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,15),t=[l];function i(o,c,u,r,q,d){return a(),n("div",null,t)}const m=s(e,[["render",i]]);export{g as __pageData,m as default};
