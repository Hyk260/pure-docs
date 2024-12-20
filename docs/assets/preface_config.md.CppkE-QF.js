import{_ as a,c as n,a9 as p,o as i}from"./chunks/framework.4Ih4cC_B.js";const d=JSON.parse('{"title":"项目配置","description":"","frontmatter":{},"headers":[],"relativePath":"preface/config.md","filePath":"preface/config.md","lastUpdated":1731315629000}'),l={name:"preface/config.md"};function e(t,s,c,h,o,k){return i(),n("div",null,s[0]||(s[0]=[p(`<h1 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h1><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├── .env                  # 基础环境变量配置文件（优先级最低）</span></span>
<span class="line"><span>├── .env.local            # 本地环境变量配置文件（优先级最高 会被git忽略）</span></span>
<span class="line"><span>├── .env.development      # 开发环境变量配置文件</span></span>
<span class="line"><span>├── .env.production       # 生产环境变量配置文件</span></span>
<span class="line"><span>├── .env.vercel           # 一件部署到vercel的配置文件 Import.env</span></span></code></pre></div><h2 id="具体配置" tabindex="-1">具体配置 <a class="header-anchor" href="#具体配置" aria-label="Permalink to &quot;具体配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 本地运行端口号</span></span>
<span class="line"><span>VITE_PORT = &#39;8080&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 项目名称</span></span>
<span class="line"><span>VITE_APP_NAME = &#39;PureChat&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># http代理</span></span>
<span class="line"><span>VITE_HTTP_PROXY = &#39;N&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否开启pwa</span></span>
<span class="line"><span>VITE_PWA = &#39;N&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否部署至vercel</span></span>
<span class="line"><span>VITE_VERCEL = &#39;Y&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否在打包时使用cdn替换本地库</span></span>
<span class="line"><span>VITE_CDN = &quot;N&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否生成生产源映射</span></span>
<span class="line"><span>VITE_SOURCE_MAP = &#39;N&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开发环境读取配置文件路径</span></span>
<span class="line"><span>VITE_BASE_URL = &#39;/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 腾讯IM SDKAppID https://cloud.tencent.com/product/im (必须)*</span></span>
<span class="line"><span>VITE_IM_SDK_APPID = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># openai api key</span></span>
<span class="line"><span>VITE_OPENAI_API_KEY = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># openai api 代理 地址 (可选)</span></span>
<span class="line"><span>VITE_OPENAI_PROXY_URL = &#39;https://api.openai.com/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 本地/远程ollama服务url</span></span>
<span class="line"><span>VITE_OLLAMA_PROXY_URL = &#39;http://127.0.0.1:11434/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 智谱 api key</span></span>
<span class="line"><span>VITE_ZHIPU_API_KEY = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 智谱 api 地址 (可选)</span></span>
<span class="line"><span>VITE_ZHIPU_BASE_URL = &#39;https://open.bigmodel.cn/api/paas/v4/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 零一万物 api key</span></span>
<span class="line"><span>VITE_ZEROONE_API_KEY = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 零一万物 api 地址 (可选)</span></span>
<span class="line"><span>VITE_ZEROONE_BASE_URL = &#39;https://api.lingyiwanwu.com/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通义千问 api key</span></span>
<span class="line"><span>VITE_QWEN_API_KEY = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通义千问 api 地址 (可选)</span></span>
<span class="line"><span>VITE_QWEN_BASE_URL = &#39;https://dashscope.aliyuncs.com/api/v1/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># chatgptID (可选)</span></span>
<span class="line"><span>VITE_ROBOT_GPT = &#39;@RBT#001&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 智谱ID (可选)</span></span>
<span class="line"><span>VITE_ROBOT_GLM = &#39;@RBT#002&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 零一万物ID (可选)</span></span>
<span class="line"><span>VITE_ROBOT_ZEROONE = &#39;@RBT#003&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通义千问ID (可选)</span></span>
<span class="line"><span>VITE_ROBOT_QWEN = &#39;@RBT#004&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ollama</span></span>
<span class="line"><span>VITE_ROBOT_OLLAMA = &#39;@RBT#005&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cloud 对象存储url</span></span>
<span class="line"><span>VITE_CLOUD_BASE_URL = &#39;https://ljx-1307934606.cos.ap-beijing.myqcloud.com/&#39;</span></span></code></pre></div><h2 id="npmrc" tabindex="-1">npmrc <a class="header-anchor" href="#npmrc" aria-label="Permalink to &quot;npmrc&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>指定 npm 的仓库地址</span></span>
<span class="line"><span>registry=https://registry.npmmirror.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将共享的依赖项提升到项目根目录的 node_modules 文件夹中，以减小依赖树的大小 这可以减少重复的模块，提高性能</span></span>
<span class="line"><span>shamefully-hoist=true</span></span></code></pre></div><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // web 启动</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 打包（生产环境）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 打包（测试环境）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite build --mode development&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 本地环境预览构建后的dist</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // electron 启动</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;app:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;electron-vite dev --watch&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // electron（打包window）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;app:builder:win&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;electron-vite build &amp;&amp; electron-builder --win&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // electron（打包mac）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;app:builder:mac&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;electron-vite build &amp;&amp; electron-builder --mac&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,9)]))}const E=a(l,[["render",e]]);export{d as __pageData,E as default};
