import{_ as i,B as s,o as l,c as r,am as e,G as o,w as n,a as p}from"./chunks/framework.CYljUBBp.js";const v=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"preface/start.md","filePath":"preface/start.md","lastUpdated":1737524934000}'),d={name:"preface/start.md"};function h(c,a,u,m,k,b){const t=s("Callout");return l(),r("div",null,[a[1]||(a[1]=e('<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><h2 id="环境准备" tabindex="-1">环境准备 <a class="header-anchor" href="#环境准备" aria-label="Permalink to &quot;环境准备&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">兼容性注意</p><p>Vite 需要 <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">Node.js</a> 版本 18+ 或 20+。然而，有些模板需要依赖更高的 Node 版本才能正常运行，当你的包管理器发出警告时，请注意升级你的 Node 版本。</p><ul><li>Node.js 版本 18.20+</li><li>pnpm &gt;= 8.7.0，推荐最新版本。</li></ul></div><h2 id="拉取代码" tabindex="-1">拉取代码 <a class="header-anchor" href="#拉取代码" aria-label="Permalink to &quot;拉取代码&quot;">​</a></h2><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-g8cIL" id="tab-vjDu09P" checked><label data-title="GitHub" for="tab-vjDu09P">GitHub</label><input type="radio" name="group-g8cIL" id="tab-h6Xr9ab"><label data-title="Gitee" for="tab-h6Xr9ab">Gitee</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://github.com/Hyk260/PureChat.git</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://gitee.com/H260788/PureChat.git</span></span></code></pre></div></div></div>',5)),o(t,{type:"warning"},{default:n(()=>a[0]||(a[0]=[p(" 最新版本的代码以GitHub为准 ")])),_:1}),a[2]||(a[2]=e('<h4 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-UGDKE" id="tab-FhKHdAI" checked><label data-title="pnpm" for="tab-FhKHdAI">pnpm</label><input type="radio" name="group-UGDKE" id="tab-kpqF8oh"><label data-title="yarn" for="tab-kpqF8oh">yarn</label><input type="radio" name="group-UGDKE" id="tab-7QlG5TT"><label data-title="npm" for="tab-7QlG5TT">npm</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span></code></pre></div></div></div><h4 id="启动项目" tabindex="-1">启动项目 <a class="header-anchor" href="#启动项目" aria-label="Permalink to &quot;启动项目&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-sBiiI" id="tab-7gfLMrx" checked><label data-title="web" for="tab-7gfLMrx">web</label><input type="radio" name="group-sBiiI" id="tab-xzAMg8G"><label data-title="electron" for="tab-xzAMg8G">electron</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app:dev</span></span></code></pre></div></div></div><h4 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h4><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-vzLdl" id="tab-gFv2kwJ" checked><label data-title="web" for="tab-gFv2kwJ">web</label><input type="radio" name="group-vzLdl" id="tab-J_-3J2z"><label data-title="window" for="tab-J_-3J2z">window</label><input type="radio" name="group-vzLdl" id="tab-VPfTLs4"><label data-title="mac" for="tab-VPfTLs4">mac</label></div><div class="blocks"><div class="language-bash vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app:builder:win</span></span></code></pre></div><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> app:builder:mac</span></span></code></pre></div></div></div><h2 id="后端代码" tabindex="-1">后端代码 <a class="header-anchor" href="#后端代码" aria-label="Permalink to &quot;后端代码&quot;">​</a></h2><p>基于 Node.js 的 API 服务，<a href="https://github.com/Hyk260/pure-backend" target="_blank" rel="noreferrer">项目地址</a></p><h2 id="vscode插件" tabindex="-1">VSCode插件 <a class="header-anchor" href="#vscode插件" aria-label="Permalink to &quot;VSCode插件&quot;">​</a></h2><p>本项目推荐使用 VSCode 进行开发，项目里面已内置 VSCode 配置，包含推荐的插件和设置。</p><p>以下为推荐的插件：</p><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=aminer.codegeex" target="_blank" rel="noreferrer">CodeGeeX</a> - 智能编程助手 代码生成与补全 自动添加注释等</li><li><a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer" target="_blank" rel="noreferrer">Live Server</a> - 自动刷新和架设本地服务器环境</li><li><a href="https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost" target="_blank" rel="noreferrer">Import Cost</a> - 显示依赖的大小</li><li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag" target="_blank" rel="noreferrer">Auto Close Tag</a> - 自动添加 HTML/XML 结束标签</li><li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-complete-tag" target="_blank" rel="noreferrer">Auto Complete Tag</a> - 为 HTML/XML 添加关闭标签和自动重命名成对的标签</li><li><a href="https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag" target="_blank" rel="noreferrer">Auto Rename Tag</a> - 自动重命名成对的 HTML/XML 标签</li><li><a href="https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv" target="_blank" rel="noreferrer">DotENV</a> - 高亮.env 文件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig" target="_blank" rel="noreferrer">EditorConfig for VS Code</a> - 统一不同编辑器的一些配置</li><li><a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" target="_blank" rel="noreferrer">ESLint</a> - 代码检查</li><li><a href="https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph" target="_blank" rel="noreferrer">Git Graph</a> - Git 图形化操作工具</li><li><a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens" target="_blank" rel="noreferrer">GitLens — Git supercharged</a> - 显示具体某行代码的 git 信息</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally" target="_blank" rel="noreferrer">i18n Ally</a> - i18n 国际化插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=whtouche.vscode-js-console-utils" target="_blank" rel="noreferrer">javascript console utils</a> - 提供快捷键 ctrl+l 直接输入 console.log()</li><li><a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme" target="_blank" rel="noreferrer">Material Icon Theme</a> - 图标主题，显示文件和文件多种图标</li><li><a href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme" target="_blank" rel="noreferrer">One Dark Pro</a> - 主题</li><li><a href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode" target="_blank" rel="noreferrer">Prettier - Code formatter</a> - 代码格式化插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">Vue - Official</a> - Vue 服务插件</li><li><a href="https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets" target="_blank" rel="noreferrer">Vue VSCode Snippets</a> - Vue2、Vue3 写法提示插件</li></ul><h2 id="svg-图标使用" tabindex="-1">SVG 图标使用 <a class="header-anchor" href="#svg-图标使用" aria-label="Permalink to &quot;SVG 图标使用&quot;">​</a></h2><p>将 svg 图标文件放在 <code>src/icons/svg</code> 目录下</p><p>在项目中直接使用 <code>&lt;svg-icon iconClass=&quot;图标文件命名&quot; /&gt;</code> 即可</p>',15))])}const f=i(d,[["render",h]]);export{v as __pageData,f as default};
