import{_ as s,c as a,o as n,a5 as p}from"./chunks/framework.vajmPRik.js";const g=JSON.parse('{"title":"项目配置","description":"","frontmatter":{},"headers":[],"relativePath":"preface/config.md","filePath":"preface/config.md","lastUpdated":1721638292000}'),i={name:"preface/config.md"},l=p(`<h1 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h1><h2 id="环境变量" tabindex="-1">环境变量 <a class="header-anchor" href="#环境变量" aria-label="Permalink to &quot;环境变量&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>├── .env                  # 基础环境变量配置文件（优先级最低）</span></span>
<span class="line"><span>├── .env.local            # 本地环境变量配置文件（优先级最高 会被git忽略）</span></span>
<span class="line"><span>├── .env.development      # 开发环境变量配置文件</span></span>
<span class="line"><span>├── .env.production       # 生产环境变量配置文件</span></span></code></pre></div><h2 id="具体配置" tabindex="-1">具体配置 <a class="header-anchor" href="#具体配置" aria-label="Permalink to &quot;具体配置&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 本地运行端口号</span></span>
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
<span class="line"><span># 无服务器模式 (无需后端接口输入用户名即可登录)</span></span>
<span class="line"><span>VITE_NO_SERVICE = &quot;N&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 是否生成生产源映射</span></span>
<span class="line"><span>VITE_SOURCE_MAP = &#39;N&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 开发环境读取配置文件路径</span></span>
<span class="line"><span>VITE_BASE_URL = &#39;/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 腾讯IM SDKAppID https://cloud.tencent.com/product/im (必须)</span></span>
<span class="line"><span>VITE_IM_SDK_APPID = &#39;1600010416&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 腾讯IM密钥 密钥信息为敏感信息，请注意保密，不要泄露。(必须)(VITE_NO_SERVICE 为&#39;Y&#39;生效)</span></span>
<span class="line"><span>VITE_IM_SDK_KEY = &#39;&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># openai api key (必须)</span></span>
<span class="line"><span>VITE_OPENAI_API_KEY = &#39;ak-a9bMv3tuBaei8i3HJ5U8AwVgcHfuG2Tufu1NXoh026rJtn31&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># openai api 地址 (可选)</span></span>
<span class="line"><span>VITE_OPENAI_PROXY_URL = &#39;https://api.nextapi.fun/&#39;</span></span>
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
<span class="line"><span># chatgpt机器人ID (必须)</span></span>
<span class="line"><span>VITE_ROBOT_GPT = &#39;@RBT#001&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 智谱机器人ID (必须)</span></span>
<span class="line"><span>VITE_ROBOT_GLM = &#39;@RBT#002&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 零一万物机器人ID (必须)</span></span>
<span class="line"><span>VITE_ROBOT_ZEROONE = &#39;@RBT#003&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># 通义千问机器人ID (必须)</span></span>
<span class="line"><span>VITE_ROBOT_QWEN = &#39;@RBT#004&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># cloud 对象存储url</span></span>
<span class="line"><span>VITE_CLOUD_BASE_URL = &#39;https://ljx-1307934606.cos.ap-beijing.myqcloud.com/&#39;</span></span></code></pre></div><h2 id="npmrc" tabindex="-1">.npmrc <a class="header-anchor" href="#npmrc" aria-label="Permalink to &quot;.npmrc&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>指定 npm 的仓库地址</span></span>
<span class="line"><span>registry=https://registry.npmmirror.com/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>将共享的依赖项提升到项目根目录的 node_modules 文件夹中，以减小依赖树的大小 这可以减少重复的模块，提高性能</span></span>
<span class="line"><span>shamefully-hoist=true</span></span></code></pre></div><h2 id="jsconfig-json" tabindex="-1">jsconfig.json <a class="header-anchor" href="#jsconfig-json" aria-label="Permalink to &quot;jsconfig.json&quot;">​</a></h2><p><a href="https://www.typescriptlang.org/zh/tsconfig" target="_blank" rel="noreferrer">https://www.typescriptlang.org/zh/tsconfig</a></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;compilerOptions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 设置目标 ECMAScript 版本</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;target&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;es6&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 设置模块生成方式</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;esnext&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 设置基础路径，用于解析非相对模块的根目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;baseUrl&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 生成源映射文件</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;sourceMap&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 定义模块解析别名</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;paths&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;@/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;exclude&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;node_modules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;include&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;src/**/*&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="package-json" tabindex="-1">package.json <a class="header-anchor" href="#package-json" aria-label="Permalink to &quot;package.json&quot;">​</a></h2><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 启动</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 打包（生产环境）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 打包（测试环境）</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;build:dev&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite build --mode development&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 本地环境预览构建后的dist</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vite preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,12),e=[l];function t(h,k,c,E,o,r){return n(),a("div",null,e)}const u=s(i,[["render",t]]);export{g as __pageData,u as default};
