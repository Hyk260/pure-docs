import{_ as a,c as e,a9 as o,o as r}from"./chunks/framework.4Ih4cC_B.js";const m=JSON.parse('{"title":"Commitlint 提交规范","description":"","frontmatter":{},"headers":[],"relativePath":"preface/commitlint.md","filePath":"preface/commitlint.md","lastUpdated":1721638292000}'),s={name:"preface/commitlint.md"};function n(d,t,i,l,c,p){return r(),e("div",null,t[0]||(t[0]=[o(`<h1 id="commitlint-提交规范" tabindex="-1">Commitlint 提交规范 <a class="header-anchor" href="#commitlint-提交规范" aria-label="Permalink to &quot;Commitlint 提交规范&quot;">​</a></h1><h2 id="_1-格式" tabindex="-1">1. 格式 <a class="header-anchor" href="#_1-格式" aria-label="Permalink to &quot;1. 格式&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git commit -m &lt;type&gt;[optional scope]: &lt;description&gt;</span></span></code></pre></div><ul><li><strong>type</strong>：提交的改动类型</li><li><strong>optional scope</strong>：修改范围（可选）</li><li><strong>description</strong>：主要内容</li></ul><h2 id="_2-type" tabindex="-1">2. type <a class="header-anchor" href="#_2-type" aria-label="Permalink to &quot;2. type&quot;">​</a></h2><table tabindex="0"><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td><strong>feat</strong></td><td>新功能（feature）</td></tr><tr><td><strong>fix</strong></td><td>修补 bug</td></tr><tr><td><strong>perf</strong></td><td>性能优化</td></tr><tr><td><strong>refactor</strong></td><td>优化重构（即不是新增功能，也不是修改 bug 的代码变动）</td></tr><tr><td><strong>style</strong></td><td>格式（不影响代码运行的变动）</td></tr><tr><td><strong>docs</strong></td><td>文档（documentation）</td></tr><tr><td><strong>test</strong></td><td>增加测试</td></tr><tr><td><strong>revert</strong></td><td>回滚</td></tr><tr><td><strong>config</strong></td><td>配置文件辅助工具变动</td></tr><tr><td><strong>chore</strong></td><td>其他变动</td></tr><tr><td><strong>release</strong></td><td>版本发布</td></tr></tbody></table><h2 id="_3-例子" tabindex="-1">3. 例子 <a class="header-anchor" href="#_3-例子" aria-label="Permalink to &quot;3. 例子&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>git commit -m &#39;feat: 增加 xxx 功能&#39;</span></span>
<span class="line"><span>git commit -m &#39;fix: 修复 xxx 功能&#39;</span></span></code></pre></div><blockquote><p>使用上述规范可以确保提交信息的统一性与可读性，有助于团队协作和版本管理。</p></blockquote>`,9)]))}const h=a(s,[["render",n]]);export{m as __pageData,h as default};