import{_ as r,c as l,J as a,w as o,a5 as i,E as n,o as d,a as t}from"./chunks/framework.Bx0JrJuv.js";const m=JSON.parse('{"title":"模型服务商","description":"","frontmatter":{},"headers":[],"relativePath":"guides/model-provider.md","filePath":"guides/model-provider.md","lastUpdated":1722231032000}'),p={name:"guides/model-provider.md"},c=i("",17),h=i("",9);function s(u,x,_,A,I,P){const e=n("Callout");return d(),l("div",null,[c,a(e,{type:"warning"},{default:o(()=>[t(" 请检查你的代理服务商的请求后缀，有的代理服务商会在请求后缀添加 `/v1`，有的则不会。如果你在测试时发现 AI 返回的消息为空，请尝试添加 `/v1` 后缀后重试。 ")]),_:1}),a(e,{type:"info"},{default:o(()=>[t(" 是否填写 `/v1` 跟模型服务商有很大关系，比如 openai 的默认地址是 `api.openai.com/v1` 。如果你的代理商转发了 `/v1` 这个接口，那么直接填 `proxy.com` 即可。 但如果模型服务商是直接转发了 `api.openai.com` 域名，那么你就要自己加上 `/v1` 这个 url。 ")]),_:1}),h])}const f=r(p,[["render",s]]);export{m as __pageData,f as default};
