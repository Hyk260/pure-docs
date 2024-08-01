import{_ as r,c as l,I as a,w as o,a5 as i,D as n,o as d,a as t}from"./chunks/framework.Ca-e1bDD.js";const m=JSON.parse('{"title":"模型服务商","description":"","frontmatter":{},"headers":[],"relativePath":"guides/model-provider.md","filePath":"guides/model-provider.md","lastUpdated":1722231032000}'),p={name:"guides/model-provider.md"},c=i('<h1 id="模型服务商" tabindex="-1">模型服务商 <a class="header-anchor" href="#模型服务商" aria-label="Permalink to &quot;模型服务商&quot;">​</a></h1><p>PureChat 在部署时提供了丰富的模型服务商相关的环境变量，你可以使用这些环境变量轻松定义需要在 PureChat 中开启的模型服务商。</p><h2 id="openai" tabindex="-1">OpenAI <a class="header-anchor" href="#openai" aria-label="Permalink to &quot;OpenAI&quot;">​</a></h2><h3 id="获取-openai-api-key" tabindex="-1">获取 OpenAI API Key <a class="header-anchor" href="#获取-openai-api-key" aria-label="Permalink to &quot;获取 OpenAI API Key&quot;">​</a></h3><p>API Key 是使用 PureChat 进行大语言模型会话的必要信息，本节以 OpenAI 模型服务商为例，简要介绍获取 API Key 的方式。</p><h4 id="a-通过-openai-官方渠道" tabindex="-1"><code>A</code> 通过 OpenAI 官方渠道 <a class="header-anchor" href="#a-通过-openai-官方渠道" aria-label="Permalink to &quot;`A` 通过 OpenAI 官方渠道&quot;">​</a></h4><ul><li><p>注册一个 <a href="https://platform.openai.com/signup" target="_blank" rel="noreferrer">OpenAI 账户</a>，你需要使用国际手机号、非大陆邮箱进行注册；</p></li><li><p>注册完毕后，前往 <a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer">API Keys</a> 页面，点击 <code>Create new secret key</code> 创建新的 API Key:</p></li><li><p>步骤 1：打开创建窗口<br><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/296253192-ff2193dd-f125-4e58-82e8-91bc376c0d68.png"></p></li><li><p>步骤 2：创建 API Key <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/296254170-803bacf0-4471-4171-ae79-0eab08d621d1.png"></p></li><li><p>步骤 3：获取 API Key <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/28616219/296255167-f2745f2b-f083-4ba8-bc78-9b558e0002de.png"></p></li><li><p>将此 API Key 填写到 PureChat 的 API Key 配置中，即可开始使用。</p></li></ul><blockquote><p>账户注册后，一般有 5 美元的免费额度，但有效期只有三个月。 如果你希望长期使用你的 API Key，你需要完成支付的信用卡绑定。由于 OpenAI 只支持外币信用卡，因此你需要找到合适的支付渠道，此处不再详细展开。</p></blockquote><br><h4 id="b-通过-openai-第三方代理商" tabindex="-1"><code>B</code> 通过 OpenAI 第三方代理商 <a class="header-anchor" href="#b-通过-openai-第三方代理商" aria-label="Permalink to &quot;`B` 通过 OpenAI 第三方代理商&quot;">​</a></h4><p>如果你发现注册 OpenAI 账户或者绑定外币信用卡比较麻烦，可以考虑借助一些知名的 OpenAI 第三方代理商来获取 API Key，这可以有效降低获取 OpenAI API Key 的门槛。但与此同时，一旦使用三方服务，你可能也需要承担潜在的风险， 请根据你自己的实际情况自行决策。以下是常见的第三方模型代理商列表，供你参考：</p><table tabindex="0"><thead><tr><th></th><th>服务商</th><th>特性说明</th><th>Proxy 代理地址</th><th>链接</th></tr></thead><tbody><tr><td><img src="https://github-production-user-asset-6210df.s3.amazonaws.com/17870709/296272721-c3ac0bf3-e433-4496-89c4-ebdc20689c17.jpg" width="48"></td><td><strong>AiHubMix</strong></td><td>使用 OpenAI 企业接口，全站模型价格为官方 <strong>6 折</strong>（含 GPT-4 ）</td><td><code>https://aihubmix.com/v1</code></td><td><a href="https://lobe.li/XHnZIUP" target="_blank" rel="noreferrer">获取</a></td></tr></tbody></table><blockquote><p><strong>免责申明</strong>: 在此推荐的 OpenAI API Key 由第三方代理商提供，所以我们不对 API Key 的 <strong>有效性</strong> 和 <strong>安全性</strong> 负责，请你自行承担购买和使用 API Key 的风险。</p></blockquote><h3 id="openai-api-key" tabindex="-1"><code>OPENAI_API_KEY</code> <a class="header-anchor" href="#openai-api-key" aria-label="Permalink to &quot;`OPENAI_API_KEY`&quot;">​</a></h3><ul><li>类型：必选</li><li>描述：这是你在 OpenAI 账户页面申请的 API 密钥，可以前往 <a href="https://platform.openai.com/api-keys" target="_blank" rel="noreferrer">这里</a> 查看</li><li>默认值：-</li><li>示例：<code>sk-xxxxxx...xxxxxx</code></li></ul><h3 id="openai-proxy-url" tabindex="-1"><code>OPENAI_PROXY_URL</code> <a class="header-anchor" href="#openai-proxy-url" aria-label="Permalink to &quot;`OPENAI_PROXY_URL`&quot;">​</a></h3><ul><li>类型：可选</li><li>描述：如果你手动配置了 OpenAI 接口代理，可以使用此配置项来覆盖默认的 OpenAI API 请求基础 URL</li><li>默认值：<code>https://api.openai.com/v1</code></li><li>示例：<code>https://api.chatanywhere.cn</code> 或 <code>https://aihubmix.com/v1</code></li></ul>',17),h=i('<h2 id="智谱-ai" tabindex="-1">智谱 AI <a class="header-anchor" href="#智谱-ai" aria-label="Permalink to &quot;智谱 AI&quot;">​</a></h2><h3 id="zhipu-api-key" tabindex="-1"><code>ZHIPU_API_KEY</code> <a class="header-anchor" href="#zhipu-api-key" aria-label="Permalink to &quot;`ZHIPU_API_KEY`&quot;">​</a></h3><ul><li>类型：必选</li><li>描述：这是你在 智谱 AI 服务中申请的 API 密钥</li><li>默认值：-</li><li>示例：<code>xxxxxx...xxxxxx</code></li></ul><h2 id="_01-ai" tabindex="-1">01 AI <a class="header-anchor" href="#_01-ai" aria-label="Permalink to &quot;01 AI&quot;">​</a></h2><h3 id="zeroone-api-key" tabindex="-1"><code>ZEROONE_API_KEY</code> <a class="header-anchor" href="#zeroone-api-key" aria-label="Permalink to &quot;`ZEROONE_API_KEY`&quot;">​</a></h3><ul><li>类型：必选</li><li>描述：这是你在零一万物服务中申请的 API 密钥</li><li>默认值：-</li><li>示例：<code>xxxxxx...xxxxxx</code></li></ul><h2 id="通义千问" tabindex="-1">通义千问 <a class="header-anchor" href="#通义千问" aria-label="Permalink to &quot;通义千问&quot;">​</a></h2><h3 id="qwen-api-key" tabindex="-1"><code>QWEN_API_KEY</code> <a class="header-anchor" href="#qwen-api-key" aria-label="Permalink to &quot;`QWEN_API_KEY`&quot;">​</a></h3><ul><li>类型：必选</li><li>描述：这是你在阿里云百炼平台上获取的 DashScope API 密钥</li><li>默认值：-</li><li>示例：<code>sk-xxxxx...xxxxx</code></li></ul>',9);function s(u,x,_,A,I,P){const e=n("Callout");return d(),l("div",null,[c,a(e,{type:"warning"},{default:o(()=>[t(" 请检查你的代理服务商的请求后缀，有的代理服务商会在请求后缀添加 `/v1`，有的则不会。如果你在测试时发现 AI 返回的消息为空，请尝试添加 `/v1` 后缀后重试。 ")]),_:1}),a(e,{type:"info"},{default:o(()=>[t(" 是否填写 `/v1` 跟模型服务商有很大关系，比如 openai 的默认地址是 `api.openai.com/v1` 。如果你的代理商转发了 `/v1` 这个接口，那么直接填 `proxy.com` 即可。 但如果模型服务商是直接转发了 `api.openai.com` 域名，那么你就要自己加上 `/v1` 这个 url。 ")]),_:1}),h])}const f=r(p,[["render",s]]);export{m as __pageData,f as default};
