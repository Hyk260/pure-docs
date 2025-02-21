import{_ as l,o as t,c as e,am as o}from"./chunks/framework.BPx30aMl.js";const p=JSON.parse('{"title":"Ollama 集成","description":"","frontmatter":{},"headers":[],"relativePath":"guides/ollama.md","filePath":"guides/ollama.md","lastUpdated":1724925432000}'),d={name:"guides/ollama.md"};function i(s,a,r,h,n,c){return t(),e("div",null,a[0]||(a[0]=[o(`<h1 id="ollama-集成" tabindex="-1">Ollama 集成 <a class="header-anchor" href="#ollama-集成" aria-label="Permalink to &quot;Ollama 集成&quot;">​</a></h1><p>Ollama 是一款强大的本地运行大型语言模型（LLM）的框架，支持多种语言模型，包括 Llama 2, Mistral 等。现在，PureChat 已经支持与 Ollama 的集成，这意味着你可以在 PureChat 中轻松使用 Ollama 提供的语言模型来增强你的应用。</p><p>本文档将指导你如何配置与部署 PureChat 来使用 Ollama：</p><h2 id="本地启动-ollama" tabindex="-1">本地启动 Ollama <a class="header-anchor" href="#本地启动-ollama" aria-label="Permalink to &quot;本地启动 Ollama&quot;">​</a></h2><p>首先，你需要安装 Ollama，安装与配置 Ollama 的详细步骤可以参考 <a href="https://ollama.com" target="_blank" rel="noreferrer">Ollama 官方站点</a>。</p><h2 id="本地运行-purechat" tabindex="-1">本地运行 PureChat <a class="header-anchor" href="#本地运行-purechat" aria-label="Permalink to &quot;本地运行 PureChat&quot;">​</a></h2><p>关于在 PureChat 中使用 Ollama 的更多信息，请查阅 <a href="/PureChatDocs/guides/olama-usage.html">Ollama 使用</a>。</p><h2 id="非本地访问-ollama" tabindex="-1">非本地访问 Ollama <a class="header-anchor" href="#非本地访问-ollama" aria-label="Permalink to &quot;非本地访问 Ollama&quot;">​</a></h2><p>由于 Ollama 默认参数在启动时设置了仅本地访问，所以跨域访问以及端口监听需要进行额外的环境变量设置 <code>OLLAMA_ORIGINS</code> 和 <code>OLLAMA_HOST</code>。</p><h3 id="ollama-环境变量" tabindex="-1">Ollama 环境变量 <a class="header-anchor" href="#ollama-环境变量" aria-label="Permalink to &quot;Ollama 环境变量&quot;">​</a></h3><table tabindex="0"><thead><tr><th>环境变量</th><th>描述</th><th>默认值</th><th>附加说明</th></tr></thead><tbody><tr><td><code>OLLAMA_HOST</code></td><td>绑定的主机和端口</td><td>&quot;127.0.0.1:11434&quot;</td><td>设置 0.0.0.0:端口号 可以指定所有人访问特定端口</td></tr><tr><td><code>OLLAMA_ORIGINS</code></td><td>允许的跨域源列表，逗号分隔</td><td>仅本地访问</td><td>设置 &quot;*&quot; 可以避免 CORS 跨域错误，按需设置</td></tr><tr><td><code>OLLAMA_MODELS</code></td><td>模型存放的路径</td><td>&quot;~/.ollama/models&quot; 或 &quot;/usr/share/ollama/.ollama/models&quot;</td><td>按需指定</td></tr><tr><td><code>OLLAMA_KEEP_ALIVE</code></td><td>模型在显存中保持加载的持续时间</td><td>&quot;5m&quot;</td><td>按需加载和释放显存可以有效降低显卡压力，但会增加硬盘读写</td></tr><tr><td><code>OLLAMA_DEBUG</code></td><td>设置为 1 以启用额外的调试日志</td><td>默认关闭</td><td></td></tr></tbody></table><h3 id="在-windows-上设置环境变量" tabindex="-1">在 Windows 上设置环境变量 <a class="header-anchor" href="#在-windows-上设置环境变量" aria-label="Permalink to &quot;在 Windows 上设置环境变量&quot;">​</a></h3><p>在 Windows 上，Ollama 继承了您的用户和系统环境变量。</p><ol><li>首先通过 Windows 任务栏点击 Ollama 退出程序。</li><li>从控制面板编辑系统环境变量。</li><li>为您的用户账户编辑或新建 Ollama 的环境变量，比如<code>OLLAMA_HOST</code>、<code>OLLAMA_ORIGINS</code>等。</li><li>点击<code>OK/应用</code>保存。</li><li>重新运行<code>Ollama</code>。</li></ol><h3 id="在-mac-上设置环境变量" tabindex="-1">在 Mac 上设置环境变量 <a class="header-anchor" href="#在-mac-上设置环境变量" aria-label="Permalink to &quot;在 Mac 上设置环境变量&quot;">​</a></h3><p>如果 Ollama 作为 macOS 应用程序运行，你需要使用 <code>launchctl</code> 设置环境变量：</p><ol><li><p>对于每个环境变量，调用 <code>launchctl setenv</code>。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">launchctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OLLAMA_HOST</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;0.0.0.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">launchctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> setenv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OLLAMA_ORIGINS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;*&quot;</span></span></code></pre></div></li><li><p>重启 Ollama 应用程序。</p></li></ol><p>详细配置方法可以参考 <a href="https://github.com/ollama/ollama/blob/main/docs/faq.md#how-do-i-configure-ollama-server" target="_blank" rel="noreferrer">Ollama 官方文档</a>。</p>`,18)]))}const u=l(d,[["render",i]]);export{p as __pageData,u as default};
